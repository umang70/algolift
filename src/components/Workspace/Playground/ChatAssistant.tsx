import React, { useEffect, useState } from "react";

type ChatMessage = {
	role: "user" | "assistant";
	content: string;
};

type ModelInfo = {
	id: string; // e.g. "gemini-2.0-flash"
	displayName?: string;
	supportedGenerationMethods?: string[];
};

type ChatAssistantProps = {
	isOpen: boolean;
	onClose: () => void;
	currentCode: string;
};

const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_MODEL_CANDIDATES = [
	"gemini-2.0-flash",
	"gemini-2.0-flash-lite",
	"gemini-1.5-flash-latest",
	"gemini-1.5-flash",
	"gemini-1.5-pro-latest",
	"gemini-1.5-pro",
	"gemini-pro",
];

function normalizeModelId(nameOrId: string): string {
	// ListModels returns names like "models/gemini-1.5-flash"
	return nameOrId.startsWith("models/") ? nameOrId.slice("models/".length) : nameOrId;
}

async function listModels(apiKey: string, apiVersion: "v1beta" | "v1"): Promise<ModelInfo[]> {
	const res = await fetch(`${GEMINI_BASE_URL}/${apiVersion}/models?key=${encodeURIComponent(apiKey)}`);
	if (!res.ok) {
		const text = await res.text();
		throw new Error(text || `ListModels failed (${res.status})`);
	}
	const data = await res.json();
	const models = (data?.models || []) as any[];
	return models.map((m) => ({
		id: normalizeModelId(m?.name || ""),
		displayName: m?.displayName,
		supportedGenerationMethods: m?.supportedGenerationMethods || [],
	}));
}

function pickDefaultModel(models: ModelInfo[]): string | null {
	const capable = models.filter((m) => (m.supportedGenerationMethods || []).includes("generateContent"));
	if (capable.length === 0) return null;

	for (const candidate of DEFAULT_MODEL_CANDIDATES) {
		if (capable.some((m) => m.id === candidate)) return candidate;
	}
	return capable[0].id;
}

