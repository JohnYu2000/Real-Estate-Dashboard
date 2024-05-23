import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.tsx';

interface ProtectedRouteProps {
    element: React.ReactNode;
    path: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, path }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <>{element}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;