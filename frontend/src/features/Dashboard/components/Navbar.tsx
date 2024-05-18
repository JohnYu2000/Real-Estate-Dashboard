import React from 'react';
import './Dashboard.css';

function Navbar() {
    return (
        <div className="contain-navbar">
            <div className="navbar-logo">
                Dashboard
            </div>
            <div className="searchbar">
                <input
                    type="text"
                    id="search-bar"
                    className="searchbarInput"
                    placeholder="Search"
                />
            </div>
            <div className="signout-button">
                Sign out
            </div>
        </div>
    )
}

export default Navbar;