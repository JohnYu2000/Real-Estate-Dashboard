import React from 'react';
import './Listings.css';

import TableContent from './TableContent.tsx';
import TableHeader from './TableHeader.tsx';

function Table() {
    return (
        <div className="contain-table">
            <TableHeader />
            <TableContent />
        </div>
    )
}

export default Table;