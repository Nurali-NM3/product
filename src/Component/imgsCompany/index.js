import React from 'react';
import './index.css'
const imagesCompany = () => {
    return (
        <div className="container">
                <div className={'wrapper-img'}>
                    <img src={require('../assets/imgsass.png')} alt=""/>
                    <img src={require('../assets/img2.png')} alt=""/>
                    <img src={require('../assets/img3.png')} alt=""/>
                    <img src={require('../assets/cl_logo2.png')} alt=""/>
                </div>
        </div>
    );
};

export default imagesCompany;