import React, { useEffect, useRef } from 'react';
import './Listings.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { ColumnSelectorDialog }  from '../../ColumnSelectorDialog/index.js';
import { FilterListingsDialog } from '../../FilterListingsDialog/index.js';
import { AddListingDialog } from '../../AddListingDialog/index.js';
import { EditListingDialog } from '../../EditListingDialog/index.js';
import handleDecrement from './../utils/handleDecrement.tsx';
import handleIncrement from './../utils/handleIncrement.tsx';

interface TableHeaderProps {
    page: number;
    setPage: (page: number) => void;
    selectedColumns: string[];
    setSelectedColumns: (columns: string[]) => void;
    filters: any;
    setFilters: (filters: any) => void;
    selectedRow: any;
}

function TableHeader({ page, setPage, selectedColumns, setSelectedColumns, filters, setFilters, selectedRow }: TableHeaderProps) {
    const columnModalRef = useRef<HTMLDialogElement>(null);
    const filterModalRef = useRef<HTMLDialogElement>(null);
    const addModalRef = useRef<HTMLDialogElement>(null);
    const editModalRef = useRef<HTMLDialogElement>(null);

    const openColumnModal = () => columnModalRef.current?.showModal();
    const closeColumnModal = () => columnModalRef.current?.close();

    const openFilterModal = () => filterModalRef.current?.showModal();
    const closeFilterModal = () => filterModalRef.current?.close();

    const openAddModal = () => addModalRef.current?.showModal();
    const closeAddModal = () => addModalRef.current?.close();

    const openEditModal = () => editModalRef.current?.showModal();
    const closeEditModal = () => editModalRef.current?.close();

    useEffect(() => {
        console.log(selectedRow);
    }, [selectedRow])

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
                    onClick={openColumnModal}
                />
            </div>
            <div className="icon-selector">
                <FilterAltIcon
                    style={{
                        'fontSize': '36px',
                        'color': 'white',
                        'alignSelf': 'flex-end'
                    }}
                    onClick={openFilterModal}
                />
            </div>
            <div className="icon-selector">
                <AddIcon
                    style={{
                        'fontSize': '36px',
                        'color': 'white',
                        'alignSelf': 'flex-end'
                    }}
                    onClick={openAddModal}
                />
            </div>
            <div className="icon-selector">
                    <EditIcon
                        style={{
                            'fontSize': '36px',
                            'color': 'white',
                            'alignSelf': 'flex-end'
                        }}
                        onClick={openEditModal}
                    />
            </div>
            <dialog ref={columnModalRef} className="column-selector-modal">
                <ColumnSelectorDialog
                    selectedColumns={selectedColumns}
                    setSelectedColumns={setSelectedColumns}
                    closeModal={closeColumnModal}
                />
            </dialog>
            <dialog ref={filterModalRef} className="filter-selector-modal">
                <FilterListingsDialog
                    filters={filters}
                    setFilters={setFilters}
                    closeModal={closeFilterModal}
                />
            </dialog>
            <dialog ref={addModalRef} className="add-selector-modal">
                <AddListingDialog
                    closeModal={closeAddModal}
                />
            </dialog>
            <dialog ref={editModalRef} className="edit-selector-modal">
                <EditListingDialog
                />
            </dialog>
        </div>
    )
}

export default TableHeader;