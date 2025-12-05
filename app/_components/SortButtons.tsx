'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SortButtons = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();

  function handleSort(sort: string) {   // ✅ FIXED: typed argument
    const params = new URLSearchParams(searchParams.toString());
    params.set('sortBy', sort);
    router.replace(`${pathname}?${params.toString()}`);
  }

  const isActive = searchParams.get('sortBy') || 'all';

  return (
    <div className="flex gap-3 items-center">
      <p>SortBy:</p>
      <div className="flex gap-4 p-1 px-5">
        <button
          onClick={() => handleSort('all')}
          className={`${
            isActive === 'all'
              ? 'bg-red-600 px-4 rounded-3xl text-white'
              : 'hover:bg-red-500 px-4 rounded-3xl'
          }`}
        >
          All
        </button>

        <select
          value={isActive === 'high' || isActive === 'low' ? isActive : ''}
          onChange={(e) => handleSort(e.target.value)}
          className="outline-0"
        >
          <option value="">-- select --</option>
          <option value="high">High Price</option>
          <option value="low">Low Price</option>
        </select>
      </div>
    </div>
  );
};

export default SortButtons;
