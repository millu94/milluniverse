import React, {useState, useEffect}  from 'react';
import Request from '../helpers/request';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import { Header, Products, Basket } from '../components';

const Shop = ({ basket, handleAddToBasket }) => {

    const [products, setProducts] = useState([]);

    
    
    
    const requestAll = function(){
        const request = new Request();
        const productPromise = request.get('/products')
        
        productPromise
        .then((data) => {
            setProducts(data)
            console.log(data)
        })
    }

    useEffect(() => {
        requestAll();
    }, [])

    

    return(
        <div>
            <Header totalItems={ basket.length }  />
            <h1> Plz buy stuff </h1>
            <Products products={products} onAddToBasket={handleAddToBasket}/>
            {/* <Basket basket={basket} /> */}
        </div>
    );

};

export default Shop;