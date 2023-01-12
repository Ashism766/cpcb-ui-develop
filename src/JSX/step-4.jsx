import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/step-4.css";
import { useNavigate, useLocation } from "react-router-dom";

const Final = ()=>{

    const navigate = useNavigate();

    let Location = useLocation();

    let pData = JSON.parse(Location.state['data']);

    console.log(pData);

    const [Json, setJson] = React.useState(false);
    const [Csv, setCsv] = React.useState(false);


    let json = Json, csv = Csv;
    const Front = ()=>
    {
        if(json || csv)
        {
            pData["fileType"] = Json?"json":"csv";

            navigate("/step-5",
                {
                state:
                    {
                        data: JSON.stringify(pData)
                    }
            });
        }
        else{
            alert("please select downloaded file type");
            return;
        }
    }
    const Back = () =>
    {
        navigate({
            pathname:"/step-3"
        });
    }

 



    

    return (<div>
        <Header/>
        <Glayer step ="Step 4" dis="" text="Select the Data Format" frontFunc = {Front} backFunc ={Back}/>
        <div className="data-format-body" >

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