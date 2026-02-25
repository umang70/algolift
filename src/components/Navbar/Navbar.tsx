import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
type NavbarProps = {};


const Navbar: React.FC<NavbarProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);

	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true }));
	};

	return (
		<header className='flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 text-dark-gray-7'>
			<Link href='/' className='flex items-center gap-2'>
				<Image src='/logo-full.png' alt='AlgoLift logo' height={460} width={180} />
			</Link>

			<nav className='hidden sm:flex items-center gap-6 text-xs sm:text-sm'>
				<Link href='/' className='hover:text-white transition-colors'>Problems</Link>
				<Link href='/visual' className='hover:text-white transition-colors'>Visualizer</Link>
			</nav>

			<div className='flex items-center gap-2 sm:gap-3'>
				<Link href='/visual' className='sm:hidden'>
					<button className='px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-fill-3 text-dark-gray-7 hover:bg-dark-fill-2 transition-colors'>
						Visualizer
					</button>
				</Link>
				<button
					className='px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-brand-orange text-black hover:brightness-110 transition-all'
					onClick={handleClick}
				>
					Sign In
				</button>
			</div>
		</header>
	);
};
export default Navbar;
