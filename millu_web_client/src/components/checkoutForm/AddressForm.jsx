import React, {useState} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Input } from '@material-ui/core';
import {  FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import FormInput from './CustomTextField';

const AddressForm = ({ next }) => {
    // const [shippingCountries, setShippingCountries] = useState([]);
    // const [shippingCountry, setShippingCountry] = useState('');
    // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    // const [shippingSubdivision, setShippingSubdivision] = useState('');
    // const [shippingOptions, setShippingOptions] = useState([]);
    // const [shippingOption, setShippingOption] = useState('');

    const [formData, setFormData] = useState({});

    // const handleSubmit = (e) => {
    //     console.log(e)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        next(e);
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
        
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <Grid >
                <InputLabel htmlFor="name">Name:</InputLabel>
                <Input onChange={onChange} type="text" id="name" v-model="name" required/>
                <br/>
                <InputLabel htmlFor="address">Address:</InputLabel>
                <Input onChange={onChange} type="text" id="address" v-model="name" required/>
                <br/>
                <InputLabel htmlFor="email">Email:</InputLabel>
                <Input onChange={onChange} type="text" id="email" v-model="name" required/>
                <br/>
                <InputLabel htmlFor="phoneNumber">Phone Number:</InputLabel>
                <Input onChange={onChange} type="text" id="phone" v-model="name" required/>
            </Grid>
            <br/>
            {/* <input type="submit" value="Save" id="save"/> */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      
    )
}

export default AddressForm
