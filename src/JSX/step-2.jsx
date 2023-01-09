import React from "react";
import Header from "./header";
import Glayer from "./label";
import DeviceImage from "./page2";
import "../style/step-2.css";
const step_2 = ()=>{
    return(<div>
        <Header/>
        <Glayer step = "Step 2" dis = ""prevPage="step-1" 
        nextPage="step-3" text ="Select the Data Devices you need"/>
        <div className="middle-part">

            <div className="select">
                <div className="device-type">
                    Select all devices
                </div>
                <div className="device-type">
                    Select all Mobile 
                </div>
                <div className="device-type">
                    Select all Stationary
                </div>
            </div>

            <div className="card-contain">
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                <DeviceImage/>
                
            </div>
            
        </div>
        
    </div>)
}

export default step_2;