import React from 'react';

export const handleCancel = (selectedRow: any, setFormData: React.Dispatch<React.SetStateAction<any>>, closeModal: () => void) => {
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
    closeModal();
};