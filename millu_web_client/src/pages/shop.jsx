import React from 'react';
// import Header from '../components/header/Header';
// import Products from '../components/products/Products';
// check out the index.js file inside the components folder to see how they can be exported

import { Header, Products } from '../components';

const Shop = () => {
    return(
        <div>
            <Header />
            <h1> Plz buy stuff </h1>
            <Products />
        </div>
    );

};

export default Shop;