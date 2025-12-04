import Products from '../_components/Products';
import { product } from '../_types/types';

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
			<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[60px] max-w-6xl mx-auto   p-4 rounded-lg justify-items-center mt-[100px] 
			'>
				{data.map((product) => (
					<Products key={product.id} product={product} />
				))}
			</div>
		</main>
	);
}
