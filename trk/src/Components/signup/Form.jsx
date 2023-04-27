import React, { useState } from 'react';
import './Forms.css';


const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
        'Signup submitted with name:',
        name,
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

<button type="button" onClick={handleSwitchForm} id='topBtn1'>login

            {isLogin ==='Login'}
          </button>
          <button type="button" onClick={handleSwitchForm} id='topBtn2'>Sign
            {!isLogin === 'Signup'}
          </button>

      <h1 id='headingLogin'>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            id='name'
            onChange={handleNameChange}
          /> 
        )} <br/>
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
        <button type="submit" id='LoginBtn'>{isLogin ? 'Login' : 'Signup'}</button>
        <p style={{fontSize:20}}> 
          {isLogin ? "Don't have an account?" : 'Already have an account?'} &nbsp;
          <br/><button type="button" onClick={handleSwitchForm} id='signupBtn'>
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
