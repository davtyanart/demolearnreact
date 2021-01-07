import React from "react";
import "../Input/Input.css";

function Input(props) {
    return <input value={props.value} onChange={props.onChange} placeholder={props.placeholder} type={props.type} />
}

export default Input;