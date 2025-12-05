import { Link } from 'react-router-dom'
import GuitarCard from '../components/GuitarCard.jsx'

export default function GuitarList({ guitars }) {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
                🎸Guitar Collection DataBase
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {guitars.map((guitar) => (
                    <GuitarCard key={guitar.id} guitar={guitar} />
                ))}
            </div>
        </div>
    )
}
