import React from 'react';
import './Listings.css';

function TableContent() {
    return (
        <div className="contain-tablecontent">
            <table>
                <tr className="header">
                    <th>City</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Number of Beds</th>
                    <th>Number of Baths</th>
                    <th>Province</th>
                    <th>Population</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Median Family Income</th>
                </tr>
            </table>
        </div>
    )
}

export default TableContent;