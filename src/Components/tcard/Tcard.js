import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import    "./stylesa.css"
// Import Swiper styles
import tr1 from "./pic/tr1.avif"
import tr2 from "./pic/tr2.avif"
import tr3 from "./pic/tr3.avif"
import tr4 from "./pic/tr4.avif"
import tr5 from "./pic/tr5.avif"
import tr7 from "./pic/tr7.avif"
import tr8 from "./pic/tr8.jpg"
import tr9 from "./pic/tr9.jpg"

import tr6 from "./pic/tr6.jpg"
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';



// import required modules
import { Pagination ,Navigation} from "swiper";

export default function Appa() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="myNewSwiper"
      >
        <SwiperSlide> <img src={tr1} className="img"  /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
        <SwiperSlide><img src={tr2} className="img" /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
        <SwiperSlide><img src={tr3} /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
        <SwiperSlide><img src={tr4} /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
        <SwiperSlide><img src={tr5} /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
        <SwiperSlide><img src={tr6} /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
        <SwiperSlide><img src={tr7} /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
        <SwiperSlide><img src={tr8} /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
        <SwiperSlide><img src={tr9} /><h3>2013 KEWWORTH T800</h3><p>Day Cab Truck</p><button className="btn">View Details</button></SwiperSlide>
      </Swiper>
    </>
  );
}
