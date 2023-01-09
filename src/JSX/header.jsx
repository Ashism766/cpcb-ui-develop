import React from "react";
import "../style/back-layer.css";

function Header() {
    return <div className="header">

        <img className="logo" src={require("../image/logo.png")} alt ={""}/>
        <div className="header-text">Data Downloader</div>
    </div>

}

export default Header;