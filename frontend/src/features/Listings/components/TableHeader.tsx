import React, { useRef } from 'react';
import './Listings.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { ColumnSelectorDialog}  from '../../ColumnSelectorDialog/index.js';
import { FilterListingsDialog} from '../../FilterListingsDialog/index.js';
import handleDecrement from './../utils/handleDecrement.tsx';
import handleIncrement from './../utils/handleIncrement.tsx';

interface TableHeaderProps {
    page: number;
    setPage: (page: number) => void;
    selectedColumns: string[];
    setSelectedColumns: (columns: string[]) => void;
}

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
            <div className="icon-selector">
                <AssignmentIcon
                    style={{
                        'fontSize': '36px',
                        'color': 'white',
                        'alignSelf': 'flex-end',
                    }}
                    onClick={openModal}
                />
            </div>
            <div className="icon-selector">
                <FilterAltIcon
                    style={{
                        'fontSize': '36px',
                        'color': 'white',
                        'alignSelf': 'flex-end'
                    }}
                />
            </div>
            <dialog ref={modalRef} className="column-selector-modal">
                <ColumnSelectorDialog
                    selectedColumns={selectedColumns}
                    setSelectedColumns={setSelectedColumns}
                    closeModal={closeModal}
                />
            </dialog>
        </div>
    )
}

export default TableHeader;