import React from "react";
import { NavLink } from "react-router-dom";
import { RiGroupFill,RiPagesFill } from "react-icons/ri";
// import { TbAnalyze } from "react-icons/Tb";
import { TiGroup} from "react-icons/ti";
import { MdContactPhone } from "react-icons/md";
import { CgEventbrite } from "react-icons/cg";
// import { BsFillStarFill,BsFillBookmarkFill } from "react-icons/bs";
const Connection=()=>{
    return(
        <div className="myConnection">
            <div className="manage-myConnection">
            <div className="pstdata, usrdata">
                <ul>
                    <li><span><RiGroupFill /></span><NavLink to='/profile'><h3>Connections</h3></NavLink></li>
                    <li><span><MdContactPhone /></span><NavLink to='/profile'><h3>Contact</h3></NavLink></li>
                    <li><span><TiGroup /></span><NavLink to='/profile'><h3>Followers & Following</h3></NavLink></li>
                    <li><span><TiGroup /></span><NavLink to='/profile'><h3>Groups</h3></NavLink></li>
                    <li><span><CgEventbrite /></span><NavLink to='/profile'><h3>Event</h3></NavLink></li>
                    <li><span><RiPagesFill /></span><NavLink to='/profile'><h3>Pages</h3></NavLink></li>
                </ul>
                </div>
            </div>
            <div className="Recommended-for-you">
                <div className="heading">
                    <h3>Recommended for you</h3>
                </div>
                {/* connection */}
                <div className="grid-container">
                    <div className="userInfo">
                    <div className="banner">
                    <img src="./image/banner.jpg" alt="banner" />
                </div>
                <div className="usrpic">
                    <img src="./image/userpic.jpg" id="imgUsr" alt="pic" />
                </div>
                <div className="aboutUsr">
                    <h2>Priyanshu Bhatt</h2>
                    <p>Full Stack Web Developer</p>
                    <p>12345 Follower</p>
                    <button>Follow</button>
                </div>
                    </div>
                    <div className="userInfo">
                    <div className="banner">
                    <img src="./image/banner.jpg" alt="banner" />
                </div>
                <div className="usrpic">
                    <img src="./image/userpic.jpg" id="imgUsr" alt="pic" />
                </div>
                <div className="aboutUsr">
                    <h2>Arjun Negi</h2>
                    <p>Full Stack Web Developer</p>
                    <p>12345 Follower</p>
                    <button>Follow</button>
                </div>
                    </div>
                    <div className="userInfo">
                    <div className="banner">
                    <img src="./image/banner.jpg" alt="banner" />
                </div>
                <div className="usrpic">
                    <img src="./image/userpic.jpg" id="imgUsr" alt="pic" />
                </div>
                <div className="aboutUsr">
                    <h2>Arjun Negi</h2>
                    <p>Full Stack Web Developer</p>
                    <p>12345 Follower</p>
                    <button>Follow</button>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connection;