import React from "react";
import Header from "./header";
import Glayer from "./label";
import DatePick from "./page3";
import "../style/step-3.css";

const final = ()=>{
return (<div>
    <Header/>
    <Glayer step ="Step 3" dis="" prevPage="step-2" 
    nextPage="step-4"text="Select the From and To Date" />

    <div className="Date-contain">
        <div className="f-date"><DatePick text="From Date"/></div>
        <div className="t-date"><DatePick text="To Date"/></div>
    </div>
    

</div>)
}

export default final;