import React from 'react'
import  { useState } from 'react'
import { productData } from '../../../components/Products/Product-data'
import '../Related_products/Related_product.css'
import { Card } from 'react-bootstrap'
import {BiSolidStar,} from 'react-icons/bi';
const Related_products = () => {
    const [items,setItems]=useState(productData.slice(4))
  return (
    <div className='Related_products'>
      <h3 className='heading1'>Related products</h3>
      <div className='cardss'>
        {
            items.map((item)=>(
        <div className='d-inline-flex flex-column' key={item.id}>
        <Card className='shadow p-3 m-2  bg-body rounded' style={{ width: '19.8rem',}}>
            <div className='productss'>
        <Card.Img className='p-2'  style={{ height: '15rem' }} variant="top" src={require(`../../../assets/${item.image}.png`)} />
       
        </div>
       
          </Card>
          <Card.Body  class="text-start p-2 ">
          <Card.Title className='fw-bold'>{item.Name}</Card.Title>
          <div className='demo d-flex  '>
          <Card.Text className='pe-5 fw-bold'>
            {item.price}
          </Card.Text>
          <Card.Text class="">
           <BiSolidStar/> {item.rating}
          </Card.Text>
          </div>
          </Card.Body>
          </div>

            ))
        }
        </div>
    </div>
  )
}

export default Related_products