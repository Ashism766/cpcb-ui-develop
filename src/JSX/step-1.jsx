import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/step-1.css";
// import Middle from "./data-source-card";



const Middle = (props) =>{

    const [cl, isClk] = React.useState(false);
    const Cli = () =>{
        isClk(!cl);
        console.log(cl)
    }

 
    return(<div style={cl?{"backgroundColor":"#323B4B"}:{"backgroundClip":"#fff"}} onClick={Cli}  className="squar">
            
            <div style={cl?{"backgroundColor":"#3EFEA8"}:{"backgroundClip":"#fff"}} className="small-circle"></div>
            <div className="icon">
                <img  src={require("../image/"+props.img)} alt={"It's a pic of key"}/>
            </div>
            <div style={cl?{"color":"white"}:{"color":"black"}} className="text">{props.text||"Ground Station Data"}</div>
            
    </div>)
}


const Step_1 = ()=>{
    


    return <div>
        
        <Header/>
        <Glayer step = "Step 1" dis = "none" prevPage ="" 
            nextPage="step-2" text ="Select a Data Source"/>
        <div className="body-contain">

            
            
            <div className="main-body">
            <span ><Middle className="Card1" id="1" text="Device Data" img = "Squ.png"/></span>
            <span><Middle className="Card" id="2" text="Satellite Data" img="st.png"/></span>
            <span><Middle className="Card" id="3" text="Ground Station Data" img="gst.png"/></span>
            </div>

        </div>
           
         
    </div>
}

export default Step_1;