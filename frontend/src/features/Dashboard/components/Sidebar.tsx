import React from 'react';
import './Dashboard.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
    return (
        <div className="contain-sidebar">
            <div className="sidebar-select">
                <div className="select-icon">
                    <HomeIcon />
                </div>
                <div className="select-name">
                    Dashboard    
                </div>
            </div>
            <div className="sidebar-select">
                <div className="select-icon">
                    <ApartmentIcon />
                </div>
                <div className="select-name">
                    Listings    
                </div>
            </div>
            <div className="sidebar-select">
                <div className="select-icon">
                    <AnalyticsIcon />
                </div>
                <div className="select-name">
                    Analytics    
                </div> 
            </div>
            <div className="sidebar-select">
                <div className="select-icon">
                    <AccountCircleIcon />
                </div>
                <div className="select-name">
                    Profile    
                </div>
            </div>
        </div>
    )
}

export default Sidebar;