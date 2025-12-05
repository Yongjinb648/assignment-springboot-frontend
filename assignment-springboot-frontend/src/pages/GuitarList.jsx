import { Link } from 'react-router-dom'
import GuitarCard from '../components/GuitarCard.jsx'

export default function GuitarList({ guitars }) {
    return (
        <>
            {guitars.map(guitar => (
                <GuitarCard key={guitar.id} guitar={guitar} />
            ))}
        </>
    )
}