import React from 'react';
import Header from '../components/header/Header';

const Life = ({ basketQty }) => {
    return(
        <div>
            <Header totalItems={ basketQty }/>
            <h1> To be or not to be... </h1>
        </div>
    );

};

export default Life;