import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Slider from '../Slider/Slider'
import '../Store/Store.css'
const Store = () => {
  return (
    <div className='store'>
        <div className='left'>
            <h1>New In <br/> Store Now</h1>
            <p>Get the latest items immediatly <br/>
            
            with promo prices</p>
            <a href=''>Check All</a> 
            <BsArrowRight className='icon'/>
        </div> 
        <div className='right'>
          <Slider/>
        </div>
    </div>
  )
}

export default Store