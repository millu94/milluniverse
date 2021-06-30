import React, {useState, useEffect} from 'react';
import Request from '../../helpers/request';
import { Grid } from '@material-ui/core';

import Product from './product/Product';
import useStyles from './styles';
// const products = [
//     { id: 1, name: "cool socks", desc: "keeps feet warm", price: "£4", image: 'https://www.bewooden.com/picture/5d1ce293a3a7c/w960/0-geomess-socks.jpg'},
//     { id: 2, name: "banana phone", desc: "tasty cellular device", price: "£300", image: "https://media.istockphoto.com/photos/banana-phone-picture-id108174529?k=6&m=108174529&s=170667a&w=0&h=XV8Ru2rFZ8JCIOwLiIsm1Aszp-Nmeaxkvi9_64b1mRQ="}
// ];


const Products = () => {

    const classes = useStyles();

    const [products, setProducts] = useState([]);
    const [cart, setCart] = ({});

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
        requestAll()
    }, [])

    return(
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} s={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    ) 
}

export default Products
