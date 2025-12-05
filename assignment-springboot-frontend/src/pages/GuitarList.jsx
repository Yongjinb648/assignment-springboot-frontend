import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import GuitarCard from '../components/GuitarCard.jsx'
import { getGuitarList } from '../api/guitarApi.js'

export default function GuitarList() {
    const [sort, setSort] = useState('priceAsc')
    const [keyword, setKeyword] = useState('')          // 입력용
    const [searchKeyword, setSearchKeyword] = useState('')  // 실제 검색용

    const {
        data: guitars = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['guitars', sort, searchKeyword],
        queryFn: () => getGuitarList({ sort, keyword: searchKeyword }),
    })

    const handleSearch = () => {
        setSearchKeyword(keyword)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch()
    }

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
                🎸Guitar Collection DataBase
            </h1>

            {/* 정렬 + 검색 바 */}
            <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                {/* 정렬 버튼 */}
                <div className="inline-flex rounded-full bg-white shadow-sm overflow-hidden">
                    <button
                        onClick={() => setSort('priceAsc')}
                        className={`px-4 py-2 text-sm font-medium ${sort === 'priceAsc'
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        가격 오름차순
                    </button>
                    <button
                        onClick={() => setSort('priceDesc')}
                        className={`px-4 py-2 text-sm font-medium ${sort === 'priceDesc'
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        가격 내림차순
                    </button>
                </div>

                {/* 검색창 */}
                <div className="flex gap-2 w-full md:w-80">
                    <input
                        type="text"
                        placeholder="모델명 검색"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700"
                    >
                        검색
                    </button>
                </div>
            </div>

            {/* 카드 그리드 */}
            {guitars.length === 0 ? (
                <p className="text-center text-gray-500 mt-10 text-lg">
                    검색 결과가 없습니다.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {guitars.map((guitar) => (
                        <GuitarCard key={guitar.id} guitar={guitar} />
                    ))}
                </div>
            )}
        </div>
    )
}
