import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../Slider/Slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import cimg1 from "../../assets/cimg1.png";
import cimg2 from "../../assets/cimg2.png";
// import img3 from "../../assets/img3.png";
// import img4 from "../../assets/img4.png";
const Slider = () => {
  const products = [
    {
      id: 1,
      image: cimg1,
      text: "Chair",
    },
    {
      id: 2,
      image: cimg2,
      text: "Bed",
    },
    {
      id: 3,
      image: cimg1,
      text: "Cupboard",
    },
    {
      id: 4,
      image: cimg2,
      text: "lighting",
    },
   
  ];
  return (
    <>
      <div className="sliderr">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {products.map((items)=>(
         <SwiperSlide>
         <div className="product">
           <img src={items.image} />
           <p>{items.text}</p>
         </div>
       </SwiperSlide>
       ))}
      </Swiper>
      </div>
    </>
   
  );
};

export default Slider;
