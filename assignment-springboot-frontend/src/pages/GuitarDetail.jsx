import { useParams, Link } from 'react-router-dom'

const GuitarDetail = () => {
    const { id } = useParams()

    return (
        <div>
            <img
                src={`https://picsum.photos/200/200?random=${id}`}
                alt={`기타 이미지`}
            />
            <Link to="/">
                돌아가기
            </Link>
        </div>
    )
}

export default GuitarDetail
