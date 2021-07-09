import React, {useState, useEffect}  from 'react';
import Request from '../helpers/request';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import { Header, Products } from '../components';

const Shop = ({ handleAddToBasket, basketQty }) => {

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
            <Header totalItems={ basketQty }  />
            <h1> Pretend Shop, go crazy and buy as much as you like! </h1>
            <Products products={products} onAddToBasket={handleAddToBasket}/>
        </div>
    );

};

export default Shop;