import React, { useState } from 'react';
import './Listings.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface TableHeaderProps {
    page: number;
    setPage: (page: number) => void;
}

function TableHeader({ page, setPage }: TableHeaderProps) {
    const handleIncrement = () => {
        setPage(page + 1);
    }

    const handleDecrement = () => {
        setPage(page > 1 ? page - 1 : 1);
    }

    return (
        <div className="contain-tableheader">
            <div className="pagination-component">
                <div className="header">
                    Page Number
                </div>
                <div className="body">
                    <div className="pagination-button" onClick={handleDecrement}><NavigateBeforeIcon /></div>
                    <div className="page-number">{page}</div>
                    <div className="pagination-button" onClick={handleIncrement}><NavigateNextIcon /></div>    
                </div>
            </div>
        </div>
    )
}

export default TableHeader;