import { useState } from 'react'
import axios from '../../../hooks/axiosConfig.tsx';

interface LoginResponse {
    Status: string;
    Message: string;
    Token?: string;
}

interface ErrorResponse {
    Message: string;
}

const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorResponse | null>(null);

    const login = async (email: string, password: string): Promise<LoginResponse> => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post<LoginResponse>('/api/auth/login', { email, password });
            setLoading(false);
            return response.data;
        } catch (err: any) {
            setLoading(false);
            const errorResponse: ErrorResponse = err.response ? err.response.data : { Message: "An unknown error occurred" };
            setError(errorResponse);
            throw errorResponse;
        }
    };

    return {
        login,
        loading,
        error
    }
}

export default useAuth;