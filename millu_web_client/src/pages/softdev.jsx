import React from 'react';
import Header from '../components/header/Header';

const SoftDev = ({ basket }) => {
    return(
        <div>
            <Header totalItems={ basket.length }/>
            <h1> Software Development Portfolio </h1>
        </div>
    );

};

export default SoftDev;