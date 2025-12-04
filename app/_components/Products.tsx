import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { product } from '../_types/types';

type productProp = {
	product: product;
};
const Products = ({ product }:productProp) => {
	const { id, title, price, description, category, image, rating } = product;
	return (
		<Card  className='relative bg-gray-100!'>
			<div className='relative w-full h-[400px]'>
				<Image src={image} alt={title} fill className='object-cover' />
			</div>

			<CardContent>
				<Typography
					gutterBottom
					variant='h5'
					component='div'
					className='text-red-900 font-bold text-sm'>
					{title}
				</Typography>
				<Typography
					variant='body2'
					sx={{ color: 'text.secondary' }}
					className='pb-7'>
					{description.split(' ').slice(0, 30).join(' ') + '....'}
				</Typography>
			</CardContent>
			<CardActions>
				<Link
					href={`/products/${id}`}
					className='bg-primary py-2 rounded-full px-5 absolute bottom-2 font-bold shadow shadow-cyan-800 hover:opacity-80 hover:-translate-y-1 transition-all'>
					{' '}
					Check Out
				</Link>
			</CardActions>
		</Card>
	);
};

export default Products;
