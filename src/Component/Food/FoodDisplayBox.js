import React from 'react';
import mainLogo from '../../ui-common/images/download.png';

const FoodDisplayBox = (props) => {
    return (
        <ul className='box' onClick={props.onClick}>
            <div className="row">
                <div className="col-md-4">
                    <img  src={mainLogo}  alt="fireSpot"/>
                </div>
                <div>
                    <li>{props.food.foodname}</li>
                    <li>{props.food.type}</li>
                    <li>{props.food.price}</li>
                </div>
            </div>
        </ul>
    );
};

export default FoodDisplayBox;
