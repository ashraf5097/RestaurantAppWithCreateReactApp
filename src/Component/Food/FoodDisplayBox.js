import React from 'react';
import mainLogo from '../../ui-common/images/download.png';

const FoodDisplayBox = ({onClick, food}) => {
    
    return (
        <ul className='box hover-on-row' onClick={onClick}>
            <div className="row hover-on-row">
                <div className="col-md-12 " style={{left:'8px'}}>
                    <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nGNtIingEOSkkg8ipC2yFr2VAiFq8KATFUS96LkalpWX1djP'  alt="fireSpot"/>
                </div>
                <div className="col-md-12" style={{textAlign:'center'}}>
                    <li style={{fontWeight:'bold',fontSize:'20px'}}>{food.foodname}</li>
                    <li className = {food.type === 'veg' ? 'vegColor':'nonVegColor'}>{food.type}</li>
                     <li>Price :{food.price}</li>
                </div>
            </div>
        </ul>
    );
};

export default FoodDisplayBox;
