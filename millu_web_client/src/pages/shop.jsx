import React, {useState, useEffect}  from 'react';
import Request from '../helpers/request';
// import Header from '../components/header/Header';
// import Products from '../components/products/Products';
// check out the index.js file inside the components folder to see how they can be exported

import { Header, Products } from '../components';
import { QueueTwoTone } from '@material-ui/icons';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const productPromise = request.get('/products')
        
        productPromise
        .then((data) => {
            setProducts(data)
            console.log(data)
        })
    }

    const fetchCart = async () => {
        setCart(cart)
    }

    const handleAddToCart = async ( product ) => {
        
        const item = { product }
        setCart([...cart, item]);
    }

    useEffect(() => {
        requestAll();
        fetchCart();
    }, [])

    console.log(cart)

    return(
        <div>
            <Header totalItems={cart.length}/>
            <h1> Plz buy stuff </h1>
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    );

};

export default Shop;