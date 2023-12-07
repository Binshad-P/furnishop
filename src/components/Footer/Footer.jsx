import React from 'react'
import '../Footer/Footer.css'
import {AiOutlineInstagram,AiFillFacebook, AiOutlineTwitter,AiFillGithub,} from 'react-icons/ai';
import { Container} from 'react-bootstrap'
const Footer = () => {
  return (
      <div className='Footer'>
        <Container>
        <div className='main-section'>
            {/* <h1>TipTop</h1> */}
            <div className='icons'>
                <button type='submit'><AiOutlineInstagram color='white' size={25}/></button>
                <button type='submit'><AiFillFacebook color='white' size={25}/></button>
                <button type='submit'><AiOutlineTwitter color='white' size={25}/></button>
                <button type='submit'><AiFillGithub color='white' size={25}/></button>
                <button type='submit'><AiOutlineInstagram color='white' size={25}/></button>
            </div>
        </div>
        <div className='lineee'></div>
        
        <div className='sub-section'>
            <div className='contentssss'>
            <div className='head'>
                <h1>Our Products</h1>
            </div>
            <div className='sub-head'>
                <p>The Support Suite</p>
                <p>The Sales Suite</p>
                <p>Support</p>
                <p>Guide</p>
            </div>
            </div>
            <div className='contentssss'>
            <div className='head'>
                <h1>Top Features</h1>
            </div>
            <div className='sub-head'>
                <p>Ticketing System</p>
                <p>Knowledge Base</p>
                <p>Community Forums</p>
                <p>Help Desk Software</p>
            </div>
            </div>
            <div className='contentssss'>
            <div className='head'>
                <h1>Resources</h1>
            </div>
            <div className='sub-head'>
                <p>Product Support</p>
                <p>Request Demo</p>
                <p>Library</p>
                <p>Peoplepower Blog</p>
            </div>
            </div>
            <div className='contentssss'>
            <div className='head'>
                <h1>Company</h1>
            </div>
            <div className='sub-head'>
                <p>About Us</p>
                <p>Press</p>
                <p>Investors</p>
                <p>Events</p>
            </div>
            </div>
            <div className='contentssss'>
            <div className='head'>
                <h1>Favourite Things</h1>
            </div>
            <div className='sub-head'>
                <p>For Enterprise</p>
                <p>For Startups</p>
                <p>For Benchmark</p>
                <p>For Small Business</p>
            </div>
            </div>
        </div>
       <div>    
   < p className='py-5'>© NameBrand 2022 - All Rights Reserved</p>
   </div>

    </Container>
    </div>
  )
}

export default Footer