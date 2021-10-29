import React from 'react';
import i from './myInput.module.css'

const Input = ({props}) => {
    return (
        <input {...props} className={i.inp} />


    );
};

export default Input;