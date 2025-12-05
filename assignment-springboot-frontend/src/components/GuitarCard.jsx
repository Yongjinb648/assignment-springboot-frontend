import { Link } from 'react-router-dom'

export default function GuitarCard({ guitar }) {
    return (
        <Link to={`/guitar/${guitar.id}`}>
            <img
                src={`https://picsum.photos/100/100?random=${guitar.id}`}
                alt={`${guitar.model} 기타 이미지" />`}
            />
            <div>모델명 : {guitar.model}</div>
            <div>타입 : {guitar.type}</div>
            <div>픽업 : {guitar.pickup}</div>
            <div>색깔 : {guitar.color}</div>
            <div>가격 : {guitar.price.toLocaleString()}원</div>
        </Link>
    )
}