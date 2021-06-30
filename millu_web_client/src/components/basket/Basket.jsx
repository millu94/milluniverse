import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styles';

const Basket = ({ basket }) => {

    const classes = useStyles();

    const isEmpty = !basket.length;

    const EmptyBasket = () => (
        <Typography variant="subtitle1">Your basket is empty</Typography>
    )

    const FilledBasket  = () => (
        <>
            <Grid container spacing={3}>
                {basket.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>    
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    subtotal: {basket.length}
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </Typography>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyBasket/> : <FilledBasket/>}
        </Container>
    )
}

export default Basket
