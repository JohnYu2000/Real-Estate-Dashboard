import { deleteListing } from './../hooks/useDeleteListing.tsx';

const handleDelete = async (selectedRow: any, setSelectedRow: (row: any) => void, triggerFetch: () => void) => {
    if (selectedRow) {
        try {
            await deleteListing(selectedRow.id);
            setSelectedRow(null);
            alert('Listing deleted successfully')
            triggerFetch();
        } catch (error) {
            alert('Failed to delete listing');
        }
    } else {
        alert('No listing selected for deletion');
    }
};

export default handleDelete;