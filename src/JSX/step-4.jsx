import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/step-4.css";

const final = ()=>{
return (<div>
    <Header/>
    <Glayer step ="Step 4" dis="" prevPage="step-3" nextPage="step-5"text="Select the Data Format" />
    <div className="data-format-body">
    <div className="json-body">
        <span>JSON</span><img src={require("../image/json-img.png")} alt ="Json format"/>
    </div>
    <div className="csv-body">

        <span>CSV</span><img src={require("../image/csv-img.png")} alt ="csv format"/>
    </div>

    </div>
</div>)
}

export default final;