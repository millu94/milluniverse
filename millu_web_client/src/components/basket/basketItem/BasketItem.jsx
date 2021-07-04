import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'; 

import useStyles from './styles';


const BasketItem = ({ item, onUpdateBasketQty, onRemoveFromBasket }) => {

    const classes = useStyles();


    return (
        <Card>
            <CardMedia image={item.product.image} alt={item.product.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.product.name}</Typography>
                <Typography variant="h5">{item.product.price}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateBasketQty(item.product.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateBasketQty(item.product.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromBasket(item.product.id)}>Remove</Button>

            </CardActions>
        </Card>
    )
}

export default BasketItem
