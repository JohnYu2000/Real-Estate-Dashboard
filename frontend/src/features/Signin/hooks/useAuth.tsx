import { useState } from 'react'
import axios from '../../../hooks/axiosConfig.tsx';
import { useAuth as useAuthContext } from '../../../contexts/AuthContext.tsx';

interface LoginResponse {
    status: string;
    message: string;
    token?: string;
    userid: string;
}

interface ErrorResponse {
    Message: string;
}

const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorResponse | null>(null);
    const {login: contextLogin } = useAuthContext();

    const login = async (email: string, password: string): Promise<LoginResponse> => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post<LoginResponse>('/api/auth/login', { email, password });
            if (response.data.token) {
                contextLogin(response.data.token, response.data.userid);
            }
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