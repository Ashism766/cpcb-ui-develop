import React from "react";
import "../style/page2.css";
const App = (props)=>
{
    return (
        <div className="device">
            <div className="deviceId">
                {props.deivceId || "M1"}
            </div>
            
        </div>
   )
}

export default App;