import React from 'react';
import './Profile.css';

import Body from './Body.tsx';
import Navbar from './Navbar.tsx';

function Profile() {
    return (
        <div className="contain-profile">
            <Navbar />
            <Body />
        </div>
    )
}

export default Profile;