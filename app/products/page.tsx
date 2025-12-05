import { Suspense } from 'react';
import SearchInput from '../_components/SearchInput';
import { product } from '../_types/types';
import Loader from '../_components/Loader';

export default async function Home() {
	const res = await fetch('https://fakestoreapi.com/products');
	if (!res.ok) throw new Error('an ERROR occured, coundnt load products');
	const data: product[] = await res.json();

	if (data.length === 0) return <p> No Data Found</p>;

	return (
		<main className='min-h-screen  p-8  '>
			<h1 className='text-center font-bold text-5xl bg-[linear-gradient(to_right,red,brown,orange)] text-transparent bg-clip-text'>
				{' '}
				Find Whatever you want with Ease!
			</h1>
			<Suspense fallback={<Loader/>}>
			<SearchInput data={data} />

			</Suspense>
		</main>
	);
}
