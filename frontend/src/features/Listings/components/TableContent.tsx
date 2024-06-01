import React from 'react';
import './Listings.css';

function TableContent() {
    return (
        <div className="contain-tablecontent">
            <div className="header">
                <div className="columnName">
                    City
                </div>
                <div className="columnName">
                    Price
                </div>
                <div className="columnName">
                    Address
                </div>
                <div className="columnName">
                    Number of Beds
                </div>
                <div className="columnName">
                    Number of Baths
                </div>
                <div className="columnName">
                    Province
                </div>
                <div className="columnName">
                    Population
                </div>
                <div className="columnName">
                    Latitude
                </div>
                <div className="columnName">
                    Longitude
                </div>
                <div className="columnName">
                    Median Family Income
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default TableContent;