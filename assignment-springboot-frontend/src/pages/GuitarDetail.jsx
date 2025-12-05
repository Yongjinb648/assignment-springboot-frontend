import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getGuitarDetail } from '../api/guitarAPI'

const GuitarDetail = () => {
    const { id } = useParams()

    const { data: guitar, isLoading, isError, error } = useQuery({
        queryKey: ['guitar', id],
        queryFn: () => getGuitarDetail(id),
        enabled: !!id,
    })

    if (isLoading) {
        return <p className="text-center mt-10 text-lg">Loading...</p>
    }

    if (isError) {
        return (
            <p className="text-center mt-10 text-lg text-red-500">
                Error! {error.message}
            </p>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 flex justify-center items-center">
            <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl px-10 py-8">
                {/* 큰 썸네일 */}
                <div className="mx-auto mb-6 w-40 h-40 rounded-3xl overflow-hidden shadow-lg">
                    <img
                        src={`https://picsum.photos/seed/${id}/600/600`}
                        alt="기타 이미지"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 제목 */}
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                    {guitar.model}
                </h1>

                {/* 상세 정보 박스 */}
                <div className="bg-gray-50 rounded-2xl px-6 py-5 text-base text-gray-800 space-y-2 leading-relaxed">
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
                        <span className="font-semibold">브릿지: </span>
                        {guitar.bridge}
                    </p>
                    <p>
                        <span className="font-semibold">색상: </span>
                        {guitar.color}
                    </p>
                    <p>
                        <span className="font-semibold">가격: </span>
                        {guitar.price.toLocaleString()}원
                    </p>
                </div>

                <Link
                    to="/"
                    className="mt-8 block w-full py-3.5 text-center rounded-full bg-indigo-600 text-white text-base font-semibold hover:bg-indigo-700 transition"
                >
                    돌아가기
                </Link>
            </div>
        </div>
    )
}

export default GuitarDetail
