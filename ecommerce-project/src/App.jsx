import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'

function App() {
  
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="index.html" element={<HomePage />} />
      <Route path="checkout.html" element={<CheckoutPage />} />
      <Route path="orders.html" element={<div>Orders Page</div>} />
    </Routes>
  )
}

export default App
