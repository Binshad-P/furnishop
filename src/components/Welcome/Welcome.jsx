import React from 'react'
import "./welcome.css"
import { Link } from 'react-router-dom'
import Boxes from '../Boxes/Boxes'

const Welcome = () => {
  return (
    <>
    <div className='main-body '>
      <h1>Creative Home Simplify your <br/>
      Furniture
      </h1>
      <p>Do i have constent to record this meeting gain location,root-and<br/>
      branch,review,nor game plan who's the goto</p>
      <Link to={"/product"} className='title2 text-white'><button type='submit' className='glass-button'>Shop Now</button></Link>

      
        
    </div>
   
    <Boxes/>
   
   
    </>

    
  )
}

export default Welcome