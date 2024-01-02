import React from "react";
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import "./Style.css";
import "./components/home/Home.css";
import "./components/notification/Notification.css";
import "./components/chat/Chat.css";
import "./components/connection/Connection.css";
import "./components/Signup/Signup.css";
import "./components/login/Login.css";
import "./components/profile/Profile.css"

import Login from './components/login/Login'
import Header from './Header';
import Home from "./components/home/Home";
import Connection from "./components/connection/Connection";
import Chat from './components/chat/Chat';
import Notification from "./components/notification/Notification";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import Signup from "./components/Signup/Signup"
import Gate from "./components/Gate/Gate"
import { Children } from "react";

const Routing=()=>{
    return(
        <BrowserRouter>
        
            <Gate> 
            <Header />
            </Gate>
            
            <Routes>
                <Route path="/home" element={<Home />} /> 
                <Route path="/connection" element={<Connection />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )};

export default Routing;