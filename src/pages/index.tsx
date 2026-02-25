import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [loadingProblems, setLoadingProblems] = useState(true);
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;

	return (
		<main className='min-h-screen bg-gradient-to-b from-gray-900 via-dark-layer-2 to-black text-dark-gray-8'>
			<Topbar />
			<section className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-10'>
				<div className='mb-8 text-center'>
					<p className='text-xs font-semibold tracking-[0.2em] text-dark-gray-6 uppercase'>
						Practice smarter
					</p>
					<h1 className='mt-3 text-3xl sm:text-4xl font-semibold text-white'>
						Quality problems, clean workspace.
					</h1>
					<p className='mt-2 text-sm sm:text-base text-dark-gray-7 max-w-2xl mx-auto'>
						Focus on a curated set of interview questions with a simple,
						distraction-free coding environment.
					</p>
				</div>

				<div className='mb-10'>
					<div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-dark-divider-border-2 bg-black/30 px-4 sm:px-6 py-4'>
						<div>
							<h2 className='text-sm sm:text-base font-semibold text-white mb-1'>AlgoLift Visual</h2>
							<p className='text-xs sm:text-sm text-dark-gray-7 max-w-md'>
								See how pathfinding and other algorithms work step by step in an interactive visualizer.
							</p>
						</div>
						<Link href='/visual'>
							<button className='w-full sm:w-auto px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-brand-orange text-black hover:brightness-110 transition-all'>
								Open AlgoLift Visual
							</button>
						</Link>
					</div>
				</div>

				<div className='relative overflow-x-auto'>
					<div className='rounded-xl border border-dark-divider-border-2 bg-black/20 backdrop-blur-sm shadow-sm'>
						{loadingProblems && (
							<div className='animate-pulse px-4 sm:px-6 pt-4 pb-6'>
								{[...Array(8)].map((_, idx) => (
									<LoadingSkeleton key={idx} />
								))}
							</div>
						)}
						<table className='w-full text-sm text-left text-dark-gray-7'>
							{!loadingProblems && (
								<thead className='text-xs uppercase tracking-wide text-dark-gray-6 border-b border-dark-divider-border-2 bg-black/20'>
									<tr>
										<th scope='col' className='px-4 sm:px-5 py-3 w-0 font-medium text-center'>
											Status
										</th>
										<th scope='col' className='px-4 sm:px-6 py-3 w-0 font-medium'>
											Title
										</th>
										<th scope='col' className='px-4 sm:px-6 py-3 w-0 font-medium'>
											Difficulty
										</th>
										<th scope='col' className='px-4 sm:px-6 py-3 w-0 font-medium'>
											Category
										</th>
										<th scope='col' className='px-4 sm:px-6 py-3 w-0 font-medium text-right sm:text-center'>
											Solution
										</th>
									</tr>
								</thead>
							)}
							<ProblemsTable setLoadingProblems={setLoadingProblems} />
						</table>
					</div>
				</div>
			</section>
		</main>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-6 mt-3 px-2 sm:px-4'>
			<div className='w-5 h-5 shrink-0 rounded-full bg-dark-fill-3'></div>
			<div className='h-3 sm:w-56 w-32 rounded-full bg-dark-fill-3'></div>
			<div className='h-3 sm:w-40 w-24 rounded-full bg-dark-fill-3'></div>
			<div className='h-3 sm:w-32 w-20 rounded-full bg-dark-fill-3'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};
