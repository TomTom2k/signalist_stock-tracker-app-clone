'use client';

import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
const NavItems = () => {
	const pathname = usePathname();

	const isActive = (href: string) => {
		if (href === '/') {
			return pathname === href;
		}
		return pathname.startsWith(href);
	};

	return (
		<ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
			{NAV_ITEMS.map(({ label, href }) => (
				<li key={href}>
					<Link
						href={href}
						className={` hover:text-yellow-500 transition-colors ${
							isActive(href) ? 'text-gray-100' : ''
						}`}>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavItems;
