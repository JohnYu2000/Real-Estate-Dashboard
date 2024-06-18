export const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    tempFilters: any,
    setTempFilters: (filters: any) => void
) => {
    const { name, value } = e.target;
    setTempFilters({
        ...tempFilters,
        [name]: value
    });
};

export const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    tempFilters: any,
    setTempFilters: (filters: any) => void
) => {
    const { name, value } = e.target;
    setTempFilters({
        ...tempFilters,
        [name]: value
    });
};