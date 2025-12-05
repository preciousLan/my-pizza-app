'use client';
import { useState } from 'react';
import Products from './Products';
import SortButtons from './SortButtons';
import { usePathname, useSearchParams } from 'next/navigation';

const SearchInput = ({ data }) => {
	const searchParams = useSearchParams();
	const [query, setQuery] = useState('');

	const searchValue = query
		? data.filter(
				(d) =>
					(d.title ?? '').toLowerCase().includes(query.toLowerCase()) ||
					(d.description ?? '').toLowerCase().includes(query.toLowerCase())
		  )
		: data;

	const params = searchParams.get('sortBy') || 'all';
	let sortValue;
	if (params === 'all') sortValue = searchValue;
	if (params === 'high')
		sortValue = searchValue.filter((search) => search.price > 100);
	if (params === 'low')
		sortValue = searchValue.filter((search) => search.price < 100);
	return (
		<div className='flex flex-col'>
			<input
				value={query}
				type='text'
				placeholder='search'
				className='border outline-0 w-full max-w-[400px] mx-auto mt-10 p-2 px-4 focus:ring ring-amber-400'
				onChange={(e) => setQuery(e.target.value)}
			/>

			<div className=' flex items-center justify-center flex-col'>
				<div className='mt-10'>
					<SortButtons />
				</div>
				<div
					className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[60px] max-w-6xl mx-auto   p-4 rounded-lg justify-items-center 
			'>
					{sortValue.map((product) => (
						<Products key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchInput;
