import React from "react";
import "../style/step-2.css";
const App = (props)=>
{
    return (
        <div className={`device ${props.character}`}>
            <div className="deviceId">
                {props.deivceId || "M1"}
            </div>
            
        </div>
   )
}

export default App;