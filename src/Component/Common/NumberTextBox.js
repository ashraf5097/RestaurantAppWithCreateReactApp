import React from 'react';


const NumberTextBox = (props) => {
    return (
        <div className = "textbox">
            <label htmlFor={props.id}>{props.label} : </label>
            <input type={props.type} className="form-control" id={props.id} name={props.name} value={props.value} onChange={props.handleChange} />
        </div>
    );
};
export default NumberTextBox;
