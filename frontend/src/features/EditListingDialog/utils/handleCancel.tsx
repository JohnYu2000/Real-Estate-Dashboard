import React from 'react';

interface Errors {
    city: string;
    price: string;
    address: string;
    numberBeds: string;
    numberBaths: string;
    province: string;
    population: string;
    latitude: string;
    longitude: string;
    medianFamilyIncome: string;
}

export const handleCancel = (
    selectedRow: any,
    setFormData: React.Dispatch<React.SetStateAction<any>>,
    setErrors: React.Dispatch<React.SetStateAction<Errors>>,
    closeModal: () => void
) => {
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
    setErrors({
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
    closeModal();
};