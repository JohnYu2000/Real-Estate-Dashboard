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

    return (
        <div className="add-modal-container">
            <div className="add-modal-content">
                <h2>Add Listing</h2>
                <div>
                    <label className="required">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <div>
                    <label className="required">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <div>
                    <label className="required">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <div>
                    <label className="required">Number of Beds</label>
                    <input
                        type="number"
                        name="numberBeds"
                        value={formData.numberBeds}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <div>
                    <label className="required">Number of Baths</label>
                    <input
                        type="number"
                        name="numberBaths"
                        value={formData.numberBaths}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <div>
                    <label className="required">Province</label>
                    <select
                        name="province"
                        value={formData.province}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    >
                        <option value="">Select Province</option>
                        {provinces.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))}
                    </select>
                </div>
                <div>
                    <label className="required">Population</label>
                    <input
                        type="number"
                        name="population"
                        value={formData.population}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <div>
                    <label className="required">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        value={formData.latitude}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <div>
                    <label className="required">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        value={formData.longitude}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <div>
                    <label className="required">Median Family Income</label>
                    <input
                        type="number"
                        name="medianFamilyIncome"
                        value={formData.medianFamilyIncome}
                        onChange={(e) => handleChange(e, formData, setFormData)}
                    />
                </div>
                <button onClick={() => handleSave(formData, closeModal, setErrors)}>Save</button>
                <button onClick={() => handleCancel(closeModal)}>Cancel</button>
            </div>
        </div>
    )
}

export default AddListingDialog;