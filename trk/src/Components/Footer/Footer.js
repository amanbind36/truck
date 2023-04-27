import React from 'react'
import Styles from "./footer.module.css"
import { FaFacebookSquare,FaTwitter ,FaLinkedin,FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className={Styles.container}>
      <div className={Styles.main}>
      <div className={Styles.p}>
        <p>Returns and Refunds</p>
        <p>FR&Star Shipping</p>
        <p>Currency Financing</p>
        <p>Advertising</p>
        <p>Contact Us</p>
      
        <FaFacebookSquare className={Styles.icon} />
        <FaTwitter className={Styles.icon}/>
        <FaLinkedin className={Styles.icon}/>
        <FaInstagram className={Styles.icon}/>
      
     
      </div>
      <hr/>
      <div className={Styles.dm}>
       <p>DMCA Policy</p>
       <p>Terms Of Use</p>
       <p>Privacy Policy</p>
       <p>Cookies Policy</p>
       <p>Site Map</p>
       <p>Accessibility Statement</p>
       <p>CA Privacy Policy and Rights</p>
      </div>
      </div>
      <p>Copyright @ 2023 Sandhils Global| Reproduction without expressed written consent is forbidden</p>
    </div>
    </>
  )
}

export default Footer