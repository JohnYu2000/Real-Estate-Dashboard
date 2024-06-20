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
        <div className="filter-modal-container">
            <div className="filter-modal-content">
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
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min"
                        value={tempFilters.minPrice || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max"
                        value={tempFilters.maxPrice || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={tempFilters.address || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                </div>
                <div>
                    <label>Number of Beds</label>
                    <input
                        type="number"
                        name="minBeds"
                        placeholder="Min"
                        value={tempFilters.minBeds || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                    <input
                        type="number"
                        name="maxBeds"
                        placeholder="Max"
                        value={tempFilters.maxBeds || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                </div>
                <div>
                    <label>Number of Baths</label>
                    <input
                        type="number"
                        name="minBaths"
                        placeholder="Min"
                        value={tempFilters.minBaths || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                    <input
                        type="number"
                        name="maxBaths"
                        placeholder="Max"
                        value={tempFilters.maxBaths || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                </div>
                <div>
                    <label>Province</label>
                    <select
                        name="province"
                        value={tempFilters.province || ''}
                        onChange={(e) => handleSelectChange(e, tempFilters, setTempFilters)}
                    >
                        <option value="">Select Province</option>
                        {provinces.map(province => (
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Population</label>
                    <input
                        type="number"
                        name="minPopulation"
                        placeholder="Min"
                        value={tempFilters.minPopulation || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                    <input
                        type="number"
                        name="maxPopulation"
                        placeholder="Max"
                        value={tempFilters.maxPopulation || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                </div>
                <div>
                    <label>Latitude</label>
                    <input
                        type="number"
                        name="minLatitude"
                        placeholder="Min"
                        value={tempFilters.minLatitude || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                    <input
                        type="number"
                        name="maxLatitude"
                        placeholder="Max"
                        value={tempFilters.maxLatitude || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                </div>
                <div>
                    <label>Longitude</label>
                    <input
                        type="number"
                        name="minLongitude"
                        placeholder="Min"
                        value={tempFilters.minLongitude || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                    <input
                        type="number"
                        name="maxLongitude"
                        placeholder="Max"
                        value={tempFilters.maxLongitude || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                </div>
                <div>
                    <label>Median Family Income</label>
                    <input
                        type="number"
                        name="minIncome"
                        placeholder="Min"
                        value={tempFilters.minIncome || ''}
                        onChange={(e) => handleInputChange(e, tempFilters, setTempFilters)}
                    />
                    <input
                        type="number"
                        name="maxIncome"
                        placeholder="Max"
                        value={tempFilters.maxIncome || ''}
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