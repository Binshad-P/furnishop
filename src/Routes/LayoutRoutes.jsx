import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import Header from '../components/Header/Header'
import Landing from '../Pages/Landing'
import Product_deatils from '../Pages/Product_details/Product_details'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import Products from '../components/Products/Products'
import Contact from '../components/Contact/Contact'

const LayoutRoutes = () => {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
            <Route path='/'element={<Landing/>}></Route>
            <Route path='/about'element={<Services/>}></Route>
            <Route path='/product'element={<Products/>}></Route>
            <Route path='/contact'element={<Contact/>}></Route>
            <Route path='/product_details'element={<Product_deatils/>}></Route>
            </Routes>
            <Footer/>
        </Router>
        
    </div>
  )
}

export default LayoutRoutes