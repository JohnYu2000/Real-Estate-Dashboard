import axios from './../../../hooks/axiosConfig.tsx';

export const deleteListing = async (listingId: number) => {
    const token = localStorage.getItem('token');
    try {
        await axios.delete('/api/listing', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            params: {
                id: listingId
            }
        });
    } catch (error) {
        throw new Error('Failed to delete listing');
    }
};