import React, { useState } from 'react';
import './Listings.css';

import TableContent from './TableContent.tsx';
import TableHeader from './TableHeader.tsx';

function Table() {
    const [page, setPage] = useState(1);

    return (
        <div className="contain-table">
            <TableHeader page={page} setPage={setPage} />
            <TableContent page={page} />
        </div>
    )
}

export default Table;