async function generateContent(params: {
	apiKey: string;
	apiVersion: "v1beta" | "v1";
	modelId: string;
	prompt: string;
}) {
	const { apiKey, apiVersion, modelId, prompt } = params;
	const url = `${GEMINI_BASE_URL}/${apiVersion}/models/${encodeURIComponent(modelId)}:generateContent?key=${encodeURIComponent(
		apiKey
	)}`;
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			contents: [
				{
					role: "user",
					parts: [{ text: prompt }],
				},
			],
		}),
	});

	if (!response.ok) {
		const text = await response.text();
		const err = new Error(text || `Gemini API error (${response.status})`);
		// @ts-expect-error attach status for retry logic
		err.status = response.status;
		throw err;
	}

	return response.json();
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ isOpen, onClose, currentCode }) => {
	const [apiKey, setApiKey] = useState("");
	const [prompt, setPrompt] = useState("");
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [apiVersion, setApiVersion] = useState<"v1beta" | "v1">("v1beta");
	const [modelId, setModelId] = useState<string>("gemini-2.0-flash");
	const [availableModels, setAvailableModels] = useState<ModelInfo[]>([]);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const savedModel = window.localStorage.getItem("gemini-model-id");
		const savedVersion = window.localStorage.getItem("gemini-api-version") as "v1beta" | "v1" | null;
		if (savedModel) setModelId(savedModel);
		if (savedVersion === "v1beta" || savedVersion === "v1") setApiVersion(savedVersion);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;
		window.localStorage.setItem("gemini-model-id", modelId);
	}, [modelId]);

	useEffect(() => {
		if (typeof window === "undefined") return;
		window.localStorage.setItem("gemini-api-version", apiVersion);
	}, [apiVersion]);

	useEffect(() => {
		let cancelled = false;
		async function refreshModels() {
			if (!apiKey.trim()) return;
			try {
				const models = await listModels(apiKey.trim(), apiVersion);
				if (cancelled) return;
				setAvailableModels(models);
				const picked = pickDefaultModel(models);
				if (picked && !models.some((m) => m.id === modelId)) {
					setModelId(picked);
				}
			} catch {
				// Don't block asking; we'll retry on demand
			}
		}
		refreshModels();
		return () => {
			cancelled = true;
		};
	}, [apiKey, apiVersion, modelId]);

	if (!isOpen) return null;

	const handleAsk = async () => {
		setError(null);

		if (!apiKey.trim()) {
			setError("Please provide your Gemini API key.");
			return;
		}

		if (!prompt.trim()) {
			setError("Please enter a question for the assistant.");
			return;
		}

		const userMessage: ChatMessage = {
			role: "user",
			content: prompt.trim(),
		};

		const newMessages = [...messages, userMessage];
		setMessages(newMessages);
		setPrompt("");
		setIsLoading(true);

		try {
			// Build a coding-focused prompt with current editor code as context
			const fullPrompt = [
				"You are a coding assistant embedded inside a code editor.",
				"Answer with concise, specific guidance and example code where useful.",
				"",
				"Current editor code:",
				"```",
				currentCode || "// (editor is currently empty)",
				"```",
				"",
				"User question:",
				userMessage.content,
			].join("\n");

			let data: any;
			try {
				data = await generateContent({
					apiKey: apiKey.trim(),
					apiVersion,
					modelId,
					prompt: fullPrompt,
				});
			} catch (e: any) {
				const status = e?.status;
				const rawMessage = typeof e?.message === "string" ? e.message : "";
				const looksLikeModelNotFound = status === 404 || rawMessage.includes("ListModels") || rawMessage.includes("NOT_FOUND");

				if (looksLikeModelNotFound) {
					// Auto-discover a supported model and retry. Also fallback to v1 if v1beta fails.
					const tryVersions: Array<"v1beta" | "v1"> = apiVersion === "v1beta" ? ["v1beta", "v1"] : ["v1", "v1beta"];
					let recovered = false;

					for (const ver of tryVersions) {
						try {
							const models = await listModels(apiKey.trim(), ver);
							setAvailableModels(models);
							const picked = pickDefaultModel(models);
							if (!picked) continue;
							setApiVersion(ver);
							setModelId(picked);
							data = await generateContent({
								apiKey: apiKey.trim(),
								apiVersion: ver,
								modelId: picked,
								prompt: fullPrompt,
							});
							recovered = true;
							break;
						} catch {
							// keep trying
						}
					}

					if (!recovered) throw e;
				} else {
					throw e;
				}
			}

			const text =
				data?.candidates?.[0]?.content?.parts
					?.map((p: { text?: string }) => p.text || "")
					.join("\n")
					.trim() || "I couldn't generate a response.";

			const assistantMessage: ChatMessage = {
				role: "assistant",
				content: text,
			};

			setMessages([...newMessages, assistantMessage]);
		} catch (err: any) {
			setError(
				err?.message ||
					"Something went wrong while talking to Gemini. Please check your key and try again."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='fixed inset-y-0 right-0 z-30 w-full max-w-md bg-dark-layer-2 border-l border-dark-fill-3 flex flex-col shadow-lg'>
			<div className='flex items-center justify-between px-4 py-3 border-b border-dark-fill-3 bg-dark-layer-1'>
				<div className='flex flex-col'>
					<span className='text-sm font-semibold text-white'>AI Coding Assistant</span>
					<span className='text-[11px] text-dark-label-2'>
						Backed by Google Gemini. Your key is never stored.
					</span>
				</div>
				<button
					type='button'
					onClick={() => {
						setApiKey("");
						setPrompt("");
						onClose();
					}}
					className='text-dark-label-2 hover:text-white text-sm px-2 py-1 rounded-md hover:bg-dark-fill-2'
				>
					Close
				</button>
			</div>

			<div className='px-4 py-3 border-b border-dark-fill-3 space-y-2'>
				<label className='block text-[11px] text-dark-label-2 mb-1'>
					Gemini API key
				</label>
				<input
					type='password'
					value={apiKey}
					onChange={(e) => setApiKey(e.target.value)}
					placeholder='Paste your Gemini API key'
					className='w-full rounded-md bg-dark-layer-1 border border-dark-fill-3 text-xs px-2 py-1.5 text-white placeholder:text-dark-label-2 focus:outline-none focus:ring-1 focus:ring-dark-green-s'
				/>
				<p className='text-[10px] text-dark-label-2'>
					Tip: You can create a key from the Gemini Developer Console.
				</p>

				<div className='flex items-center gap-2 pt-1'>
					<div className='flex-1'>
						<label className='block text-[11px] text-dark-label-2 mb-1'>Model</label>
						<select
							value={modelId}
							onChange={(e) => setModelId(e.target.value)}
							className='w-full rounded-md bg-dark-layer-1 border border-dark-fill-3 text-xs px-2 py-1.5 text-white focus:outline-none focus:ring-1 focus:ring-dark-green-s'
						>
							{(availableModels.length ? availableModels : DEFAULT_MODEL_CANDIDATES.map((id) => ({ id }))).map(
								(m) => (
									<option key={m.id} value={m.id}>
										{m.displayName ? `${m.displayName} (${m.id})` : m.id}
									</option>
								)
							)}
						</select>
					</div>
					<div className='w-28'>
						<label className='block text-[11px] text-dark-label-2 mb-1'>API</label>
						<select
							value={apiVersion}
							onChange={(e) => setApiVersion(e.target.value as "v1beta" | "v1")}
							className='w-full rounded-md bg-dark-layer-1 border border-dark-fill-3 text-xs px-2 py-1.5 text-white focus:outline-none focus:ring-1 focus:ring-dark-green-s'
						>
							<option value='v1beta'>v1beta</option>
							<option value='v1'>v1</option>
						</select>
					</div>
				</div>
			</div>

			<div className='flex-1 overflow-y-auto px-4 py-3 space-y-3'>
				{messages.length === 0 && (
					<div className='text-[12px] text-dark-label-2'>
						Ask questions like:
						<ul className='list-disc ml-4 mt-1 space-y-1'>
							<li>“Explain what my current code does.”</li>
							<li>“How can I optimize this function?”</li>
							<li>“Write tests for the current file.”</li>
						</ul>
					</div>
				)}
				{messages.map((m, idx) => (
					<div
						key={idx}
						className={`rounded-lg px-3 py-2 text-xs whitespace-pre-wrap ${
							m.role === "user"
								? "bg-dark-fill-3 text-white self-end"
								: "bg-dark-layer-1 text-gray-200 border border-dark-fill-3"
						}`}
					>
						<span className='block text-[10px] font-semibold mb-1 text-dark-label-2'>
							{m.role === "user" ? "You" : "Assistant"}
						</span>
						{m.content}
					</div>
				))}
			</div>

			{error && (
				<div className='px-4 pb-1 text-[11px] text-red-400'>
					{error}
				</div>
			)}

			<div className='px-4 py-3 border-t border-dark-fill-3 bg-dark-layer-1'>
				<textarea
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					rows={2}
					className='w-full rounded-md bg-dark-layer-2 border border-dark-fill-3 text-xs px-2 py-1.5 text-white placeholder:text-dark-label-2 focus:outline-none focus:ring-1 focus:ring-dark-green-s resize-none'
					placeholder='Ask a coding-related question about the code in the editor...'
				/>
				<div className='mt-2 flex justify-end'>
					<button
						type='button'
						onClick={handleAsk}
						disabled={isLoading}
						className='px-3 py-1.5 text-xs font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-green-s hover:bg-green-3 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg'
					>
						{isLoading ? "Asking Gemini..." : "Ask Gemini"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatAssistant;

