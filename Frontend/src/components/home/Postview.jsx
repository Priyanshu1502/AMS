import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillLike} from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";

const Postview =(props) =>{
    const [liked, setLiked] = useState(null)
    const [isLike, setIsLike] = useState(false)

    const like =()=>{
        setLiked(liked +(isLike ? -1 : 1))
        setIsLike(!isLike)
    }
    return(
       <>
               <section className="usrPst">
         <div className="myPost">
            <div className="usrimage">
                        <img src={props.usrImg} alt="user image" />
                    </div>
            <div className="usrName">
                <NavLink to='/profile'><h3>{props.user}</h3></NavLink>
                <p>{props.developer}</p>
            </div>
            <div className="flw">
                <h3>+Follow</h3>
                <h1>...</h1>
            </div>
        </div>
        <div className="detail">
            <p>{props.title}</p>
        </div>
        <div className="imgPrt">
        <img src= {`./image/p${props.postImg}.jpg`} alt="post" />
        </div>
        <div className="iconPost">
            <span className="lke" onClick={like}>{isLike ? <AiFillLike color= 'red'/> : <AiFillLike color='blue' />}{liked}</span>
            <span className="cmt"><FaComment /> Comment</span>
            <span className="rpst"><BiRepost /> Repost</span>
            <span className="snd"><BsSendFill /> Send</span>
        </div>
       </section>
       </>
    )
}

export default Postview;