import React from "react";
import Header from "../JSX/header";
import "../style/home-style.css"
import {useNavigate } from "react-router-dom";

const Home=()=>{

    const [id, setId] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [sub, checkSub] = React.useState(0);

    const navigate = useNavigate();

    const Auth = () =>{


        if( id === "Ashis" && pass === "0000"){checkSub(1);}
        else{checkSub(-1)};
        
    };






    if(sub === 1){
        navigate({
            pathname: "/step-1",
        })
    }
    return <div>
        <Header/>
        
        <div className="left-side">

            <div className="center">
                <h1>Login</h1>
                <p>please fill your credentials below</p>



                <div className="form">

                    <div className="txt_field">
                        <input type={"text"}  required onChange={(e)=>{setId(e.target.value); console.log(id);}}>
                        </input>
                        <span></span>
                        
                        <label>User id</label>
                       
                    </div>
                    <div className="txt_field">
                        <input type={"password"} required onChange={(e)=>{setPass(e.target.value); console.log(pass);}}></input>
                        <span></span>
                        <label>Password</label>
                    </div>

                    <div className="pass">Forgot Password ?</div>
                    <button className="login-btn" onClick={Auth}>Login in</button>
                </div>
            </div>


        </div>
        

        <div className="right-side">
            
            <img  src={require("../image/font-page.png")} alt={"It's a pic of key"}/>
   
        </div>



    </div>
};

export default Home;