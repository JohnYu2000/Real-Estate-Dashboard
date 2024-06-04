import React from 'react';

export const handleColumnChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setSelectedColumns: (columns: string[]) => void
) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedColumns(selectedOptions);
};