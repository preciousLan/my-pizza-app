'use client';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import { product } from '../_types/types';

interface dataProps {
	data: product;
}
type newItemsType = Pick<product, 'title' | 'category' | 'price' | 'image'>;

const AddToCartButton = ({ data }: dataProps) => {
	const { title, category, price, rating, image } = data;

	const newItems = {
		title,
		category,
		price,
		image,
	};

	function handleClick(newItems: newItemsType) {
		console.log(newItems);
	}

	return (
		<div
			className='absolute bottom-2.5 left-0 bg-amber-600 text-gray-800 p-3 flex gap-2 hover:translate-x-1 transition-all cursor-pointer'
			onClick={() => handleClick(newItems)}>
			<ShoppingCartIcon className='w-6 h-6 text-gray-800' />
			<p>add to cart</p>
		</div>
	);
};

export default AddToCartButton;
