import React, { useState } from 'react'
import { productData } from './Product-data'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Products/Product.css'
import {AiOutlinePlus} from 'react-icons/ai';
const Products = () => {
   const [items,setItems]=useState(productData)
  return (
    <>
    <div className='Products'>
        <div className='headings'>
            <h1>All Product</h1>
            <p>The products we provide only for you as our service are selected from the<br/>
best products with number 1 quality in the world</p>
        </div>
        {
            items.map((item)=>(
        <div className='d-inline-flex flex-column' key={item.id}>
        <Card className='shadow p-3 m-2  bg-body rounded' style={{ width: '19.8rem',}}>
            <div className='productss'>
        <Card.Img className='p-2'  style={{ height: '15rem' }} variant="top" src={require(`../../assets/${item.image}.png`)} />
       <Link to={"/Product_details"}><button type='button'className=''><AiOutlinePlus color='white' size={25}/></button>
       </Link>
        
        </div>
       
          </Card>
          <Card.Body  class="text-start p-2 ">
          <Card.Title className='fw-bold'>{item.Name}</Card.Title>
          <div className='d-flex '>
          <Card.Text className='pe-5 fw-bold'>
            {item.price}
          </Card.Text>
          <Card.Text class="text-decoration-line-through">
            {item.discount}
          </Card.Text>
          </div>
          </Card.Body>
          </div>

            ))
    
        }
       
    </div>
     <a href=''>view more</a>
     </>
  )
}

export default Products