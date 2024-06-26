import React, { useState } from 'react';
import './ColumnSelectorDialog.css';
import handleCheckboxChange from './../utils/handleCheckboxChange.tsx';
import handleSave from './../utils/handleSave.tsx';
import handleCancel from './../utils/handleCancel.tsx';

interface ColumnSelectorDialogProps {
    selectedColumns: string[];
    setSelectedColumns: (columns: string[]) => void;
    closeModal: () => void;
}

const availableColumns = [
    'Listing ID',
    'City',
    'Price',
    'Address',
    'Number of Beds',
    'Number of Baths',
    'Province',
    'Population',
    'Latitude',
    'Longitude',
    'Median Family Income'
]

const ColumnSelectorDialog: React.FC<ColumnSelectorDialogProps> = ({
    selectedColumns,
    setSelectedColumns,
    closeModal
}) => {
    const [tempSelectedColumns, setTempSelectedColumns] = useState<string[]>(selectedColumns);

    return (
        <div className="modal-container">
            <div className="modal-content">
                <h2>Select Columns</h2>
                {availableColumns.map(column => (
                    <div key={column}>
                        <input
                            key={column}
                            type="checkbox"
                            value={column}
                            checked={tempSelectedColumns.includes(column)}
                            onChange={(event) => handleCheckboxChange(event, tempSelectedColumns, setTempSelectedColumns)}
                        />
                        {column}
                    </div>
                ))}
                <button onClick={() => handleSave(tempSelectedColumns, setSelectedColumns, closeModal)}>Save</button>
                <button onClick={() => handleCancel(closeModal)}>Cancel</button>    
            </div>
        </div>
    )
}

export default ColumnSelectorDialog;