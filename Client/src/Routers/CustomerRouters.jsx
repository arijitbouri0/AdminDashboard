import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Customer/Pages/Home'
import Footer from '../Customer/components/Footer'
import Product from '../Customer/components/ProductView/Product'
import ProductDetails from '../Customer/components/ProductView/ProductDetails'
import Checkout from '../Customer/components/Checkout/Checkout'
import OrderHistory from '../Customer/components/Order/OrderHistory'
import OrderDetails from '../Customer/components/Order/OrderDetails'
import AboutPage from '../Customer/Pages/About'
import ContactForm from '../Customer/Pages/ContactUs'
import NavBar from '../Customer/components/NavBar'

const CustomerRouters = () => {
  return (
    <>
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product/>} />
        <Route path='/product/id/:id' element={<ProductDetails/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/orders' element={<OrderHistory/>} />
        <Route path='/order/id/:orderId' element={<OrderDetails />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default CustomerRouters
