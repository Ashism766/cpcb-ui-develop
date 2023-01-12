import React from "react";
import Header from "./header";
import Glayer from "./label";
// import DatePick from "./page3";
import "../style/step-3.css";
import { createSearchParams, useNavigate, useLocation, json } from "react-router-dom";



const Final = ()=>{

    const [fDate, setFdate] = React.useState(null);
    const [tDate, setTdate] = React.useState(null);

    const navigate = useNavigate();
   
    const Location = useLocation();

    let pData = JSON.parse(Location.state['data']);
    console.log(pData);


    const Front = () =>
    {
        if(fDate && tDate)
        {
            pData["fromDate"] = fDate;
            pData["toDate"] = tDate;

            navigate("/step-4"  ,
                {
                    state:{
                        data: JSON.stringify(pData)
                    }
                }
            );
        }
        else{
            alert("please select the from data and To Date")
        }
    }
    const Back = () =>
    {
        navigate ({
            pathname:"/step-2"
        });
    }






return (<div>
    <Header/>
    <Glayer step ="Step 3" dis="" prevPage="step-2" 
    nextPage="step-4"text="Select the From and To Date" frontFunc={Front} backFunc={Back}/>

    <div className="Date-contain">
        <div className="f-date "><div className="date-picker"><h1>From Date</h1>
        <input type="datetime-local" onChange={e=>setFdate(e.target.value)}/></div>
        </div>

        <div className="t-date"><div className="date-picker"><h1>To Date</h1>
        <input type="datetime-local" onChange={e=>setTdate(e.target.value)}/></div>
        </div>


    </div>
    

</div>)
}

export default Final;