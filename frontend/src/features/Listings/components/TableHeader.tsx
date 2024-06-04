import React, { useState } from 'react';
import './Listings.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import handleDecrement from './../utils/handleDecrement.tsx';
import handleIncrement from './../utils/handleIncrement.tsx';

interface TableHeaderProps {
    page: number;
    setPage: (page: number) => void;
}

function TableHeader({ page, setPage }: TableHeaderProps) {

    return (
        <div className="contain-tableheader">
            <div className="pagination-component">
                <div className="header">
                    Page Number
                </div>
                <div className="body">
                    <div className="pagination-button" onClick={() => handleDecrement(page, setPage)}><NavigateBeforeIcon /></div>
                    <div className="page-number">{page}</div>
                    <div className="pagination-button" onClick={() => handleIncrement(page, setPage)}><NavigateNextIcon /></div>    
                </div>
            </div>
        </div>
    )
}

export default TableHeader;