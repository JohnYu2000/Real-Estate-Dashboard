import React from 'react';
import './ViewListingDialog.css';

interface ViewListingDialogProps {
    selectedRow: {
        city: string;
        price: number;
        address: string;
        numberBeds: number;
        numberBaths: number;
        province: string;
        population: number;
        latitude: number;
        longitude: number;
        medianFamilyIncome: number;
    };
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

function ViewListingDialog({
    selectedRow,
    closeModal
}: ViewListingDialogProps) {
    return (
        <div className="view-modal-container">
            <div className="view-modal-content">
                <h2>View Listing</h2>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={selectedRow.city || ''}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={selectedRow.price || ''}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={selectedRow.address || ''}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label>Number of Beds</label>
                    <input
                        type="number"
                        name="numberBeds"
                        value={selectedRow.numberBeds || ''}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label>Number of Baths</label>
                    <input
                        type="number"
                        name="numberBaths"
                        value={selectedRow.numberBaths || ''}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label>Province</label>
                    <select
                        name="province"
                        value={selectedRow.province}
                        disabled
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
                        value={selectedRow.population || ''}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label>Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        value={selectedRow.latitude || ''}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label>Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        value={selectedRow.longitude || ''}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label>Median Family Income</label>
                    <input
                        type="number"
                        name="medianFamilyIncome"
                        value={selectedRow.medianFamilyIncome || ''}
                        readOnly
                        disabled
                    />
                </div>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default ViewListingDialog;