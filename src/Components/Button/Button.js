import React from "react";
import "../Button/Button.css";


//chaildren
function Button(props) {
    return <button onClick={props.onClick} className="app-btn">{props.placeholder}</button>
}


export default Button; 