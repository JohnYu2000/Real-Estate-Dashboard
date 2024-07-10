import axios from './../../../hooks/axiosConfig.tsx'

export const editListing = async (id: number, listingData: any) => {
    const token = localStorage.getItem('token');
    console.log(listingData);
    try {
        const response = await axios.put('/api/listing', listingData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            params: {
                id: id
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to edit listing');
    }
};