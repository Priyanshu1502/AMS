import { useState } from "react";
import React from "react";
import { FaPen } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import EditProfile from "./EditProfile";
// import Datas from "../home/Data.json"
// import Suggestion from "./Suggestion";

const Profile=()=>{

    const [popup, setPopup] = useState(false)
    const closeModal = () => setPopup(false);


    // const suggestions = Datas.map((data)=>{
    //     return(
    //     <Suggestion 
    //     key={data.id}
    //     suggestion = {data.suggestion} />
    //     )})
    
    return(
        <><div className="all">
            <div className="profile-container">
                <div className="profile-back">
                    <img src="./image/banner.jpg" alt="background"></img>
                </div>
                <div className="profile-image">
                    <img src="./image/userpic.jpg" alt="userimg"></img>
                </div>
                <div className="pen"><FaPen size={24} fixedWidth/></div>
                <div className="profile-title">
                    <h1>Arjun</h1>
                    <p>Hey i am arjun negi</p>
                    <span>Shrinagar, Pauri, Uttarakhand, India</span> . <NavLink>Contact info</NavLink><br></br>

                    <NavLink>3 connection</NavLink>
                </div>
                <div className="profile-affiliation">
                Uttarakhand Technical University
                </div>
                <div className="profile-open">
                    <button onClick={()=>setPopup(true)}>Edit Profile</button>
                    {popup && <EditProfile closeModal={closeModal} />}
                </div>
                {/* <div className="profile-suggest">
                   
                </div> */}
            </div>
            </div>
        </>
    )
}

export default Profile;