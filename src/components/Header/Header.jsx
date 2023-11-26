import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import '../Header/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  
  const location = useLocation()

  return (
    
    <Navbar collapseOnSelect  expand="lg" className={location.pathname=="/Product_details"?"bg-dark":"navbar11 bg-transparent position-absolute "}>
      <Container>
        <Link to={'/'}  className='title1 text-white'>DEMO.</Link>
        
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex gap-5">
          <Link to={"/"} className='title2 text-white'> Home</Link>
          <Link to={"/"} className='title2 text-white'> About</Link>
          
          <Link to={"/"} className='title2 text-white'> Product</Link>
          <Link to={"/"} className='title2 text-white'> Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header