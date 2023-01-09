import React from "react";

import Home from "../src/JSX/home";
import FirstPage from "./JSX/step-1";
import { BrowserRouter,Routes,Route } from "react-router-dom";


const App = ()=>{ 
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>}></Route>
            <Route index element={<Home/>}></Route>
            <Route path="/step-1" element ={<FirstPage/>}></Route>
        </Routes>
    </BrowserRouter>)
    
 }

export default App;
