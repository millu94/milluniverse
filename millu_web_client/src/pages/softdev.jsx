import React from 'react';
import Header from '../components/header/Header';

const SoftDev = ({ basketQty }) => {
    return(
        <div>
            <Header totalItems={ basketQty }/>
            <h1> Software Development Portfolio </h1>
        </div>
    );

};

export default SoftDev;