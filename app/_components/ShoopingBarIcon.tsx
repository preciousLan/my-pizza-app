'use client';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const ShoopingBarIcon = () => {
	const cart = useSelector((state) => state.cart.cart);
	const pathname = usePathname();
	if (pathname === "/cart") return null;
	return (
		<Link href='/cart' className='relative'>
			<div className='text-red-900 bg-white p-3 rounded-full'>
				<ShoppingCartIcon className='w-8 md:w-10' />
			</div>
			{cart.length > 0 ? (
				<span className='absolute -top-4 left-6 bg-red-900 text-white  rounded-full w-7 h-7 flex items-center justify-center border-2 border-amber-700 animate-bounce'>
					{cart.length}
				</span>
			) : (
				''
			)}
		</Link>
	);
};

export default ShoopingBarIcon;
