import React from 'react';
import './Dashboard.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import useHandleNavigation from '../../../hooks/useHandleNavigation.tsx'

function Sidebar() {
    const handleNavigation = useHandleNavigation();

    return (
        <div className="contain-sidebar">
            <div className="sidebar-select">
                <div className="select-icon">
                    <HomeIcon />
                </div>
                <div className="select-name" id="current-selection">
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
            <div className="sidebar-select" onClick={() => handleNavigation(`/profile/${localStorage.getItem('username')}`)}>
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