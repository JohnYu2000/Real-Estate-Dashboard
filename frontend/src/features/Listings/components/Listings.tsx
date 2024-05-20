import React from 'react';
import './Listings.css';

import Body from './Body.tsx';
import Navbar from './Navbar.tsx';

function Listings() {
    return (
        <div className="contain-listings">
            <Navbar />
            <Body />
        </div>    
    )
}

export default Listings;