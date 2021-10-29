import React from 'react';
import b from './myButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={b.btn} >
            {children}
        </button>
    );
};

export default MyButton;