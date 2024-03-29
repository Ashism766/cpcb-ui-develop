import React from "react";
import Header from "./header";

import "../style/step-1.css";
import Glayer from "./label";
// import Middle from "./data-source-card";
import {  useNavigate} from "react-router-dom";



const Middle = (props) =>{

    return(<div style={{'backgroundColor':props.bc}}   className="squar">
            
            <div style={{'backgroundColor':props.mc}} className="small-circle"></div>
            <div className="icon">
                <img  src={require("../image/"+props.img)} alt={"It's a pic of key"}/>
            </div>
            <div style={{"color":props.tc}} className="text">{props.text||"Ground Station Data"}</div>  
    </div>);

}


const Step_1 = ()=>{
    
    const [c1, setC1] = React.useState(false);
    const [c2, setC2] = React.useState(false);
    const [c3, setC3] = React.useState(false);


    const navigate = useNavigate();
    
    let Data = {
        source: "Device Data"
    }

    const Front = ()=>
    {
        

        let obj = JSON.stringify(Data);
        if(c1){
            navigate(
                "/step-2",
 
             {
                
                state: {
                    data:obj
                }
 
            });
           


        }
        else{
            alert("Please Select Device Data option to go ")
        }

        
    };

    var shadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

    return <div>
        
        <Header/>
        <Glayer onClick={()=>{alert("element got clicked")}} step = "Step 1" dis = "none" nextPage="step-2" frontFunc={Front}  text ="Select a Data Source"/>
            


        <div className="body-contain">

            <div className="main-body">
            <div onClick={()=>{if(!c1){setC2(false); setC3(false)}setC1(!c1)}} className="dis" ><Middle bc={c1?"#323B4B":''} mc ={c1?"#3EFEA8":''} tc={c1?"white":''} text="Device Data" img = "Squ.png"/></div>
            <div onClick={()=>{if(!c2){setC1(false); setC3(false)}setC2(!c2)}} className="dis" ><Middle bc={c2?"#323B4B":''} mc ={c2?"#3EFEA8":''} tc={c2?"white":''} text="Satellite Data" img="st.png"/></div>
            <div onClick={()=>{if(!c3){setC2(false); setC1(false)}setC3(!c3)}} className="dis" ><Middle bc={c3?"#323B4B":''} mc ={c3?"#3EFEA8":''} tc={c3?"white":''} text="Ground Station Data" img="gst.png"/></div>
            </div>

        </div>
           
          
    </div>
}

export default Step_1;