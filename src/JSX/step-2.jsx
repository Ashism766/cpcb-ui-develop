import React from "react";
import Header from "./header";
import Glayer from "./label";
// import DeviceImage from "./page2";
import "../style/step-2.css";
import { useNavigate, useLocation} from "react-router-dom";
import Select from "react-select";

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




const Data = [
    's1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11','s12','s13','s14','s15','s16','s17','s18','m1','m2','m3','m4','m5','m6','m7'
]




const Step_2 = ()=>{

    
    const navigate = useNavigate();

    const Location = useLocation();
    const [state, setState] = React.useState(false);
    const [clickAll, setCA] = React.useState(false);

    const [mstate, setMstate] = React.useState(false);
    const [clickAllm, setCAM] = React.useState(false);
    
    const [sState, setSstate] = React.useState(false);
    const [clickAlls, setCAS] = React.useState(false);
    const [selectedOptions, setSelectedOptions] = React.useState();
    // var selectedList = [];

    let data, bData;
    try{console.log(Location.state['data'])
    data = JSON.parse(Location.state['data']);
    console.log(data);}
    catch(error){console.log("page2: "+error);}
    
    bData = data;

    const Front = ()=>
    {
        
        if(clickAll){
            try{
                
                data["DeviceIds"] = Data;

                navigate(
                "/sensor",
                    {
                    state: {
                        data: JSON.stringify(data)
                    }
                });
            }
            catch(error){console.log("page2"+error);}
            
        }
        else if(clickAllm){
            try{
            data["DeviceIds"] = Data.filter((temp)=>{return temp[0] === "m"});

            navigate(
                "/sensor",
                 {
                 state: {
                     data: JSON.stringify(data)
                 }
             });
            }catch(error){console.log(error);}
            
        }
        else if(clickAlls)
        {
            try{
            data["DeviceIds"] = Data.filter((temp)=>{return temp[0] === "s"});

            navigate(
                {
                    pathname: "/sensor"

                }
               ,
                 {
                 state: {
                     data: JSON.stringify(data)
                 }
             }
             );}
             catch(error){console.log(error);}
           
        }
        else if(selectedOptions.length > 0)
        {
            let x = selectedOptions;

            let Ids = [];
            x.map((item)=>{Ids.push(item.label); return 0;});

            data['DeviceIds'] = Ids;

            navigate({
                    pathname: "/sensor"
                },
                {
                    state: {
                        data: JSON.stringify(data)
                    }
                }
            )
        }
        else 
        {
            alert("please Select one option to go another page");
        }


    }

    const Back = () =>
    {
        navigate("/step-1",{
            state:{
                data:JSON.stringify(bData)
            }
        })
    }

 
    const optionList = [
        {value:'M1', label:'m1'},{value:'M2', label:'m2'}, {value:'M3', label:'m3'}, {value:'M4', label:'m4'}, {value:'M5', label:'m5'},
        {value:'M6', label:'m6'},{value:'M7', label:'m7'}, {value:'S1', label:'s1'},{value:'S2', label:'s2'},{value:'S3', label:'s3'},
        {value:'S4', label:'s4'},{value:'S5', label:'s5'},{value:'S6', label:'s6'},{value:'S7', label:'s7'},{value:'S8', label:'s8'},
        {value:'S9', label:'s9'},{value:'S10', label:'s10'},{value:'S11', label:'s11'},{value:'S12', label:'s12'},{value:'S13', label:'s13'},
        {value:'S14', label:'s14'},{value:'S15', label:'s15'},{value:'S16', label:'s16'},{value:'S17', label:'s17'}, {value:'S18', label:'s18'},

    ]

    return(<div>
        <Header/>
        <Glayer step = "Step 2" dis = ""prevPage="step-1" 
        nextPage="sensor" backFunc = {Back} frontFunc={Front} text ="Select the Data Devices you need"/>
        '
        
        <div className="middle-part">

            <div className="select">


                
                    <div className="dropdown-container">
                        <Select className="search-box" options={optionList}
                            placeholder = "Select Device"
                            value={selectedOptions}
                            onChange={(data)=>{setSelectedOptions(data);  setCA(false); setCAM(false); setCAS(false);}}
                            isSearchable = {true}
                            isMulti = {true}

                        />

                    </div>

                

                <div style={{"backgroundColor":clickAll&&!(clickAllm || clickAlls)?"#F2FFA0":""}} onMouseOver={()=>{setState(true)}} onMouseOut={()=>{setState(false)}} onClick={()=>{ if(!clickAll){setCAM(false); setCAS(false)} setCA(!clickAll)}} className="device-type all-d">
                    Select all devices  </div>
                <div style={{"backgroundColor":clickAllm?"#F2FFA0":""}} onClick={()=>{if(!clickAllm){setCA(false); setCAS(false)}setCAM(!clickAllm); ;}} onMouseOver={()=>{setMstate(true)}} onMouseOut={()=>{setMstate(false)}} className="device-type mobile-d">
                    Select all Mobile </div>
                <div style={{"backgroundColor":clickAlls?"#F2FFA0":""}} onClick={()=>{if(!clickAlls){setCA(false); setCAM(false)} setCAS(!clickAlls)}} onMouseOver={()=>{setSstate(true)}} onMouseOut={()=>{setSstate(false)}} className="device-type stationary-d">
                    Select all Stationary </div>
            </div>

            <div className="card-contain">

              
                {
                    selectedOptions != null && selectedOptions.length > 0? Data.map((user) =>(<DeviceImage key={user} bcolor={selectedOptions.find((item)=>{return item.label === user}) != null?"#323B4B":"#878787"} deivceId = {user} mobility = {user[0]}/>)): 
                    mstate || clickAllm? Data.map((user) =>(<DeviceImage key={user} bcolor={user[0] ==="m"?"#323B4B":"#878787"} deivceId = {user} mobility = {user[0]}/>)): 
                    clickAlls || sState?  Data.map((user) =>(<DeviceImage key={user}  bcolor={user[0] ==="s"?"#323B4B":"#878787"} deivceId = {user} mobility = {user[0]} />)):
                    state|| clickAll? Data.map((user) =>(<DeviceImage key={user} bcolor={"#323B4B"} deivceId={user} mobility={user[0]}/>)):
                    Data.map((user)=>(<DeviceImage key={user} bcolor = {"#878787"} deivceId ={user} mobility = {user[0]}/>))
                    
                    
                }
               
                
            </div>
            
        </div>
        
    </div>)
}

export default Step_2;