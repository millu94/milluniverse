import React from 'react';
import Header from '../components/header/Header';

const MusicPage = ({ basketQty }) => {
    return(
        <div>
            <Header totalItems={ basketQty }/>
            <h1> Info About Ma tunes </h1>
        </div>
    );

};

export default MusicPage;