import React, { useRef } from 'react';
import './Listings.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { ColumnSelectorDialog}  from '../../ColumnSelectorDialog/index.js';
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
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = () => modalRef.current?.showModal();
    const closeModal = () => modalRef.current?.close();

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
                {/* <button onClick={openModal}>Select Columns</button> */}
                <AssignmentIcon
                    style={{
                        'fontSize': '36px',
                        'color': 'white',
                        'alignSelf': 'flex-end',
                    }}
                    onClick={openModal}
                />
            </div>
            <dialog ref={modalRef} className="column-selector-modal">
                <ColumnSelectorDialog
                    selectedColumns={selectedColumns}
                    setSelectedColumns={setSelectedColumns}
                    availableColumns={availableColumns}
                    closeModal={closeModal}
                />
            </dialog>
        </div>
    )
}

export default TableHeader;