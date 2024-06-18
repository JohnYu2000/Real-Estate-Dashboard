import React, { useState } from 'react';
import './FilterListingsDialog.css';
import { handleInputChange, handleSelectChange } from './../utils/handleFilterChange.tsx';
import { handleSave } from './../utils/handleSave.tsx';
import { handleCancel } from './../utils/handleCancel.tsx';

interface FilterListingsDialogProps {
    filters: any;
    setFilters: (filters: any) => void;
    closeModal: () => void;
}

const provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan'
]

function FilterListingsDialog({
    filters,
    setFilters,
    closeModal
}: FilterListingsDialogProps) {
    const [tempFilters, setTempFilters] = useState(filters);

    return (
        <div className="modal-container">
            <div className="modal-content">
                <h2>Filter Listings</h2>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={tempFilters.city || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                </div>
                <button onClick={() => handleSave(tempFilters, setFilters, closeModal)}>Save</button>
                <button onClick={() => handleCancel(closeModal)}>Cancel</button>
            </div>
        </div>
    )
}

export default FilterListingsDialog;