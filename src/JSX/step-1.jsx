import React from "react";
import Header from "./header";
import Glayer from "./label";
import "../style/step-1.css";
import Middle from "./data-source-card";

const Step_1 = ()=>{
    
    // const [count, setCound] = React.useState(0);

    // const helper = () =>{
    //     setCound(count+1);
    //     console.log(count);
    // }

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