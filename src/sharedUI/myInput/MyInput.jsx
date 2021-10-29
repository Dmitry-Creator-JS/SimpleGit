import React from 'react';
import i from './myInput.module.css'

const MyInput = ({props}) => {
    return (
        <input {...props} className={i.inp} />


    );
};

export default MyInput;