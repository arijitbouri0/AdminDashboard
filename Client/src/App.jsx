import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import ProductDetails from './components/ProductView/ProductDetails';
import OrderHistory from './components/Order/OrderHistory'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductPage from './components/ProductView/ProductPage';
import OrderDetails from './components/Order/OrderDetails';


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/product/id/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<OrderHistory />} />
        <Route path='/order/id/:orderId' element={<OrderDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
