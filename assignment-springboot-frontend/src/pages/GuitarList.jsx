import { Link } from 'react-router-dom'
import GuitarCard from '../components/GuitarCard.jsx'

export default function GuitarList({ guitars }) {
    return (
        <div className='p-6'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {guitars.map(guitar => (
                    <GuitarCard key={guitar.id} guitar={guitar} />
                ))}
            </div>
        </div>
    )
}