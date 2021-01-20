import React from 'react';
import './Input.css';

const Input = (props) => {

    const { type, value, onChange, placeholder } = props;
    return (
        <div className="form-group">
            <input
                type={type}
                className="form-control"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;