import React from 'react';
import './Profile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import useHandleNavigation from '../../../hooks/useHandleNavigation.tsx';

function Sidebar() {
    const handleNavigation = useHandleNavigation();

    return (
        <div className="contain-sidebar">
            <div className="sidebar-select" onClick={() => handleNavigation('/dashboard')}>
                <div className="select-icon">
                    <HomeIcon />
                </div>
                <div className="select-name">
                    Dashboard    
                </div>
            </div>
            <div className="sidebar-select" onClick={() => handleNavigation('/listings')}>
                <div className="select-icon">
                    <ApartmentIcon />
                </div>
                <div className="select-name">
                    Listings    
                </div>
            </div>
            <div className="sidebar-select" id="current-selection">
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