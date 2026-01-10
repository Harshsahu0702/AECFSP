
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/landing.jsx'
import Developers from './components/developers.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
