import { deleteListing } from './../hooks/useDeleteListing.tsx';

const handleDelete = async (selectedRow: any) => {
    if (selectedRow) {
        try {
            await deleteListing(selectedRow.id);
            alert('Listing deleted successfully')
        } catch (error) {
            alert('Failed to delete listing');
        }
    } else {
        alert('No listing selected for deletion');
    }
};

export default handleDelete;