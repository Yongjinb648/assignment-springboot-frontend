import { Routes, Route } from 'react-router-dom'
import GuitarList from './pages/GuitarList.jsx'
import GuitarDetail from './pages/GuitarDetail.jsx'

const guitars = [
  {
    id: '1',
    model: 'Black Burn MK2',
    type: 'Strat',
    pickup: 'H-H',
    bridge: 'Floyd Rose',
    color: 'Black',
    price: 300000,
  },
  {
    id: '2',
    model: 'Classic 60s Strat',
    type: 'Strat',
    pickup: 'S-S-S',
    bridge: 'Vintage Tremolo',
    color: 'Olympic White',
    price: 550000,
  },
  {
    id: '3',
    model: 'Vintage Telecaster',
    type: 'Tele',
    pickup: 'S-S',
    bridge: 'Tele Bridge',
    color: 'Butterscotch Blonde',
    price: 520000,
  },
  {
    id: '4',
    model: 'Modern Singlecut',
    type: 'Singlecut',
    pickup: 'H-H',
    bridge: 'Tune-O-Matic',
    color: 'Heritage Cherry Sunburst',
    price: 800000,
  },
  {
    id: '5',
    model: 'City Semi-Hollow',
    type: 'Semi-Hollow',
    pickup: 'H-H',
    bridge: 'Tune-O-Matic',
    color: 'Cherry',
    price: 900000,
  },
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuitarList guitars={guitars} />} />
      <Route path="/guitar/:id" element={<GuitarDetail guitars={guitars} />} />
    </Routes>
  )
}

export default App
