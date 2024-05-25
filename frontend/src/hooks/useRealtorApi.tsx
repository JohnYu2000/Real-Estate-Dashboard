import { useState } from 'react';
import realtor from 'realtorca';

interface Options {
    CultureId?: number;
    ApplicationId?: number;
    PropertySearchTypeId?: number;
    HashCode: number;
    PriceMin?: number;
    PriceMax: number;
    LongitudeMin: number;
    LatitudeMin: number;
    LongitudeMax: number;
    LatitudeMax: number;
    TransactionTypeId?: number;
    StoreyRange: string;
    BedRange: string;
    BathRange: string;
    SortBy: string;
    SortOrder: string;
    OwnershipTypeGroupId: number;
};

interface ReturnData {
    data: any;
    loading: boolean;
    error: string | null;
    fetchData: (options: Options) => void;
}

const useRealtorApi = (): ReturnData => {
    const [data, setData] = useState<ReturnData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (options: Options) => {
        setLoading(true);
        setError(null);

        try {
            const response = await realtor.post(options);
            setData(response);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchData };
};

export default useRealtorApi;