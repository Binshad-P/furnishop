import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/img16.png'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./Slider.css"

export default function Swipers() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className="slider">
    <div className="left-slider">
    <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={4}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            direction={"vertical"}
            height={320}
          >
           <div >
              <SwiperSlide >
                <img className="left-side-img" src={img1}/>
              </SwiperSlide>
              <SwiperSlide>
              <img className="left-side-img"src={img2}/>
              </SwiperSlide>
              <SwiperSlide>
              <img className="left-side-img" src={img3}/>
              </SwiperSlide>
              <SwiperSlide>
              <img className="left-side-img"src={img4}/>
              </SwiperSlide>
              </div>
          </Swiper>
          </div>
          <div className="right-slider">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={false}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
           
              <SwiperSlide>
              <img src={img1}/>
              </SwiperSlide>
              <SwiperSlide>
              <img src={img2}/>
              </SwiperSlide>
              <SwiperSlide>
              <img src={img3}/>
              </SwiperSlide>
              <SwiperSlide>
              <img src={img4}/>
              </SwiperSlide>
            
          </Swiper>
          </div>
        </div>
    </>
  );
}
