import React from 'react';
import Header from '../components/header/Header';
import ReactDOM from 'react-dom';


const MainPage = ({ basketQty }) => {
    return(
        <div>
            <Header totalItems={ basketQty }/>
            <h1>Welcome to the MILLÜNIVERSE</h1>
            
        </div>
    );

};

export default MainPage;