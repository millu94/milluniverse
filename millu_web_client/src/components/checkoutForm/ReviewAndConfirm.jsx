import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Input, Table, TableRow, TableHead, TableContainer, TableCell, TableBody, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import BasketItem from '../basket/basketItem/BasketItem'

const useStyles = makeStyles({
    table: {
      minWidth: 300,
    },
  });

const ReviewAndConfirm = ({ shippingData, basket, customerData, nextStep, handleEmptyBasket }) => {

    const classes = useStyles();

    const ProductSummary = () => (
        <>  
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Price Per Unit</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {basket.map((item) => ( 
                    <TableRow key={item.name}>
                        <TableCell component="th" scope="item">
                            {item.product.name}
                        </TableCell>
                        <TableCell align="right">£ {item.product.price}</TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">£ {item.product.price * item.quantity}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
            </TableContainer>
        </>
    )

    
    const CustomerDetails = () => (
        <>
            <Typography variant="h9">{customerData.customerDetails.name}</Typography>
            <br/>
            <Typography variant="h9">{customerData.customerDetails.address}</Typography>
            <br/>
            <Typography variant="h9">{customerData.customerDetails.email}</Typography>
            <br/>
            <Typography variant="h9">{customerData.customerDetails.phone}</Typography>
            <br/><br/>
        </>
    )
    
    const subtotal = function(basket){
        
        const Total = basket.reduce((tempTotal, basket) => {
            return tempTotal + basket.product.price * basket.quantity;
        }, 0)
        return Total;
    }

    const handleConfirm = () => {
        nextStep()
        handleEmptyBasket()
    }
    
    return (
        <div>
            <ProductSummary/>
            <br/>
            <div >
                <CustomerDetails/>
                <Typography variant="h4" align="right" gutterBottom>
                    Subtotal: £ {subtotal(basket)}
                </Typography>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button component={Link} variant="outlined" to="/basket">Back to Cart</Button>
                <form onSubmit={handleConfirm}>
                    <Button type="submit" variant="contained" color="primary">Confirm</Button>
                </form>
            </div>

        </div>


    )
}

export default ReviewAndConfirm
