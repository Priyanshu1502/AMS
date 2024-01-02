import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const navlink = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/auth/login", {
                email, password
            }).then(res => {
                    console.log(res.data);
                    if(res.data == "wrong password"){
                       return  alert('Password Incorrect');

                    }else if(res.data == "doesnotexist"){
                        return alert("User Does Not Exist");

                    }else if(res.status === 200) {
                        navlink(`/home`);

                    }
                });
        } catch {
            console.log(e);
        };
    }
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <div className='login-title'>
                <h1>Welcome Back</h1>
            </div>
            <div className='login-image'>
                <img src='/image/login.png'></img>
            </div>

            <div className='login-form'>
                <span>E-mail</span>
                <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='username' />

                <span>Password</span>
                <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='password' />
            </div>
            <div className='login-submit'>
                <button type='submit' onClick={submit} >Submit</button>
            </div>
            <div className='login-forget'>
                <NavLink>Forgot Password?? </NavLink>
            </div>
            <div className="login-signup">
                <p>Already a user? <NavLink to={"/signup"}>Signup here</NavLink></p>
            </div>
        </div>
    )
}

export default Login