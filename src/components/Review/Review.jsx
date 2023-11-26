import React from 'react'
import '../Review/Review.css'
import {BsArrowRightShort,BsArrowLeftShort } from 'react-icons/bs';
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import { Container} from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from "react";
import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
const Review = () => {
    const swiperRef = useRef();
  return (
    <Container>
    <div className='Review'>
        <div className='left'>
            <div className='contents'>
                <h1>What People Are Saying About Us</h1>
            </div>
            
            <div className='review'>
            <Swiper 
             onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }} className="mySwiper"
            >
        <SwiperSlide>
        <div className='profile d-flex flex-column'>
               
                <div className='user '>
                   
                    <img src={img6}/>
                   
                <div className='profile1 d-flex flex-column mt-6'>
                <p className='u-name'>josh Smith</p>
                <p className='u-job'>Manager of the New York Times</p>
                </div>
                </div>
                <p className='para'>"They are have a perfect Touch for make Something so <br/>
                professional,interst and useful for a lot of people."</p>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
        <div className='profile d-flex flex-column'>
               
                <div className='user '>
                   
                    <img src={img6}/>
                   
                <div className='profile1 d-flex flex-column mt-6'>
                <p className='u-name'>josh Smith</p>
                <p className='u-job'>Manager of the New York Times</p>
                </div>
                </div>
                <p className='para'>"They are have a perfect Touch for make Something so <br/>
                professional,interst and useful for a lot of people."</p>
            </div>
            
        </SwiperSlide>
        
       
      </Swiper>
               <div className='buttons'>
                <button className='button' onClick={() => swiperRef.current.slidePrev()} type='button'><BsArrowLeftShort size={25} /></button>
                <button className='button1 ' type='submit'onClick={() => swiperRef.current.slideNext()}><BsArrowRightShort color='white' size={25}/></button>
            </div> 
            </div>
            

        </div>
        <div className='right'>
            <img src={img7}/>
        </div>
    </div>
    </Container>
  )
}

export default Review