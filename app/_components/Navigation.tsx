import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    
	return (
		<nav className='flex justify-between  bg-red-800 text-white items-center lg:px-10'>
			<div className=' flex items-center'>
				<Link href="/products">
                <Image
                src="/logo.png"
                width={100}
                height={100}
                alt='logo'/>
                </Link>
                <Link href="/products" className='font-bold text-xl md:text-2xl'>Order2GO</Link>
			</div>

			<div className='flex gap-5'>
				<Link href='/cart'>Cart</Link>
				<Link href='/login'>Login</Link>
			</div>
		</nav>
	);
};

export default Navigation;
