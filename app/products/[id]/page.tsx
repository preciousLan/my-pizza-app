import AddToCartButton from '@/app/_components/AddToCartButton';
import Button from '@/app/_components/Button';
import Image from 'next/image';

interface paramsProp {
	params: {
		id: string;
	};
}

export default async function Page({ params }: paramsProp) {
	const { id } = await params; // ✔ get the dynamic ID
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	if (!res.ok) {
		throw new Error('Details could not be loaded');
	}
	const data = await res.json();

	const {
		id: productId,
		title,
		price,
		description,
		category,
		image,
		rating,
	} = data;
	return (
		<div className='flex min-h-screen p-5 '>
			<div className='max-w-[1000px] w-full mx-auto flex flex-col md:flex-row items-center justify-center bg-gray-100 gap-[50px]'>
				<div className='relative w-[400px] h-[400px]'>
					<Image src={image} alt={title} fill className='object-cover' />

					<AddToCartButton data={data} />
				</div>

				<div className=' flex flex-col w-[450px]'>
					<h1 className='text-white text-sm font-bold mb-5 bg-amber-600 px-5 p-3 rounded-full text-center'>
						{title}
					</h1>

					<p className='bg-gray-200 p-3 rounded-2xl shadow-xl mb-5 text-gray-600'>
						<span className='text-amber-900 font-bold '>Description: </span>
						{description}
					</p>

					<p className='bg-gray-200 p-3 rounded-2xl shadow-xl mb-5 text-gray-600'>
						<span className='text-amber-900 font-bold'>category:</span>{' '}
						{category}
					</p>

					<p className='bg-gray-200 p-3 rounded-2xl shadow-xl mb-5 text-gray-600'>
						<span className='text-amber-900 font-bold '>Price: </span>
						{price}
					</p>

					<p className='bg-gray-200 p-3 rounded-2xl shadow-xl mb-5 text-gray-600'>
						<span className='text-amber-900 font-bold '>Rating: </span>
						{rating.rate}
					</p>
					<Button />
				</div>
			</div>
		</div>
	);
}
