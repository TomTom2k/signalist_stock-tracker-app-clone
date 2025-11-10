import Link from 'next/link';
import React from 'react';

interface FooterLinkProps {
	text: string;
	linkText: string;
	href: string;
}

const FooterLink = ({ text, linkText, href }: FooterLinkProps) => {
	return (
		<div className='text-center pt-4'>
			<p className='text-sm text-gray-500'>{text}</p>
			<Link href={href} className='text-yellow-500 hover:text-yellow-500'>
				{linkText}
			</Link>
		</div>
	);
};

export default FooterLink;
