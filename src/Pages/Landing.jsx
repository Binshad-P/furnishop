import React from 'react'
import Welcome from '../components/Welcome/Welcome';
import Services from '../components/Services/Services';
import Store from '../components/Store/Store';
import Branding from '../components/Branding/Branding';
import Review from '../components/Review/Review';
import Contact from '../components/Contact/Contact';
import Products from '../components/Products/Products';

const Landing = () => {
  return (
    
  <>
   <div className="Hero-section">
  
  <Welcome/>
  </div>
  <Services/>
  <Store/>
  <Branding/>
  <Products/>
  <Review/>
  <Contact/>
 </>
 

 
  )
}

export default Landing