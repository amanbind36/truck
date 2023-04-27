import React, { useState } from 'react';
import './Forms.css';

import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';


const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };

  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNum(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login or signup logic here depending on the value of `isLogin`
    if (isLogin) {
      console.log('Login submitted with email:', email, 'and password:', password);
    } else {
      console.log(
        'Signup submitted with fname:',
        fname,
        'Signup submitted with lname:',
        lname,
        'email:',
        email,
        'password:',
        password,
        'and confirmPassword:',
        confirmPassword
      );
    }
  };

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="authForm">



      <h1 id='headingLogin'>{isLogin ? 'Login' : 'Register Now And Bid'}</h1>

      <h3>Get access to the dealer only auction price and save up to 50%</h3>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            id='fname'
            onChange={handleFNameChange}
          /> 
        )}<br/>
        {!isLogin && (
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            id='lname'
            onChange={handleLNameChange}
          />
        )}<br/>

        {!isLogin && (
          <input
            type="tel"
            placeholder="Number"
            value={num}
            id='number'
            onChange={handleNumberChange}
          />
        )}<br/>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          id='email'
          onChange={handleEmailChange}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          id='password'
          onChange={handlePasswordChange}
        /> <br/>
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            id='ConfirmPass'
            onChange={handleConfirmPasswordChange}
          />
        )}<br/>

<p style={{fontSize:15}}> 
          {isLogin ? "" : `By click "Register Now" you agree to bid Terms and condition and Privacy Policy`} &nbsp;
           
        </p>


        <button type="submit" id='LoginBtn'>{isLogin ? 'Login' : 'Register Now'}</button>
        <p style={{fontSize:20}}> 
          {isLogin ? "Don't have an account?" : 'Already have an account?'} &nbsp;
          <br/>
          <button type="button" onClick={handleSwitchForm} id='signupBtn'>
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
        <button id='facebook'><FaFacebook id='icons'/>Facebook</button> <button id='google'><FcGoogle id='icons'/>Google</button>
      </form>
    </div>
  );
};

export default Form;
