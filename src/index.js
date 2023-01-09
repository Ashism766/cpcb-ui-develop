import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/JSX/home";
import FirstPage from "./JSX/step-1";
import SecondPage from "./JSX/step-2";
import ThirdPage from "./JSX/step-3";
import FourthPage from "./JSX/step-4";
import FinalPage from "./JSX/final";
import { BrowserRouter,Routes,Route } from "react-router-dom";





ReactDOM.render(
    <div>

    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>}></Route>
            <Route index element={<Home/>}></Route>
            <Route path="/step-1" element ={<FirstPage/>}></Route>
            <Route path="/step-2" element={<SecondPage/>}></Route>
            <Route path="/step-3" element={<ThirdPage/>}></Route>
            <Route path="/step-4" element={<FourthPage/>}></Route>
            <Route path="/step-5" element={<FinalPage/>}></Route>
        </Routes>
    </BrowserRouter>

    </div>
    
,document.getElementById('root'));