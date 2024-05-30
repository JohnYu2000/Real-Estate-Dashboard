import { useState, useEffect } from 'react';
import axios from './axiosConfig.tsx';

interface Listing {
    id: number;
    city: string;
    price: number;
    address: string;
    numberBeds: number;
    numberBaths: number;
    province: string;
    population: number;
    latitude: number;
    longitude: number;
    medianFamilyIncome: number;
}

interface FetchListingsParams {
    city?: string;
    minPrice?: number;
    maxPrice?: number;
    address?: string;
    minNumberBeds?: number;
    maxNumberBeds?: number;
    minNumberBaths?: number;
    maxNumberBaths?: number;
    province?: string;
    minPopulation?: number;
    maxPopulation?: number;
    minLatitude?: number;
    maxLatitude?: number;
    minLongitude?: number;
    maxLongitude?: number;
    minMedianFamilyIncome?: number;
    maxMedianFamilyIncome?: number;
    page?: number;
    pageSize?: number;
}

const useListings = (params: FetchListingsParams) => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Listing[]>('/api/listing', {
                    headers: {
                        ...params,
                    },
                });
                setListings(response.data)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, [params]);

    return { listings, loading, error };
};

export default useListings;