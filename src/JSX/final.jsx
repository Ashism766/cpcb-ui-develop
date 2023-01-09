import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/final.css";
const final = (props)=>{
return (<div>
    <Header/>
    <Glayer step ="" dis="none" dis2="none" prevPage="step-4" nextPage=""text="Data invoice" />
    <div className="invoice">
        <h1>Data invoice</h1>
        <hr/>

        <div className="job-id">
            <div className="left">Job Id</div> 
            <div className="right">{props.text||"some id"}</div>
        </div>
        <div className="eta">
            <div className="left">ETA (Estimated Time of Compleiton)</div> 
            <div className="right">{props.time||" "} {" "}mins</div>
        </div>

        <hr/>

        <div className="view-details">
            <div className="left">View Details</div> 
        </div>

        <div className="download-button">
            Download
        </div>
        
    </div>
</div>)
}

export default final;