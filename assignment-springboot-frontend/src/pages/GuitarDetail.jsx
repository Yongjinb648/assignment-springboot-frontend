import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getGuitarDetail } from '../api/guitarAPI'

// 테스트용 하드코딩 데이터
const guitar = {
    id: '232',
    model: 'black burn mk2',
    type: 'strat',
    pickup: 'H-H',
    price: 300000,
    image: '구현할 계획, 실제 URL',
}

const GuitarDetail = () => {
    const { id } = useParams()

    const { data: guitar, isLoading, isError, error } = useQuery({
        queryKey: ['guitar', id],
        queryFn: () => getGuitarDetail(id),
        enabled: !!id,
    })

    if (isLoading) {
        return <p className='text-center mt-10'>Loading...</p>
    }

    if (isError) {
        return <p className='text-center mt-10'>Error! {error.message}</p>
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
            <div className="bg-white max-w-md w-full p-6 rounded-3xl shadow-xl">
                {/* 썸네일 */}
                <img
                    src={`https://picsum.photos/192/192?random=${id}`}
                    alt="기타 이미지"
                    className="w-32 h-32 mx-auto rounded-2xl object-cover mb-4"
                />

                {/* 기타 정보 */}
                <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">
                    {guitar.model}
                </h1>

                <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-700 space-y-1">
                    <p>
                        <span className="font-semibold">모델명: </span>
                        {guitar.model}
                    </p>
                    <p>
                        <span className="font-semibold">타입: </span>
                        {guitar.type}
                    </p>
                    <p>
                        <span className="font-semibold">픽업 구성: </span>
                        {guitar.pickup}
                    </p>
                    <p>
                        <span className="font-semibold">가격: </span>
                        {guitar.price.toLocaleString()}원
                    </p>
                </div>

                <Link
                    to="/"
                    className="mt-6 block text-center w-full py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                >
                    리스트
                </Link>
            </div>
        </div>
    )
}

export default GuitarDetail
