import React, {useState, useEffect}  from 'react';
import Request from '../helpers/request';
// import Header from '../components/header/Header';
// import Products from '../components/products/Products';
// check out the index.js file inside the components folder to see how they can be exported

import { Header, Products, Basket } from '../components';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const productPromise = request.get('/products')
        
        productPromise
        .then((data) => {
            setProducts(data)
            console.log(data)
        })
    }

    const fetchBasket = async () => {
        setBasket(basket)
    }

    const handleAddToBasket = async ( product ) => {
        
        const item = { product }
        setBasket([...basket, item]);
    }

    useEffect(() => {
        requestAll();
        fetchBasket();
    }, [])

    console.log(basket)

    return(
        <div>
            <Header totalItems={basket.length}  />
            <h1> Plz buy stuff </h1>
            <Products products={products} onAddToBasket={handleAddToBasket}/>
            <Basket basket={basket} />
        </div>
    );

};

export default Shop;