import React ,{useState} from "react";

const DatePick = (props) =>{
    const [date, setDate] = useState();
    console.log(date);

    return (<div className="date-picker">
        <h1>{props.text}</h1>
        <input type="datetime-local" onChange={e=>setDate(e.target.value)}/>

        {/* <input type={"date"}/> */}

    </div>)
}

export default DatePick;