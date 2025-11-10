import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main className='auth-layout'>
			<section className='auth-left-section scrollbar-hide-default'>
				<Link href='/'>
					<Image
						src='/assets/images/logo.png'
						alt='Signalist'
						width={140}
						height={32}
						className='w-auto h-8 cursor-pointer my-4'
					/>
				</Link>

				<div className='pb-6 lg:pb-8 flex-1'>{children}</div>
			</section>

			<section className='auth-right-section'>
				<div className='z-10 relative lg:mt-4 lg:mb-16'>
					<blockquote className='auth-blockquote'>
						<p className='text-gray-400'>
							Signlist turned my watchlist into a winning list.
							The alerts are spot on!
						</p>
					</blockquote>
					<div className='flex items-center justify-between'>
						<div>
							<cite className='auth-testimonial-author'>
								John Doe
							</cite>
							<p className='max-md:text-xs text-gray-500'>
								Retail Investor
							</p>
						</div>
						<div className='flex items-center gap-0.5'>
							{[...Array(5)].map((_, index) => (
								<Image
									src='/assets/icons/star.svg'
									alt='Star'
									width={16}
									height={16}
									className='w-4 h-4'
								/>
							))}
						</div>
					</div>
				</div>

				<div className='flex-1 relative'>
					<Image
						src='/assets/images/dashboard-preview.png'
						alt='Dashboard Preview'
						width={1024}
						height={1024}
						className='w-full h-auto max-w-none lg:block rounded-xl shadow-2xl'
					/>
				</div>
			</section>
		</main>
	);
};

export default Layout;
