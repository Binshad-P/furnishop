import React from 'react'
import '../Branding/Branding.css'
import img5 from '../../assets/image5.png'
import { Container} from 'react-bootstrap'
const Branding = () => {
  return (
    <Container>
    <div className='Branding'>
      
        <div className='left'>
            <h1>The Best Furniture<br/> Manufacture Of Your Choice</h1>
            <p>Furniture power is a software as service for multipurpose <br/>
            bussiness managment system.expecially for them who are<br/>
            running two or more bussiness explore the future Furniture<br/>
            power is a software as service.</p>
        </div>
        <div className='right'>
            <img src={img5}/>
        </div>
    </div>
        </Container>
   
  )
}

export default Branding