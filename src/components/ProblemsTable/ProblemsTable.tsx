import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";

type ProblemsTableProps = {
	setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ setLoadingProblems }) => {
	const [youtubePlayer, setYoutubePlayer] = useState({
		isOpen: false,
		videoId: "",
	});
	const problems = useGetProblems(setLoadingProblems);
	const solvedProblems = useGetSolvedProblems();
	console.log("solvedProblems", solvedProblems);
	const closeModal = () => {
		setYoutubePlayer({ isOpen: false, videoId: "" });
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleEsc);

		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return (
		<>
			<tbody className='text-white'>
				{problems.map((problem, idx) => {
					const difficulyColor =
						problem.difficulty === "Easy"
							? "text-dark-green-s"
							: problem.difficulty === "Medium"
							? "text-dark-yellow"
							: "text-dark-pink";
					return (
						<tr
							className={`${idx % 2 == 1 ? "bg-dark-layer-1/50" : "bg-transparent"} hover:bg-dark-fill-3/60 transition-colors`}
							key={problem.id}
						>
							<th className='px-3 sm:px-4 py-3 font-medium whitespace-nowrap text-dark-green-s text-center align-middle'>
								{solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='18' />}
							</th>
							<td className='px-4 sm:px-6 py-3'>
								<Link
									className='hover:text-brand-orange cursor-pointer transition-colors'
									href={`/problems/${problem.id}`}
								>
									{problem.title}
								</Link>
							</td>
							<td className={`px-4 sm:px-6 py-3 ${difficulyColor}`}>{problem.difficulty}</td>
							<td className={'px-4 sm:px-6 py-3 text-dark-gray-7'}>{problem.category}</td>
							<td className={'px-4 sm:px-6 py-3 text-right sm:text-center'}>
								{problem.videoId ? (
									<AiFillYoutube
										fontSize={"28"}
										className='cursor-pointer text-dark-gray-7 hover:text-red-500 transition-colors'
										onClick={() =>
											setYoutubePlayer({ isOpen: true, videoId: problem.videoId as string })
										}
									/>
								) : (
									<p className='text-dark-gray-6 text-xs sm:text-sm'>Coming soon</p>
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
			{youtubePlayer.isOpen && (
				<tfoot className='fixed inset-0 z-40 flex items-center justify-center'>
					<div
						className='absolute inset-0 bg-black/80 backdrop-blur-sm'
						onClick={closeModal}
					></div>
					<div className='relative z-50 w-full max-w-4xl px-4 sm:px-6'>
						<div className='relative w-full rounded-xl overflow-hidden bg-black/80 border border-dark-divider-border-2 shadow-xl'>
							<IoClose
								fontSize={"32"}
								className='cursor-pointer absolute top-4 right-4 text-dark-gray-7 hover:text-white transition-colors'
								onClick={closeModal}
							/>
							<YouTube
								videoId={youtubePlayer.videoId}
								loading='lazy'
								iframeClassName='w-full min-h-[260px] sm:min-h-[420px] md:min-h-[500px]'
							/>
						</div>
					</div>
				</tfoot>
			)}
		</>
	);
};
export default ProblemsTable;

function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
	const [problems, setProblems] = useState<DBProblem[]>([]);

	useEffect(() => {
		const getProblems = async () => {
			// fetching data logic
			setLoadingProblems(true);
			const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
			const querySnapshot = await getDocs(q);
			const tmp: DBProblem[] = [];
			querySnapshot.forEach((doc) => {
				tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
			});
			setProblems(tmp);
			setLoadingProblems(false);
		};

		getProblems();
	}, [setLoadingProblems]);
	return problems;
}

function useGetSolvedProblems() {
	const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
	const [user] = useAuthState(auth);

	useEffect(() => {
		const getSolvedProblems = async () => {
			const userRef = doc(firestore, "users", user!.uid);
			const userDoc = await getDoc(userRef);

			if (userDoc.exists()) {
				const data = userDoc.data() as { solvedProblems?: string[] };
				setSolvedProblems(data.solvedProblems ?? []);
			} else {
				setSolvedProblems([]);
			}
		};

		if (user) getSolvedProblems();
		if (!user) setSolvedProblems([]);
	}, [user]);

	return solvedProblems;
}
