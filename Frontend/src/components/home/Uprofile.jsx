import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { TbAnalyze } from "react-icons/Tb";
import { TiGroup} from "react-icons/ti";
import { MdBloodtype,MdContactPhone } from "react-icons/md";
import { CgEventbrite } from "react-icons/cg";
import { BsFillStarFill,BsFillBookmarkFill } from "react-icons/bs";
const Uprofile=()=>{
    return(
        <>
            <div className="Upro">
                <div className="banner">
                    <img src="./image/banner.jpg" alt="banner" />
                </div>
                <div className="usrpic">
                    <img src="./image/userpic.jpg" alt="pic" />
                </div>
                <div className="usrData">
                <NavLink to='/profile'><h3>Arjun Negi</h3></NavLink>
                <p>full stack developer Student At Institute Of Technology Gopeshwar, Chamoli, Uttarakhand, India</p>
                </div>
                <hr className="hLine"/>
                <div className="pstdata, usrdata">
                <ul>
                <li><span><MdContactPhone /></span><NavLink to='/profile'><h3>Contact</h3></NavLink></li>
                    <li><span><FaUserFriends /></span><NavLink to='/profile'><h3>Friends</h3></NavLink></li>
                    <li><span><TiGroup /></span><NavLink to='/profile'><h3>Groups</h3></NavLink></li>
                    <li><span><BsFillBookmarkFill /></span><NavLink to='/profile'><h3>Saved</h3></NavLink></li>
                    <li><span><BsFillStarFill /></span><NavLink to='/profile'><h3>Favorites</h3></NavLink></li>
                    <li><span><TbAnalyze/></span><NavLink to='/profile'><h3>Analysis</h3></NavLink></li>
                    <li><span><CgEventbrite /></span><NavLink to='/profile'><h3>Event</h3></NavLink></li>
                    <li><span><MdBloodtype /></span><NavLink to='/profile'><h3>Blood Donations</h3></NavLink></li>
                </ul>
                </div>
            </div>
            </>
    )
}

export default Uprofile;