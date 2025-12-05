'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BackIcon() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="p-2">
      <ArrowLeftIcon className="h-6 w-6 text-gray-700 border-2" />
    </button>
  );
}


