import React, {useState} from "react";
import "../style/data-s-c.css";


const App = (props) =>{

    const [cl, isClk] = useState(false);
    // const [hov, isHov] = useState(false);

    // const Hov = () =>{
    //     isHov()
    // }

    const Cli = () =>{
        // isClk(((cl+1) %10) +2);
        isClk(!cl);
        console.log(cl)
    }

    // if(cl ){
    //     console.log("I'm Here true");
    //     document.getElementById("sm-circle").style.backgroundColor="#3EFEA8";
    //     document.getElementById("rec-box").style.backgroundColor="#323B4B";
    // }
    // else{
    //     document.getElementById("sm-circle").style.backgroundColor="#fff";
    //     document.getElementById("rec-box").style.backgroundColor="#fff";
    // }

    return(<div style={cl?{"backgroundColor":"#323B4B"}:{"backgroundClip":"#fff"}} onClick={Cli}  className="squar">
            
            <div style={cl?{"backgroundColor":"#3EFEA8"}:{"backgroundClip":"#fff"}} className="small-circle"></div>
            <div className="icon">
                <img  src={require("../image/"+props.img)} alt={"It's a pic of key"}/>
            </div>
            <div style={cl?{"color":"white"}:{"color":"black"}} className="text">{props.text||"Ground Station Data"}</div>
            
    </div>)
}

export default App;