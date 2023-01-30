import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/sensor.css";
import { useNavigate, useLocation } from "react-router-dom";

const Final = ()=>{

    const navigate = useNavigate();

    let Location = useLocation();
    let pData, bData;

    try{
        pData = JSON.parse(Location.state['data']);
        console.log(pData);
    }catch(error){console.log("sensor \n"+error);}
    bData = pData;

    const [SEN, setSEN] = React.useState(false);
    const [ACC, setACC] = React.useState(false);


    let sen = SEN, acc = ACC;
    const Front = ()=>
    {
        if(sen || acc)
        {   
            try{
                pData["dt"] = SEN && ACC?"both":ACC?"acc":"sen";

            navigate("/step-3",{
                state:{
                        data: JSON.stringify(pData)
                    }
                    });
            }
            catch(error){console.log("page 4 [+]\n"+error);}
           
        }
        else{
            alert("please select downloaded file type");
            return;
        }
    }
    const Back = () =>
    {
        navigate("/step-2",{
            state:{
                data: JSON.stringify(bData)
            }
        });
    }

 



    

    return (<div>
        <Header/>
        <Glayer step ="Step 3" dis="" text="Choose Sensor type" frontFunc = {Front} backFunc ={Back}/>
        <div className="data-format-body" >

        <div onClick={()=>{ setSEN(!SEN)}} style={{'backgroundColor':SEN?"#323B4B":"", 'color':SEN?"white":''}} className="sen-body">
            <span className="sen">SENSOR</span>
        </div>

        <div  onClick={()=>{setACC(!ACC)}} style={{'backgroundColor':ACC?"#323B4B":"", 'color':ACC?'white':''}} className="acc-body">

            <span className=".acc">ACCELEROMETER</span>
        </div>
        

        </div>
    </div>)
}


export default Final;