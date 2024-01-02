import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import {
  BsFillPersonPlusFill,
  BsFillChatTextFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="head_part">
      {/* 1st logo part1 */}
      <div className="logo_part">
        <NavLink to="/home" alt="logo" title="go to home page">
          <img src="../image/logo.png" alt="logo" />
        </NavLink>
      </div>
      {/* menu part2  */}
      <div className="navbar_part">
        <ul className="navList">
          <li>
            <NavLink className="navlink" to="/home" title="Home">
              <FaHome size='28px' className="logo"/>
            <br></br>
            Home</NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/connection" title="Your Connection">
              <BsFillPersonPlusFill size='28px'/>
            <br></br>
            Connection</NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/chat" title="Chat">
              <BsFillChatTextFill size='28px'/>
            <br></br>
            Chat</NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/notification" title="notification">
              <IoNotificationsSharp size='28px'/>
            
            <br />Notification</NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/search" title="search">
              <FaSearch size='28px'/>
            
            <br />Search</NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/profile" title="profile">
              <BsFillPersonFill size='28px'/>
            
            <br />Profile</NavLink>
          </li>
        </ul>
      </div>
      {/* loginpart part3 */}
      <div className="loginout_part">
        <ul>
            <li>
              <h3>Welcome To AMS</h3>
            </li>
          {/* <li>
          {isAuthenticated ? (<h3>Hii Welcome</h3>): (<h3>welcome {user.nickname}</h3>)}
        </li> */}
          <li>
              <NavLink className="login" to="/">
              <button>
                Log Out
              </button></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
