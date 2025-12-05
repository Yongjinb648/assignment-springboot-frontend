import { Link } from 'react-router-dom'

export default function GuitarCard({ guitar }) {
    return (
        <Link
            to={`/guitar/${guitar.id}`}
            className="group flex flex-col items-stretch bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-150 overflow-hidden"
        >
            <div className="w-full aspect-square overflow-hidden">
                <img
                    src={`https://picsum.photos/seed/${guitar.id}/400/400`}
                    alt={`${guitar.model} 기타 이미지`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
            </div>

            <div className="px-3 py-2">
                <div className="text-base font-semibold text-gray-900 truncate">
                    {guitar.model}
                </div>
                <div className="text-sm text-gray-500">
                    {guitar.price.toLocaleString()}
                </div>
            </div>
        </Link>
    )
}
