import Image from 'next/image';
import Link from 'next/link';
import SignOut from '@/app/_components/SignOut';
import { Session } from 'next-auth'; // ✅ FIX: proper type

interface NavigationProps {
  session: Session | null; // ✅ No 'any', fully typed
}

const Navigation = ({ session }: NavigationProps) => {
  return (
    <nav className="flex justify-between bg-red-800 text-white items-center px-2 lg:px-10 sticky top-0 z-40 w-screen">
      <div className="flex items-center">
        <Link href="/products">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </Link>
        <Link href="/products" className="font-bold text-xl md:text-2xl">
          Order2GO
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        <Link href="/cart">Cart</Link>

        {session ? (
          <SignOut />
        ) : (
          <div className="relative">
            <Link
              href="/login"
              className="bg-white text-black p-3 px-5 rounded-full font-bold"
            >
              Login
            </Link>
            <span className="absolute -top-5 right-2 inline-flex h-4 w-4 animate-ping rounded-full bg-white opacity-75"></span>
            <span className="absolute -top-5 right-2 inline-flex h-4 w-4 rounded-full bg-red-500 border border-white"></span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
