import React from "react";
import Uprofile from "./Uprofile";
import Upost from "./Upost";
// import Infouser from "./Infouser";
import Postview from "./Postview";
import Datas from "./Data.json";

const Home=()=>{

const posts = Datas.map((data)=>{
    console.log(data);
    return(
        <Postview 
            key = {data.id}
            title={data.title}
            user={data.user}
            usrImg={data.usrImg}
            developer={data.developer}
            postImg={data.postImg}
        />
    );
})

    return(
        <div className="hbody">
            <div className="userprofile">
                <Uprofile />
            </div>
            <div className="userPost">
                <Upost />
                <hr className="line" />
                {posts}
            </div>
            {/* <div className="userInfo">
                <Infouser />
            </div> */}
        </div>
    )
}

export default Home;