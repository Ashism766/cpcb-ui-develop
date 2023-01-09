import React from "react";
import Header from "../JSX/header";
import "../style/home-style.css"
import { Link } from "react-router-dom";

const Home=()=>{

    return <div>
        <Header/>
        
        <div className="left-side">

            <div className="center">
                <h1>Login</h1>
                <p>please fill your credentials below</p>
                <form method="post">

                    <div className="txt_field">
                        <input type={"text"} required>
                        </input>
                        <span></span>
                        
                        <label>User id</label>
                       
                    </div>
                    <div className="txt_field">
                        <input type={"password"} required></input>
                        <span></span>
                        <label>Password</label>
                    </div>

                    <div className="pass">Forgot Password ?</div>
                    <button type={"Submit"}><Link to={"/step-1"} className="login-btn">Login in</Link></button>
                </form>
            </div>


        </div>
        

        <div className="right-side">
            
            <img  src={require("../image/font-page.png")} alt={"It's a pic of key"}/>
   
        </div>



    </div>
};

export default Home;