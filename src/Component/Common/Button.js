import React from 'react';

const Button = (props) => {
    return (
        <span className={props.spanStyleButton}>
            <button type={props.type}
                className={props.class}
                id={props.id}
                onClick={props.handleOnClick}
            >
                {props.text}
            </button>
        </span>
    );
};

export default Button;
