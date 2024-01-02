import React from "react";
import { NavLink } from "react-router-dom";
import { BsGiftFill} from "react-icons/bs";
import Footer from "../../Footer";
const Infouser=()=>{
    return(
      <>
          <div className="Uinfo">
            <div className="bdy">
            <h3>Birthdays</h3>
            <NavLink to='/profile'><h3><BsGiftFill />  Birthdays</h3></NavLink>
            </div>
            <hr />
            <div className="online_con">
            <h3>Contacts</h3>
            <NavLink to='/chat'><h3>Birthdays</h3></NavLink>
            </div>
            <hr />
            <div className="groups">
            <h3>Group Conversations</h3>
            <NavLink to='/chat'><h3>Birthdays</h3></NavLink>
            </div>
            <hr />
            <div className="india">
          <img src="./image/75thlogo.jpg" alt="75 Amrit mahotsav" />
          <img src="./image/g20logo.png" alt="G20 Submite"/>   
        </div>
        <Footer />
        </div>
      </>
    )
}
export default Infouser; 