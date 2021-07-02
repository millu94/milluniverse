import React from 'react';
import Header from '../components/header/Header';
import ReactDOM from 'react-dom';


const MainPage = ({ basket }) => {
    return(
        <div>
            <Header totalItems={ basket.length }/>
            <h1>Welcome to the MILLÜNIVERSE</h1>
            
        </div>
    );

};

export default MainPage;