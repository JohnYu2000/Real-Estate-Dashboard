import React, { useState } from 'react';
import './Listings.css';

import TableContent from './TableContent.tsx';
import TableHeader from './TableHeader.tsx';

function Table() {
    const [page, setPage] = useState(1);
    const [selectedColumns, setSelectedColumns] = useState([
        'Listing ID',
        'City',
        'Price',
        'Address',
        'Number of Beds',
        'Number of Baths',
        'Province',
        'Population',
        'Latitude',
        'Longitude',
        'Median Family Income'
    ]);
    const [filters, setFilters] = useState({});

    return (
        <div className="contain-table">
            <TableHeader
                page={page}
                setPage={setPage}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
                filters={filters}
                setFilters={setFilters}
            />
            <TableContent
                page={page}
                selectedColumns={selectedColumns}
            />
        </div>
    )
}

export default Table;