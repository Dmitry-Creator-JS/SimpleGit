import React from 'react';
import MyButton from "../../sharedUI/myButton/MyButton";

const Card = (props) => {
    return (
        <div>
            <MyButton onClick={()=>props.history.goBack()} className='back_btn'> BACK </MyButton>
        </div>
    );
};

export default Card;