import React from 'react';

const InputBox = props => {
    return (
        <input className='UserInput' onChange={props.inputHandler} value={props.emojiValue} />
    );
};

export default InputBox;
