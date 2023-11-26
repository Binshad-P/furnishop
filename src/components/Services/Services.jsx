import React from 'react'
import img1 from '../../assets/img1.png'
import { AiFillCheckCircle } from 'react-icons/ai';
import '../Services/Services.css'
import { Container} from 'react-bootstrap'
const Services = () => {
  return (
    <Container>
    <div className='Services'>
      
        <div className='left'>
            <img src={img1}/>
        </div>
        <div className='right'>
            <h1>We create Your Home <br/> More Aestetic.</h1>
            <p className='head'>Furnitre power is a software as services for multipurpose<br/>
            bussiness managment system.</p>
        
        <div className='contentss'>
        <div className='sub-content1'>
        <div className='check'>
        <AiFillCheckCircle size={30}/>
        </div>
        <div className='sub-content2'>
        <p className='head1'>Valuation Services</p>
        <p className='head2'>Sometimes features require short description.this can be detailed<br/>
        description.
        </p>
        </div>
        </div>
        <div className='sub-content1'>
            <div className='check'>
        <AiFillCheckCircle size={30}/>
        </div>
        <div className='sub-content2'>
        <p className='head1'>Development Of Furniture Models</p>
        <p className='head2'>Sometimes features require short description.this can be detailed<br/>
        description.
       </p>
       </div>
        </div>
        </div>
        </div>
       
    </div>
    </Container>
  )
}

export default Services