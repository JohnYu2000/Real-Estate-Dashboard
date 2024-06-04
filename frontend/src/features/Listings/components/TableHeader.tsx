import React, { useState } from 'react';
import './Listings.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { handleColumnChange } from './../utils/handleColumnChange.tsx';
import handleDecrement from './../utils/handleDecrement.tsx';
import handleIncrement from './../utils/handleIncrement.tsx';

interface TableHeaderProps {
    page: number;
    setPage: (page: number) => void;
    selectedColumns: string[];
    setSelectedColumns: (columns: string[]) => void;
}

const availableColumns = [
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
]

function TableHeader({ page, setPage, selectedColumns, setSelectedColumns }: TableHeaderProps) {

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
            <div className="column-selector">
                <label>Select Columns:</label>
                <select multiple value={selectedColumns} onChange={(event) => handleColumnChange(event, setSelectedColumns)}>
                    {availableColumns.map(column => (
                        <option key={column} value={column}>{column}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default TableHeader;