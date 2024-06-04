import React, { useState, useEffect } from 'react';
import './Listings.css';

interface ColumnSelectorModalProps {
    selectedColumns: string[];
    setSelectedColumns: (columns: string[]) => void;
    availableColumns: string[];
    closeModal: () => void;
}

const ColumnSelectorModal: React.FC<ColumnSelectorModalProps> = ({
    selectedColumns,
    setSelectedColumns,
    availableColumns,
    closeModal
}) => {
    const [tempSelectedColumns, setTempSelectedColumns] = useState<string[]>(selectedColumns);;

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setTempSelectedColumns([...tempSelectedColumns, value]);
        } else {
            setTempSelectedColumns(tempSelectedColumns.filter(column => column !== value));
        }
    };

    const handleSave = () => {
        console.log('Saving columns:', tempSelectedColumns);
        setSelectedColumns(tempSelectedColumns);
        closeModal();
    }

    const handleCancel = () => {
        console.log('Cancelling modal');
        closeModal();
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <h2>Select Columns</h2>
                {availableColumns.map(column => (
                    <div key={column}>
                        <label>
                            <input
                                type="checkbox"
                                value={column}
                                checked={tempSelectedColumns.includes(column)}
                                onChange={handleCheckboxChange}
                            />
                            {column}
                        </label>
                    </div>
                ))}
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>    
            </div>
        </div>
    )
}

export default ColumnSelectorModal;