import React from 'react';

interface FormData {
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

export const validateForm = (formData: FormData, setErrors: React.Dispatch<React.SetStateAction<Errors>>): boolean => {
    let valid = true;
    let newErrors: Errors = {
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
    };

    Object.keys(formData).forEach(key => {
        if (formData[key as keyof FormData] === '') {
            newErrors[key as keyof Errors] = 'This field is required';
            valid = false;
        } else {
            newErrors[key as keyof Errors] = '';
        }
    });

    setErrors(newErrors);
    return valid;
}