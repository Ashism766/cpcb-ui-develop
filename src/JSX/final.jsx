import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/final.css";
// import rive from "@rive-app/react-canvas";
import { useRive} from "@rive-app/react-canvas";
import { useNavigate,useLocation } from "react-router-dom";



const ApP = () =>{

  const [ani, setAni] = React.useState(false);

  const {rive, RiveComponent} = useRive({
    src:'download.riv',
    stateMachines: "State machine 1",
    autoplay: true,
  });



  const func = (i) =>{
    let inputs = rive.stateMachineInputs("State machine 1");
    const bumpTrigger = inputs.find(i => i.name === 'Downloading');
    bumpTrigger.value = true;
    const ano = inputs.find(j =>j.name === "Progress");
    ano.value  += i;;

    }
    //DEMO purpose code
    if(ani)
    {
      setInterval(() => {
        func(5)
      }, 2000);
    }

    return (
          
          <div style={{ height: '370px', width: '370px' }}>
          <RiveComponent onClick={()=>{setAni(true)}}/>
          </div>
    );
}


const Final = (props)=>{

    const Location = useLocation();
    const navigate = useNavigate();
    try{
      let pData = JSON.parse(Location.state['data']);
      console.log(pData);
    }
    catch(e)
    {
      console.log("\tpage final: \n"+e);
    }

    return (<div>
        <Header/>
        <Glayer step ="" dis="none" dis2="none" prevPage="step-4" nextPage=""text="Data invoice" />

       <div className="flex-container">
        <div className="con">
            <ApP/>
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

export default Final;