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
                    <label className="required">City</label>
                    <input
                        type="text"
                        name="city"
                    />
                </div>
                <div>
                    <label className="required">Price</label>
                    <input
                        type="number"
                        name="price"
                    />
                </div>
                <div>
                    <label className="required">Address</label>
                    <input
                        type="text"
                        name="address"
                    />
                </div>
                <div>
                    <label className="required">Number of Beds</label>
                    <input
                        type="number"
                        name="numberBeds"
                    />
                </div>
                <div>
                    <label className="required">Number of Baths</label>
                    <input
                        type="number"
                        name="numberBaths"
                    />
                </div>
                <div>
                    <label className="required">Province</label>
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
                    <label className="required">Population</label>
                    <input
                        type="number"
                        name="population"
                    />
                </div>
                <div>
                    <label className="required">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                    />
                </div>
                <div>
                    <label className="required">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                    />
                </div>
                <div>
                    <label className="required">Median Family Income</label>
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