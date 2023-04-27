import React,{useState,useEffect} from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import pic1 from './pic/pic1.jpg';
import pic2 from './pic/pic2.jpg';
import pic3 from './pic/pic3.jpg';
import pic4 from './pic/pic4.jpg';
import pic5 from './pic/pic5.jpg';



// import required modules
import { Autoplay } from "swiper";

const Home1 = () => {

    let truckDetails=[
        {
            name:'Truck Auctions in BROOKHAVEN NY 11719 9203',
            image:pic1
        },
        {
            name:'Truck Auctions in APOPKA FL 32712 5870',
            image:pic2
        },
        {
            name:'truck Auctions in APOPKA FL 32712 5870',
            image:pic3
        },
        {
            name:'Truck Auctions in APOPKA FL 32712 5870',
            image:pic4
        }
    ];

    const  Truck =({name,image})=>{
        return(
        <div id='eachCard'>
            <p id='Virtual'>Virtual Auction :</p>
            <p id='nameText'>{name}</p> <br/>
            <img src={image} className='img'/>
        </div>
        )
    }



  return (
    <>
    
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic5} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic2} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={pic3} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic4} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic1} className='carouselImg'/></SwiperSlide>      
      </Swiper>

    <div className='titleDiv'>

            <button id='btnTruck'>Truck</button>  <button id='btnTruck'>Truck Parts</button>  <button id='btnTruck'>Truck Service Center</button> <br/><br/><br/>

 

            <p id='heading1'>Online Truck Auctions.<br/>
            Best Deals Near You.</p>
        <p id='discrib'>300,000+ repairable, wrecked & salvage title truck for sale. Over 150 weekly live auctions open to the public.</p>

        <br/>
        <br/>
        <button  id='myBtn1'>Sign Up to Bid Now</button> &nbsp; &nbsp;&nbsp;
        <button id='myBtn2'>How It Works</button>
    </div>




    
    </>
  )
}

export default Home1