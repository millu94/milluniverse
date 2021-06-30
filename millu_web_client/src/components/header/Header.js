import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../static/images/discoplanet.jpeg'

import useStyles from './styles';


const Header = ({ totalItems }) => {

    const classes = useStyles();

    return(
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> 
                        millüniverse
                    </Typography>
                    
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                    </IconButton>
                </div>
            
                </Toolbar>
            </AppBar>


            <h1> Menu </h1>
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/music">Music</Link>
                <br />
                <Link to="/softdev">Software Development</Link>
                <br />
                <Link to="/life">Life</Link>
                <br />
                <Link to="/shop">Shop</Link>
            
            </div>    
        </div>
    )
}

export default Header;