import React from "react";
import "../style/glayer.css";
// import { Link } from "react-router-dom";
const gLayer = (props)=>{
    return(<div>
        <div className="green-head">
            <div className="step">{props.step}</div>
            <div id="G-text" className="green-text">{props.text}</div>
        </div>

        <div className="footer">
            <div className="inside-div">
                <div onClick={props.backFunc}  style={{"display":props.dis, "color":props.bColor}} className="back uLine" id="Back-btn" >

                    Back
                </div>
                <div  onClick={props.frontFunc}  style={{"display":props.dis2, "backgroundColor": props.bColor, "color":props.Color, "boxShadow":props.boxShadow}} className="continue uLine">
                   Continue
                </div>
            </div>
        </div>
    </div>)
}


export default gLayer;