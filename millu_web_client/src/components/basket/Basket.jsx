import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styles';
import BasketItem from './basketItem/BasketItem';
import Header from '../header/Header';

const Basket = ({ basket, handleRemoveFromBasket, handleEmptyBasket }) => {

    const classes = useStyles();

    const isEmpty = !basket.length;

    const EmptyBasket = () => (
        <Typography variant="subtitle1">is empty</Typography>
    )

    const subtotal = function(basket){
        
        const Total = basket.reduce((tempTotal, basket) => {
            return tempTotal + basket.product.price;
        }, 0)
        return Total;
    }


    const FilledBasket  = () => (
        <>
            <Grid container spacing={3}>
                {basket.map((item) => (
                    <Grid item xs={12} sm={4} key={item.product.id}>
                        <BasketItem item={item} onRemoveFromBasket={handleRemoveFromBasket}/>
                    </Grid>    
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4" >
                    subtotal: £ { isEmpty ? <EmptyBasket/> : subtotal(basket)}
                    <div className={classes.buttons} >
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyBasket}>Empty Basket</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </Typography>
            </div>
        </>
    )

    return (
        <div>
            <Header totalItems={ basket.length }/>
            <Container>
                <div className={classes.toolbar}/>
                <Typography className={classes.title} variant="h3" gutterBottom>Your Basket</Typography>
                { isEmpty ? <EmptyBasket/> : <FilledBasket/>}
            </Container>
        </div>
    )
}

export default Basket
