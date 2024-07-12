import { editListing } from './api.tsx';
import { validateForm } from './validateForm.tsx';

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
        await editListing(formData.id, formData);
        closeModal();
    } catch (error) {
        console.error("Failed to edit listing.", error);
    }
}