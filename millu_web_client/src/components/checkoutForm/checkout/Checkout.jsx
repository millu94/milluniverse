import React, { useState } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import ReviewAndConfirm from '../ReviewAndConfirm';
import Header from '../../header/Header';

const steps = ['Shipping Address & Payment Details', 'Review & Confirm'];

const Checkout = ({ basket, basketQty, handleEmptyBasket }) => {

    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [customerData, setCustomerData] = useState({});

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        // console.log(data)
        const customerDetails = {
            name : data.target[0].value,
            address : data.target[1].value,
            email : data.target[2].value,
            phone : data.target[3].value
        }
        setCustomerData({...customerData, customerDetails})
        setShippingData({customerDetails, ...basket});
        nextStep();
    }
    
    console.log(customerData);
    console.log(shippingData);

    const Confirmation = () => (
            <div>
                Thanks for your order!
                <br/><br/>
                <div >
                    <Button align="right" component={Link} variant="outlined" to="/shop">Back to Shop</Button>
                    
                </div>
            </div>
    ); 

    const Form = () => activeStep === 0
        ? <AddressForm next={next}/>
        : <ReviewAndConfirm 
            shippingData={shippingData} 
            basket={basket} 
            customerData={customerData} 
            nextStep={nextStep}
            handleEmptyBasket={handleEmptyBasket}/>


    return (
        <>
            <Header totalItems={ basketQty }  />
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper> 
            </main>
        </>
    )
}

export default Checkout
