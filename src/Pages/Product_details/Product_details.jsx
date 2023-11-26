import React from 'react'
import OverView from '../Product_details/OverView'
import Swipers from '../Product_details/Swipers'
import '../Product_details/Product_details.css'
import { Container} from 'react-bootstrap'
import Related_products from './Related_products/Related_products'
import Rating_review from './Rating_review/Rating_review'
import { useEffect } from 'react'
const Product_details = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
    <div className='Product_details'>
    
        <div className='left'>
        <Swipers/>
        </div>
        <div className='right'>
        <OverView/>
        </div>
        
        </div>
        <Related_products/>
        <Rating_review/>
   
    </Container>
  )
}

export default Product_details