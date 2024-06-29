import { addListing } from './api.tsx'

export const handleSave = async (formData: any, closeModal: () => void) => {
    try {
        await addListing(formData);
        closeModal();
    } catch (error) {
        console.error("Failed to add listing:", error);
    }
};