import React from 'react';
import { addListing } from './api.tsx';
import { validateForm } from '../../../utils/validateForm.tsx';

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

export const handleSave = async (
    formData: any,
    closeModal: () => void,
    setErrors: React.Dispatch<React.SetStateAction<Errors>>
) => {
    if (!validateForm(formData, setErrors)) {
        return;
    }

    try {
        await addListing(formData);
        closeModal();
    } catch (error) {
        console.error("Failed to add listing:", error);
    }
};