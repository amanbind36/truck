import React from 'react'
import Styles from "./hot.module.css"
import pic1 from './image/pic1.webp'
import pi2 from './image/pi2.webp'
import pi3 from './image/pi3.webp'
import pi4 from './image/pi4.webp'
import pi5 from './image/pi5.webp'
import pi6 from './image/pi6.png'
import pi7 from './image/pi7.webp'
import pi8 from './image/pi8.webp'
import pi9 from './image/pi9.webp'
import pi10 from './image/pi10.webp'
import pi11 from './image/pi11.webp'
import pi12 from './image/pi12.webp'

const Hot = () => {
  return (
    <>
     <h1>View Hot Auction Makes </h1>
    <div className={Styles.container}>
   
    <div className={Styles.main}>
       <div>
        <img height="100%" width="100%" src={pic1}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi2}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi3}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi4}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi5}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi6}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi7}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi8}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi9}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi10}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi11}/>
       </div>
       <div>
       <img height="100%" width="100%" src={pi12}/>
       </div>
    </div>

    </div>
    </>
  )
}

export default Hot