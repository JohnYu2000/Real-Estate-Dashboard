const handleSave = (
    tempSelectedColumns: string[],
    setSelectedColumns: (columns: string[]) => void,
    closeModal: () => void
) => {
    setSelectedColumns(tempSelectedColumns);
    closeModal();
};

export default handleSave;