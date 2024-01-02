import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'

const Signup = () => {
  const navlink = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await axios.post("http://localhost:4000/api/auth/register", {
          email, password, username
        }).then(res => {
          console.log(res.data);
            if(res.data == "notexist") {
              navlink('/');
            }else if(res.data == "exist"){
              alert("Email already exist");
            }
          })
      } catch {
        console.log(e);
      };
    }
    else {
      alert('password and confirm password is different');
    }
  }
  return (
    <>
      <div className="signup-container">
      <h1>Sign-Up</h1>
      <div className='text'>
        <h2>A.M.S.</h2>
        <p>Welcome to A.M.S.</p>
      </div>
        <div className="signup-form">
          <form>
          <span>Username</span>
            <input type='text' onChange={(e) => { setUsername(e.target.value) }} placeholder='Username' />
            <span>Email</span>
            <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='E-mail' />
            <span>Password</span>
            <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
            <span>Confirm password</span>
            <input type='password' onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder='Confirm Password' />
          </form>
        </div>
        <div className='signup-image'>
        <img src='./image/signup.jpg' alt='signup-image'/>
        </div>
        <div className='signup-submit'>
        <button type='submit' onClick={submit} >Submit</button>
        </div>
       <div className='signup-route'>
       <p>already have an acoount? <NavLink to={'/'} alt='login' title='login'>login</NavLink></p>
       </div> 
        <div className='signup-other'>
          <NavLink to="#" alt='Google' title='Google'>
            <img src='./image/google.png'/>
          </NavLink>
          <NavLink to="#" alt='facebook' title='Facebook'>
            <img src='./image/facebook.png'/>
          </NavLink>
          <NavLink to="#" alt='Github' title='Github'>
            <img src='./image/github.png'/>
          </NavLink>
          </div>
        </div>
    </>
  )
}

export default Signup