import React from 'react';
import './Dashboard.css';

import Body from './Body.tsx';
import Navbar from './Navbar.tsx';

function Dashboard() {
    return (
        <div className="contain-dashboard">
            <Navbar />
            <Body />
        </div>
    )
}

export default Dashboard;