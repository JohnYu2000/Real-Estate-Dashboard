import React, { useMemo } from 'react';
import './Listings.css';
import useListings from './../../../hooks/useListing.tsx';

function TableContent() {
    const queryParams = useMemo(() => ({}), []);

    const { listings, loading, error } = useListings(queryParams);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="contain-tablecontent">
            <table>
                <thead>
                    <tr className="header">
                        <th>Listing ID</th>
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
                </thead>
                <tbody>
                    {listings.map((listing) => (
                        <tr key={listing.id}>
                            <td>{listing.id}</td>
                            <td>{listing.city}</td>
                            <td>{listing.price}</td>
                            <td>{listing.address}</td>
                            <td>{listing.numberBeds}</td>
                            <td>{listing.numberBaths}</td>
                            <td>{listing.province}</td>
                            <td>{listing.population}</td>
                            <td>{listing.latitude}</td>
                            <td>{listing.longitude}</td>
                            <td>{listing.medianFamilyIncome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableContent;