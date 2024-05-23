import { useNavigate } from 'react-router-dom';

const useHandleNavigation= () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return handleNavigation;
};

export default useHandleNavigation;