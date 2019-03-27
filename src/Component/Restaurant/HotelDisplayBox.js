import React from 'react';
const HotelDisplayBox = ({index,onClick, hotel, ImageFileConstant, box, ImageWidthHeight, hover}) => {

    return (
        <ul className={box} onClick={onClick}>
            <div className={hover ? 'row hover-on-row' : 'row'}>
                <div className={hover ? 'col-md-12':'col-md-6' }>
                    {/* <img  src={mainLogo}  alt="fireSpot"/> */}
                <img className={ImageWidthHeight} src={ImageFileConstant[index]} alt="" />
                </div>
                <div className={hover ? 'col-md-12':'col-md-6'} style={{left:'1%'}}>
                    <li className="title">{hotel.name}</li>
                    <li className="location">{hotel.location}</li>
                    <li className="contact">{hotel.contact}</li>
                </div>
            </div>
        </ul>
    );
}

export default HotelDisplayBox;
