import { Dispatch, SetStateAction } from 'react';

const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    tempSelectedColumns: string[],
    setTempSelectedColumns: Dispatch<SetStateAction<string[]>>
) => {
    const { value, checked } = event.target;
    if (checked) {
        setTempSelectedColumns([...tempSelectedColumns, value]);
    } else {
        setTempSelectedColumns(tempSelectedColumns.filter(column => column !== value));
    }
};

export default handleCheckboxChange;