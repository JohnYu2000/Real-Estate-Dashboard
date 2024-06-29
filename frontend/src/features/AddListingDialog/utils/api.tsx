import axios from './../../../hooks/axiosConfig.tsx'

export const addListing = async (listingData: any) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post('/api/listing', listingData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to add listing');
    }
};