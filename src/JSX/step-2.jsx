import React from "react";
import Header from "./header";
import Glayer from "./label";
// import DeviceImage from "./page2";
import "../style/step-2.css";
import { createSearchParams, useNavigate, useLocation} from "react-router-dom";


const DeviceImage = (props)=>
{
    return (
        <div style={{'backgroundColor':props.bcolor}} className={`device ${props.mobility} `}>
            <div style={{'color':props.bcolor === "#323B4B"?"white":"black"}} className="deviceId">
                {props.deivceId || "M1"}
            </div>
            
        </div>
   )
}


let Data = [];
let Mobility = ["mobile", "stationary"]
for (var i = 1; i <= 30; i++)
{
    var ran = Math.floor(Math.random()*2);

    
    var temp = {
        id:"M"+i,
        type: Mobility[ran]
    }

    Data.push(temp);

}



const Step_2 = ()=>{

    
    const navigate = useNavigate();

    const Location = useLocation();

    console.log(Location.state['data'])
    


    let data = JSON.parse(Location.state['data']);

    console.log(data);

    const Front = ()=>
    {
        
        if(clickAll){
            data["deviceType"] = "All";
            data["deviceData"] = Data;

            navigate(
               "/step-3",
                {
                state: {
                    data: JSON.stringify(data)
                }
            });
        }
        else if(clickAllm){
            data["deviceType"] = "mobile";
            data["deviceData"] = Data.filter((temp)=>{return temp.type === "mobile"});

            navigate(
                "/step-3",
                 {
                 state: {
                     data: JSON.stringify(data)
                 }
             });
        }
        else if(clickAlls)
        {
            data["deviceType"] = "stationary"
            data["deviceData"] = Data.filter((temp)=>{return temp.type === "stationary"});

            navigate(
                {
                    pathname: "/step-3"

                }
               ,
                 {
                 state: {
                     data: JSON.stringify(data)
                 }
             }
             );
        }
        else 
        {
            alert("please Select one option to go another page");
        }


    }

    const Back = () =>
    {
        navigate({
            pathname:"/step-1"
        })
    }



    const [state, setState] = React.useState(false);
    const [clickAll, setCA] = React.useState(false);

    const [mstate, setMstate] = React.useState(false);
    const [clickAllm, setCAM] = React.useState(false);
    
    const [sState, setSstate] = React.useState(false);
    const [clickAlls, setCAS] = React.useState(false);
    

    return(<div>
        <Header/>
        <Glayer step = "Step 2" dis = ""prevPage="step-1" 
        nextPage="step-3" backFunc = {Back} frontFunc={Front} text ="Select the Data Devices you need"/>
        '
        
        <div className="middle-part">

            <div className="select">
                <div style={{"backgroundColor":clickAll&&!(clickAllm || clickAlls)?"#F2FFA0":""}} onMouseOver={()=>{setState(true)}} onMouseOut={()=>{setState(false)}} onClick={()=>{ if(!clickAll){setCAM(false); setCAS(false)} setCA(!clickAll)}} className="device-type all-d">
                    Select all devices
                </div>
                <div style={{"backgroundColor":clickAllm?"#F2FFA0":""}} onClick={()=>{if(!clickAllm){setCA(false); setCAS(false)}setCAM(!clickAllm); ;}} onMouseOver={()=>{setMstate(true)}} onMouseOut={()=>{setMstate(false)}} className="device-type mobile-d">
                    Select all Mobile 
                </div>
                <div style={{"backgroundColor":clickAlls?"#F2FFA0":""}} onClick={()=>{if(!clickAlls){setCA(false); setCAM(false)} setCAS(!clickAlls)}} onMouseOver={()=>{setSstate(true)}} onMouseOut={()=>{setSstate(false)}} className="device-type stationary-d">
                    Select all Stationary
                </div>
            </div>

            <div className="card-contain">

              
                {
                    mstate || clickAllm? Data.map((user) =>(<DeviceImage key={user.id} bcolor={user.type ==="mobile"?"#323B4B":"#878787"} deivceId = {user.id} mobility = {user.type}/>)): 
                    clickAlls || sState?  Data.map((user) =>(<DeviceImage key={user.id}  bcolor={user.type ==="stationary"?"#323B4B":"#878787"} deivceId = {user.id} mobility = {user.type} />)):
                    state|| clickAll? Data.map((user) =>(<DeviceImage key={user.id} bcolor={"#323B4B"} deivceId={user.id} mobility={user.type}/>)):
                    Data.map((user)=>(<DeviceImage key={user.id} bcolor = {"#878787"} deivceId ={user.id} mobility = {user.type}/>))
                    
                    
                }
               
                
            </div>
            
        </div>
        
    </div>)
}

export default Step_2;