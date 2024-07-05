import React from 'react';
import './EditListingDialog.css'

interface EditListingDialogProps {
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
    closeModal
}: EditListingDialogProps) {
    return (
        <div className="edit-modal-container">
            <div className="edit-modal-content">
                <h2>Edit Listing</h2>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                    />
                </div>
                <div>
                    <label>Number of Beds</label>
                    <input
                        type="number"
                        name="numberBeds"
                    />
                </div>
                <div>
                    <label>Number of Baths</label>
                    <input
                        type="number"
                        name="numberBaths"
                    />
                </div>
                <div>
                    <label>Province</label>
                    <select
                        name="province"
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
                        name="population"
                    />
                </div>
                <div>
                    <label>Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                    />
                </div>
                <div>
                    <label>Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                    />
                </div>
                <div>
                    <label>Median Family Income</label>
                    <input
                        type="number"
                        name="medianFamilyIncome"
                    />
                </div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default EditListingDialog;