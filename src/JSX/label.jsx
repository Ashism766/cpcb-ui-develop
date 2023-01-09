import React from "react";
import "../style/glayer.css";
import { Link } from "react-router-dom";
const gLayer = (props)=>{
    return(<div>
        <div className="green-head">
            <div className="step">{props.step}</div>
            <div id="G-text" className="green-text">{props.text}</div>
        </div>

        <div className="footer">
            <div className="inside-div">
                <div style={{"display":props.dis}} className="back" id="Back-btn" >

                    <Link className="uLine" to ={"/"+props.prevPage}>Back</Link>
                </div>
                <div style={{"display":props.dis2}} className="continue">
                   <Link className="uLine" to={"/"+props.nextPage}>Continue</Link> 
                </div>
            </div>
        </div>
    </div>)
}


export default gLayer;