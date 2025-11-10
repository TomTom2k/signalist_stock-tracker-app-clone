import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import NavItems from '@/components/shared/NavItems';
import UserDropdown from '@/components/shared/UserDropdown';

const Header = () => {
	return (
		<header className='sticky top-0 header'>
			<div className='header-wrapper container'>
				<Link href='/'>
					<Image
						src='/assets/images/logo.png'
						alt='Signalist'
						width={140}
						height={32}
						className='w-auto h-8 cursor-pointer'
					/>
				</Link>
				<nav className='hidden sm:block'>
					<NavItems />
				</nav>
				<UserDropdown />
			</div>
		</header>
	);
};

export default Header;
