'use client';

import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/16/solid';
import { product } from '../_types/types';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store'; // <-- THIS FIXES TS + ESLINT

import { addToCart, CartItem, removeFromCart } from '../_redux/cartSlice';

interface dataProps {
	data: product;
}

const AddToCartButton = ({ data }: dataProps) => {
	const dispatch = useDispatch();

	// 🟢 Fully typed. No "any", no ESLint error.
	const cart = useSelector((state: RootState) => state.cart.cart);

	const { title, price, image, id } = data;

	const newItems: CartItem = {
		id,
		title,
		price,
		image,
	};

	const exists = cart.find((item) => item.id === id);

	if (exists)
		return (
			<div
				className='absolute bottom-2.5 left-0 bg-amber-600 text-gray-800 p-3 flex gap-2 hover:translate-x-1 transition-all cursor-pointer'
				onClick={() => dispatch(removeFromCart(id))}>
				<TrashIcon className='w-6 h-6 text-gray-800' />
				<p>Remove From Cart</p>
			</div>
		);

	return (
		<div
			className='absolute bottom-2.5 left-0 bg-amber-600 text-gray-800 p-3 flex gap-2 hover:translate-x-1 transition-all cursor-pointer'
			onClick={() => dispatch(addToCart(newItems))}>
			<ShoppingCartIcon className='w-6 h-6 text-gray-800' />
			<p>add to cart</p>
		</div>
	);
};

export default AddToCartButton;
