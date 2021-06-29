import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <div>
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