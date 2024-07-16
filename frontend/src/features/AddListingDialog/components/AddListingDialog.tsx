import React, { useEffect, useState } from 'react';
import './AddListingDialog.css';
import { handleCancel } from './../utils/handleCancel.tsx'
import { handleChange } from './../utils/handleChange.tsx';
import { handleSave } from './../utils/handleSave.tsx'

interface AddListingDialogProps {
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

function AddListingDialog({
    closeModal
}: AddListingDialogProps) {
    const [formData, setFormData] = useState({
        city: '',
        price: '',
        address: '',
        numberBeds: '',
        numberBaths: '',
        province: '',
        population: '',
        latitude: '',
        longitude: '',
        medianFamilyIncome: ''
    })

    const [errors, setErrors] = useState({
        city: '',
        price: '',
        address: '',
        numberBeds: '',
        numberBaths: '',
        province: '',
        population: '',
        latitude: '',
        longitude: '',
        medianFamilyIncome: ''
    })

    const fieldNames = {
        city: 'City',
        price: 'Price',
        address: 'Address',
        numberBeds: 'Number of Beds',
        numberBaths: 'Number of Baths',
        province: 'Province',
        population: 'Population',
        latitude: 'Latitude',
        longitude: 'Longitude',
        medianFamilyIncome: 'Median Family Income'
    }

    // ----- Delete this later ----- //
    useEffect(() => {
        console.log(errors);
    }, [errors])
    // ----- Delete this later ----- //

    return (
        <div className="add-modal-container">
            <div className="add-modal-content">
                <h2>Add Listing</h2>
                {Object.keys(formData).map((field) => (
                    <div key={field}>
                        <label className="required">{fieldNames[field]}</label>
                        {field === 'province' ? (
                            <select name={field} value={formData[field]} onChange={(e) => handleChange(e, formData, setFormData)}>
                                <option value="">Select Province</option>
                                {provinces.map(province => (
                                    <option key={province} value={province}>{province}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field === 'price' || field.includes('number') || field.includes('Population') || field.includes('Latitude') || field.includes('Longitude') || field.includes('Income') ? 'number' : 'text'}
                                name={field}
                                value={formData[field]}
                                onChange={(e) => handleChange(e, formData, setFormData)}
                            />
                        )}
                    </div>

                ))}
                <button onClick={() => handleSave(formData, closeModal, setErrors)}>Save</button>
                <button onClick={() => handleCancel(closeModal)}>Cancel</button>
            </div>
        </div>
    )
}

export default AddListingDialog;