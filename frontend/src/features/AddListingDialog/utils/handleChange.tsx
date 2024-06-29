import React from 'react';

export const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    formData: any,
    setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};