import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { FaVideo  } from "react-icons/fa";
import {BiText } from "react-icons/bi";
import { MdPictureAsPdf } from "react-icons/md";
import Postpopup from "./Postpopup";
const Upost=()=>{
    const [postPopup, setPostPopup] = useState(false);
    const closeModal = () => setPostPopup(false);

    return(
            <div className="user_Post" >
            {/* image and input  */}
                <div className="uPost">
                    <div className="usrimage">
                    <img src="./image/userpic.jpg" alt="user image" />
                    </div>
                    <div className="inputdata">
                        <input onClick={()=> setPostPopup(true)} type="text" name='posting' placeholder="share a post" autoComplete="off" required/>
                        {postPopup && <Postpopup closeModal ={closeModal} />}
                    </div>
                </div>

                {/* iconn part */}
                <div className="iconPost">
                <span className="img" onClick={()=> setPostPopup(true)}><BsImageFill size='18px' /> Image</span>
                <span className="vd" onClick={()=> setPostPopup(true)}><FaVideo size='18px'/> Video</span>
                <span className="txt" onClick={()=> setPostPopup(true)}><BiText size='18px'/>  Artical</span>
                <span className="pdf" onClick={()=> setPostPopup(true)}><MdPictureAsPdf size='18px'/>  Notes</span>
                </div>
            </div>
    )
}

export default Upost;