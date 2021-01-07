import React, { useState } from 'react'
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import "./Form.css";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');

    const firstNameOnChange = (e) => {
        setFirstName(e.target.value);
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value);
    }

    const buttonOnClick = () => {
        alert("The Button was clicked");
    }

    return (

        <div className="form">
            <h1>Login</h1>
            <Input value={firstName} placeholder={"Name"} onChange={firstNameOnChange} />
            <Input value={password} placeholder={"Password"} onChange={passwordOnChange} type={"password"} />
            <Button onClick={buttonOnClick} placeholder="Sign In" />
        </div>

    )

}


export default Form;

