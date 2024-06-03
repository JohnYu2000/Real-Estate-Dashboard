import React, { useState } from 'react';
import './Listings.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function TableHeader() {
    const [page, setPage] = useState(1);

    return (
        <div className="contain-tableheader">
            <div className="pagination-component">
                <div className="header">
                    Page Number
                </div>
                <div className="body">
                    <div className="pagination-button"><NavigateBeforeIcon /></div>
                    <div className="page-number">{page}</div>
                    <div className="pagination-button"><NavigateNextIcon /></div>    
                </div>
            </div>
        </div>
    )
}

export default TableHeader;