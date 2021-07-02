import React from 'react';
import Header from '../components/header/Header';

const Life = ({ basket }) => {
    return(
        <div>
            <Header totalItems={ basket.length }/>
            <h1> To be or not to be... </h1>
        </div>
    );

};

export default Life;