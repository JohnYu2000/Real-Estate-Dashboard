import React from 'react';
import './Dashboard.css';

import Content from './Content.tsx';
import Sidebar from './Sidebar.tsx';

function Body() {
    return (
        <div className="contain-body">
            <Sidebar />
            <Content />
        </div>
    )
}

export default Body;