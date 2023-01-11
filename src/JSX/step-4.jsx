import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/step-4.css";

const Final = ()=>{




    const [Json, setJson] = React.useState(false);
    const [Csv, setCsv] = React.useState(false);

    return (<div>
        <Header/>
        <Glayer step ="Step 4" dis="" prevPage="step-3" nextPage="step-5"text="Select the Data Format" />
        <div className="data-format-body">

        <div onClick={()=>{if(!Json){setCsv(false)} setJson(!Json)}} style={{'backgroundColor':Json?"#323B4B":"", 'color':Json?"white":''}} className="json-body">
            <span>JSON</span><img src={require("../image/json-img.png")} alt ="Json format"/>
        </div>

        <div  onClick={()=>{if(!Csv){setJson(false)} setCsv(!Csv)}} style={{'backgroundColor':Csv?"#323B4B":"", 'color':Csv?'white':''}} className="csv-body">

            <span>CSV</span><img src={require("../image/csv-img.png")} alt ="csv format"/>
        </div>

        </div>
    </div>)
}


export default Final;