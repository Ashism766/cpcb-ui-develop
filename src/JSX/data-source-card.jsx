import React from "react";
import "../style/data-s-c.css";


const app = (props) =>{
    return(<div className="squar">

            <div className="small-circle"></div>
            <div className="icon">
                <img  src={require("../image/"+props.img)} alt={"It's a pic of key"}/>
            </div>
            <div className="text">{props.text||"Ground Station Data"}</div>
            
    </div>)
}

export default app;