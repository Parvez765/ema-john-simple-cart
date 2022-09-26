import React from 'react';
import logo from "../../images/6894668_preview.png"
import "./HeaderInfo.css"

const HeaderInfo = () => {
    return (
        <div className='headerInfo'>
            <div>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button className='headerBtn'>Shop Now</button>
            </div>
            <img src={logo} alt="" className='headerImg'/>
        </div>
    );
};

export default HeaderInfo;