import React, { useMemo } from 'react';
import './Listings.css';
import useListings from './../../../hooks/useListing.tsx';

interface TableContentProps {
    page: number;
    selectedColumns: string[];
    filters: any;
}

function TableContent({ page, selectedColumns, filters }: TableContentProps) {
    const queryParams = useMemo(() => ({ page, ...filters }), [page, filters]);

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
                        {selectedColumns.includes('Listing ID') && <th>Listing ID</th>}
                        {selectedColumns.includes('City') && <th>City</th>}
                        {selectedColumns.includes('Price') && <th>Price</th>}
                        {selectedColumns.includes('Address') && <th>Address</th>}
                        {selectedColumns.includes('Number of Beds') && <th>Number of Beds</th>}
                        {selectedColumns.includes('Number of Baths') && <th>Number of Baths</th>}
                        {selectedColumns.includes('Province') && <th>Province</th>}
                        {selectedColumns.includes('Population') && <th>Population</th>}
                        {selectedColumns.includes('Latitude') && <th>Latitude</th>}
                        {selectedColumns.includes('Longitude') && <th>Longitude</th>}
                        {selectedColumns.includes('Median Family Income') && <th>Median Family Income</th>}
                    </tr>    
                </thead>
                <tbody>
                    {listings.map((listing) => (
                        <tr key={listing.id}>
                            {selectedColumns.includes('Listing ID') && <td>{listing.id}</td>}
                            {selectedColumns.includes('City') && <td>{listing.city}</td>}
                            {selectedColumns.includes('Price') && <td>{listing.price}</td>}
                            {selectedColumns.includes('Address') && <td>{listing.address}</td>}
                            {selectedColumns.includes('Number of Beds') && <td>{listing.numberBeds}</td>}
                            {selectedColumns.includes('Number of Baths') && <td>{listing.numberBaths}</td>}
                            {selectedColumns.includes('Province') && <td>{listing.province}</td>}
                            {selectedColumns.includes('Population') && <td>{listing.population}</td>}
                            {selectedColumns.includes('Latitude') && <td>{listing.latitude}</td>}
                            {selectedColumns.includes('Longitude') && <td>{listing.longitude}</td>}
                            {selectedColumns.includes('Median Family Income') && <td>{listing.medianFamilyIncome}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableContent;