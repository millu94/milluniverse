import React from 'react';
import Header from '../components/header/Header';

const MusicPage = ({ basket }) => {
    return(
        <div>
            <Header totalItems={ basket.length }/>
            <h1> Info About Ma tunes </h1>
        </div>
    );

};

export default MusicPage;