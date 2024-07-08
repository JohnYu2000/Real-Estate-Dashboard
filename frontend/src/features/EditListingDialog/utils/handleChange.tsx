import React from 'react';

export const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
        ...prevState,
        [name]: value
    }));
};