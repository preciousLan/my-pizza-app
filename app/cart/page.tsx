'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import type { RootState } from '../store'; // ✅ IMPORTANT FIX
import CartItems from '../_components/CartItems';

const Page = () => {
  // 🟢 FIX: type the selector state
  const cart = useSelector((state: RootState) => state.cart.cart);

  if (cart.length === 0)
    return (
      <div className="text-center flex flex-col mt-[100px] p-10 gap-10">
        <p className="text-lg font-bold">You dont have any cart</p>
        <Link
          href="/products"
          className="bg-red-800 p-3 text-white rounded-2xl hover:bg-red-700 transition-all w-full max-w-[600px] mx-auto"
        >
          Go to product store to order now!
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto gap-10 px-3">
      {cart.map((carts) => (
        <CartItems key={carts.id} cart={carts} />
      ))}

      <p className="text-center text-2xl text-red-900">
        You no get money and you wan order! dey play. This is a test work tho
      </p>
    </div>
  );
};
