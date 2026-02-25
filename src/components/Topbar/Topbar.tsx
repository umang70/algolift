import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Timer from "../Timer/Timer";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

type TopbarProps = {
	problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();

	const handleProblemChange = (isForward: boolean) => {
		const { order } = problems[router.query.pid as string] as Problem;
		const direction = isForward ? 1 : -1;
		const nextProblemOrder = order + direction;
		const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

		if (isForward && !nextProblemKey) {
			const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
			router.push(`/problems/${firstProblemKey}`);
		} else if (!isForward && !nextProblemKey) {
			const lastProblemKey = Object.keys(problems).find(
				(key) => problems[key].order === Object.keys(problems).length
			);
			router.push(`/problems/${lastProblemKey}`);
		} else {
			router.push(`/problems/${nextProblemKey}`);
		}
	};

	const openAuthModal = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }));
		router.push("/auth");
	};

	// Simpler, focused header for problem workspace
	if (problemPage) {
		return (
			<nav className='relative flex h-12 w-full shrink-0 items-center px-4 sm:px-6 bg-dark-layer-1 border-b border-dark-divider-border-2 text-dark-gray-7'>
				<div className='flex w-full items-center justify-between gap-4'>
					<div className='flex items-center gap-2 sm:gap-3'>
						<button
							type='button'
							className='flex h-8 w-8 items-center justify-center rounded-md bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-gray-7'
							onClick={() => router.push("/")}
						>
							<FaChevronLeft />
						</button>
						<Link href='/' className='text-xs sm:text-sm font-medium text-dark-gray-8 hover:text-white'>
							Problems
						</Link>
					</div>

					<div className='hidden sm:flex items-center gap-2 text-xs'>
						<button
							type='button'
							className='px-2 py-1 rounded-md bg-dark-fill-3 hover:bg-dark-fill-2'
							onClick={() => handleProblemChange(false)}
						>
							<FaChevronLeft className='inline-block mr-1' /> Prev
						</button>
						<button
							type='button'
							className='px-2 py-1 rounded-md bg-dark-fill-3 hover:bg-dark-fill-2'
							onClick={() => handleProblemChange(true)}
						>
							Next <FaChevronRight className='inline-block ml-1' />
						</button>
					</div>

					<div className='flex items-center gap-3 justify-end flex-1'>
						{user && <Timer />}
						{!user && (
							<button
								type='button'
								className='px-3 py-1.5 rounded-md text-xs sm:text-sm bg-dark-fill-3 hover:bg-dark-fill-2'
								onClick={openAuthModal}
							>
								Sign In
							</button>
						)}
						{user && (
							<>
								<div className='cursor-pointer group relative'>
									<Image src='/avatar.png' alt='Avatar' width={28} height={28} className='rounded-full' />
									<div
										className='absolute top-9 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'
									>
										<p className='text-xs sm:text-sm'>{user.email}</p>
									</div>
								</div>
								<Logout />
							</>
						)}
					</div>
				</div>
			</nav>
		);
	}

	// Default header used on home and other non-workspace pages
	return (
		<nav className='relative flex h-14 w-full shrink-0 items-center px-4 sm:px-6 border-b border-dark-divider-border-2 bg-black/40 backdrop-blur-md text-dark-gray-7'>
			<div className='flex w-full items-center justify-between max-w-[1200px] mx-auto'>
				<Link href='/' className='flex items-center gap-2 h-[24px]'>
					<Image src='/logo-full.png' alt='Logo' height={90} width={180} />
				</Link>

				<div className='flex items-center gap-3'>
					{!user && (
						<button
							type='button'
							className='px-3 py-1.5 rounded-md text-xs sm:text-sm bg-dark-fill-3 hover:bg-dark-fill-2'
							onClick={openAuthModal}
						>
							Sign In
						</button>
					)}
					{user && (
						<>
							<div className='cursor-pointer group relative'>
								<Image src='/avatar.png' alt='Avatar' width={28} height={28} className='rounded-full' />
								<div
									className='absolute top-9 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'
								>
									<p className='text-xs sm:text-sm'>{user.email}</p>
								</div>
							</div>
							<Logout />
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
export default Topbar;
