import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/step-1.css";
import Middle from "./data-source-card";

const Step_1 = ()=>{
    
    return <div>
        
        <Header/>
        <Glayer step = "Step 1" dis = "none" prevPage ="" 
            nextPage="step-2" text ="Select a Data Source"/>
        <div className="body-contain">

            
            <div className="main-body">
                <Middle className="Card1" text="Device Data" img = "logo.png"/>
                <Middle className="Card" text="Satellite Data" img="logo.png"/>
                <Middle className="Card" text="Ground Station Data" img="logo.png"/>
            </div>

        </div>
           
        
    </div>
}

export default Step_1;