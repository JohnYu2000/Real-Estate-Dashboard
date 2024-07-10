import { editListing } from './api.tsx';

export const handleSave = async (formData: any, closeModal: () => void) => {
    try {
        await editListing(formData.id, formData);
        closeModal();
    } catch (error) {
        console.error("Failed to edit listing.", error);
    }
}