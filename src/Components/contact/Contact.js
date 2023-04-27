import React from 'react'
import Styles from "./contact.module.css"

const Contact = () => {
  return (
    <>
    <div className={Styles.container}>
    <h1>Selling with TruckBid is Easy</h1>
    <div className={Styles.line}></div>
    <p>Living in the age of technology gives  you options, especially when it comes to selling your vehicles. Whether it’s total loss, aged inventory or even donated, IAA has the services in place to get your vehicles moving through the lanes.</p>
    </div>

    <div className={Styles.contain}>
    <div className={Styles.main}>
        <h1>Let's Get in Touch</h1>
        <div className={Styles.linea}></div>
        <p>Fill out the form below, and we'll be in touch shortly</p>
        <div className={Styles.inp}>
        <div>
        <label>FIRST NAME</label>
        <br/>
      <input type='text'/>
        </div>
        <div>
        <label>LAST NAME</label>
      <br/>
      <input type='text'/>
        </div>
      
     
        </div>


        <div className={Styles.inp}>
        <div>
        <label>EMAIL ADDRESS</label>
        <br/>
      <input type='text'/>
        </div>
        <div>
        <label>PHONE NUMBER</label>
      <br/>
      <input type='text'/>
        </div>
      
     
        </div>
        <br/>
        <br/>
        <label>QUESTION OR COMMENTS</label>
        <br/>
      <textarea className={Styles.text}></textarea>
     <br/>
     <br/>
      <button className={Styles.btn}>Submit</button>
    </div>

   
    </div>
    </>
  )
}

export default Contact