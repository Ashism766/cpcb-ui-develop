import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/final.css";

import Rive from "@rive-app/react-canvas";
import {
  useRive, useStateMachineInput
} from "@rive-app/react-canvas";
// import Anime from "../image/download.riv";


const ApP = () =>{

  const STATE_MACHINE_NAME = "State Machine";
  const INPUT_NAME = "Downloading";
  
  const [ani, setAni] = React.useState(false);

  const {rive, RiveComponent} = useRive({
    src:'wb_download.riv',
    stateMachines: STATE_MACHINE_NAME,
    
    autoplay: true,
  });


  const func = () =>{
    
 
  let inputs = rive.stateMachineInputs("State Machine");
  const bumpTrigger = inputs.find(i => i.name === 'Start');
  bumpTrigger.fire();
  console.log(bumpTrigger);
    const ano = inputs.find(j =>j.name === "Progress");
    ano.value += 10;
    console.log(ano.value);

}
  


    if(ani)
    {
      console.log("it's True");
      func();
    }

    return (
          
          ani?<div style={{ height: '600px', width: '700px' }}>
           <RiveComponent onClick={()=>{setAni(!ani)}}/></div>:
           <div style={{ height: '500px', width: '500px' }}>
           <RiveComponent onClick={()=>{setAni(!ani)}}/></div>


    );
}


const final = (props)=>{

    return (<div>
        <Header/>
        <Glayer step ="" dis="none" dis2="none" prevPage="step-4" nextPage=""text="Data invoice" />



        

       <div className="flex-container">
        <div className="con">

            <ApP/>

          {/* <Rive src="download.riv" animations={"Water"}  /> */}


        </div>




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

        </div>
    </div>)
}

export default final;