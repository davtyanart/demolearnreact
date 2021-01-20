import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErrorState] = useState(false)

    const onChangeName = (e) => {
        const newVal = e.target.value
        setName(newVal)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onClick = () => {
        if ((name.length && password.length) <= 6) {
            setErrorState(true)
        }
        else {
            setErrorState(false)
        }

    }
    return (
        <div className="form" >
            <h2>Login Form</h2>
            <form>
                <Input
                    type="text"
                    value={name}
                    onChange={onChangeName}
                    placeholder="Username"
                />

                <Input
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    placeholder="Password"
                />
                <p className="text-danger">{error ? 'The field name password is required' : ''}</p>

                <Button onClick={onClick} text='Signin' />
            </form>
        </div>
    )
}
export default Form;