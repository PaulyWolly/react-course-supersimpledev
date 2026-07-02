import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'

function App() {
  
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout.html" element={<div>Checkout</div>} />
      <Route path="orders.html" element={<div>Orders</div>} />
    </Routes>
  )
}

export default App
