import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import GuitarList from './pages/GuitarList.jsx'
import GuitarDetail from './pages/GuitarDetail.jsx'
import { getGuitarList } from './api/guitarApi.js'

function App() {
  const { data: guitars, isLoading, isError, error } = useQuery({
    queryKey: ['guitars'],
    queryFn: getGuitarList
  })

  if (isLoading) {
    return <p className='text-center mt-10'>Loading...</p>
  }

  if (isError) {
    return <p className='text-center mt-10'>Error! {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<GuitarList guitars={guitars} />} />
      <Route path="/guitar/:id" element={<GuitarDetail guitars={guitars} />} />
    </Routes>
  )
}

export default App
