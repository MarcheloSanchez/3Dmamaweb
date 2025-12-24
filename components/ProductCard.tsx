import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-zinc-100 dark:bg-zinc-700">
        {/* TODO: Replace with actual product images */}
        <div className="flex items-center justify-center h-full text-zinc-400">
          <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{name}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-zinc-900 dark:text-white">${price.toFixed(2)}</span>
          <Link
            href={`/shop/${id}`}
            className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
