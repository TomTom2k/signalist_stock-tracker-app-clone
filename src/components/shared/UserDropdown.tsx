'use client';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { LogOutIcon } from 'lucide-react';
import NavItems from './NavItems';
const UserDropdown = () => {
	const router = useRouter();

	const handleLogout = () => {
		router.push('/sign-in');
	};

	const user = {
		name: 'John Doe',
		email: 'john.doe@example.com',
		image: 'https://github.com/shadcn.png',
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='flex items-cen gap-3 text-gray-400 hover:text-yellow-500'>
					<Avatar>
						<AvatarImage src={user.image} alt={user.name} />
						<AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
							{user.name.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div className='hidden md:flex flex-col items-start'>
						<span className='text-base font-medium text-gray-400'>
							{user.name}
						</span>
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='text-gray-400'>
				<DropdownMenuLabel>
					<div className='flex relative items-center gap-3 py-2'>
						<Avatar className='size-10'>
							<AvatarImage src={user.image} alt={user.name} />
							<AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
								{user.name.charAt(0)}
							</AvatarFallback>
						</Avatar>
						<div className='flex flex-col'>
							<span className='text-base font-medium text-gray-400'>
								{user.name}
							</span>
							<span className='text-sm text-gray-500'>
								{user.email}
							</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator className='bg-gray-600' />
				<DropdownMenuItem
					onClick={handleLogout}
					className='text-gray-100 text-md font-medium focus:text-yellow-500 transition-colors cursor-pointer'>
					<LogOutIcon className='size-4 mr-2 hidden ms:block' />
					<span>Logout</span>
				</DropdownMenuItem>
				<nav className='sm:hidden'>
					<NavItems />
				</nav>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserDropdown;
