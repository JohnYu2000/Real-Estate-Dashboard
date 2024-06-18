export const handleSave = (
    tempFilters: any,
    setFilters: (filters: any) => void,
    closeModal: () => void
) => {
    setFilters(tempFilters);
    closeModal();
}