import React from 'react'
import Styles from "./navabar.module.css"
import Form from '../signup/Form'
import {Link} from "react-router-dom"

const Navabar = () => {
  return (
    <>
    <div className={Styles.container}>
    <div className={Styles.left}>
        <h3>TRUCKBID</h3>
    </div>
    <div className={Styles.mid}>
        <input type='text' placeholder='Search for Trucks by make, model, VIN' />
    </div>
    <div className={Styles.right}>
    <Link to="/form"> <button className={Styles.login}>Login</button></Link>
       
    <Link to="/form"><button className={Styles.reg}>Registor</button></Link>
    </div>
    </div>

    <div className={Styles.main}>
    <Link to="/"><h4>Home</h4></Link>
     <h4>Auction</h4>
     <h4>Buy</h4>
     <h4>Sell</h4>
     <h4>Result</h4>
     <h4>Equipment</h4>
     <h4>Appraisals</h4>
     <h4>Shipping</h4>
     <h4>About</h4>
     <Link to="/contect"><h4> Contact</h4></Link>
    </div>
    </>
  )
}

export default Navabar