import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GuitarList from './pages/GuitarList.jsx'
import GuitarDetail from './pages/GuitarDetail.jsx'
import { getGuitarList } from './api/guitarAPI.js'

function App() {
  const [guitars, setGuitars] = useState([])

  useEffect(() => {
    const fetchGuitars = async () => {
      try {
        const data = await getGuitarList()
        setGuitars(data)
      } catch (err) {
        console.error("Failed to fetch guitars:", err)
      }
    }

    fetchGuitars()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<GuitarList guitars={guitars} />} />
      <Route path="/guitar/:id" element={<GuitarDetail guitars={guitars} />} />
    </Routes>
  )
}

export default App
