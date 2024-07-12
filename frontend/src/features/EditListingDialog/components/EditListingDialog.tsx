import React, { useEffect, useState } from 'react';
import './EditListingDialog.css'
import { handleCancel } from '../utils/handleCancel.tsx'
import { handleChange } from '../utils/handleChange.tsx';
import { handleSave } from '../utils/handleSave.tsx';

interface EditListingDialogProps {
    selectedRow: any,
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

function EditListingDialog({
    selectedRow,
    closeModal
}: EditListingDialogProps) {
    const [formData, setFormData] = useState({
        id: '',
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

    useEffect(() => {
        if (selectedRow) {
            setFormData({
                id: selectedRow.id || '',
                city: selectedRow.city || '',
                price: selectedRow.price || '',
                address: selectedRow.address || '',
                numberBeds: selectedRow.numberBeds || '',
                numberBaths: selectedRow.numberBaths || '',
                province: selectedRow.province || '',
                population: selectedRow.population || '',
                latitude: selectedRow.latitude || '',
                longitude: selectedRow.longitude || '',
                medianFamilyIncome: selectedRow.medianFamilyIncome || ''
            });
        }
    }, [selectedRow]);

    return (
        <div className="edit-modal-container">
            <div className="edit-modal-content">
                <h2>Edit Listing</h2>
                <div>
                    <div className="field-div">
                        <label className="required">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.city && <span className="fieldValidationMessage">{errors.city}</span>}    
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.price && <span className="fieldValidationMessage">{errors.price}</span>}
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.address && <span className="fieldValidationMessage">{errors.address}</span>}
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Number of Beds</label>
                        <input
                            type="number"
                            name="numberBeds"
                            value={formData.numberBeds}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.numberBeds && <span className="fieldValidationMessage">{errors.numberBeds}</span>}
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Number of Baths</label>
                        <input
                            type="number"
                            name="numberBaths"
                            value={formData.numberBaths}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.numberBaths && <span className="fieldValidationMessage">{errors.numberBaths}</span>}
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Province</label>
                        <select
                            name="province"
                            value={formData.province}
                            onChange={(e) => handleChange(e, setFormData)}
                        >
                            <option value="">Select Province</option>
                            {provinces.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))}
                        </select>
                    </div>
                    {errors.province && <span className="fieldValidationMessage">{errors.province}</span>}
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Population</label>
                        <input
                            type="number"
                            name="population"
                            value={formData.population}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.population && <span className="fieldValidationMessage">{errors.population}</span>}
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Latitude</label>
                        <input
                            type="number"
                            name="latitude"
                            value={formData.latitude}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.latitude && <span className="fieldValidationMessage">{errors.latitude}</span>}
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Longitude</label>
                        <input
                            type="number"
                            name="longitude"
                            value={formData.longitude}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.longitude && <span className="fieldValidationMessage">{errors.longitude}</span>}
                </div>
                <div>
                    <div className="field-div">
                        <label className="required">Median Family Income</label>
                        <input
                            type="number"
                            name="medianFamilyIncome"
                            value={formData.medianFamilyIncome}
                            onChange={(e) => handleChange(e, setFormData)}
                        />    
                    </div>
                    {errors.medianFamilyIncome && <span className="fieldValidationMessage">{errors.medianFamilyIncome}</span>}
                </div>
                <button onClick={() => handleSave(formData, closeModal, setErrors)}>Save</button>
                <button onClick={() => handleCancel(selectedRow, setFormData, setErrors, closeModal)}>Cancel</button>
            </div>
        </div>
    )
}

export default EditListingDialog;