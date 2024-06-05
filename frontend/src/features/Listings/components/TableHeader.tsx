import React, { useRef, useState } from 'react';
import './Listings.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ColumnSelectorModal from './ColumnSelectorModal.tsx';
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        setIsModalOpen(true);
        modalRef.current?.showModal();
    };
    const closeModal = () => {
        setIsModalOpen(false);
        modalRef.current?.close();
    };

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
                <button onClick={openModal}>Select Columns</button>
            </div>
            <dialog ref={modalRef} className="column-selector-modal">
                {isModalOpen && (
                    <ColumnSelectorModal
                        selectedColumns={selectedColumns}
                        setSelectedColumns={setSelectedColumns}
                        availableColumns={availableColumns}
                        closeModal={closeModal}
                    />
                )}    
            </dialog>
        </div>
    )
}

export default TableHeader;