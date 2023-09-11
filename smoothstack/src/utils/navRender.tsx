import React, {useState, useEffect} from 'react';
import { Navbar } from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { JwtHelper } from './checkToken';

interface WithNavbarProps {
    adminBool: boolean;
}

const withNavbar = <P extends object>(
    WrappedComponent: React.ComponentType<P>
): React.FC<P & WithNavbarProps> => {
    return (props) => {
        const navigate = useNavigate();
        const [adminBool, setAdminBool] = useState(false)
        const isAuthenticated = Cookies.get('auth'); // Check user's authorization status
        const objJwtHelper = new JwtHelper()
        // If the user is not authorized, navigate to the login page
        useEffect(() => {
            if (isAuthenticated) {
                const jwt_string = objJwtHelper.decodeToken(isAuthenticated);
                if (jwt_string.role === 'ADMINISTRATOR') {
                    setAdminBool(true);
                }
            } else {
                navigate('/login');
            }
        }, [isAuthenticated]);

        // If the user is authorized, render the wrapped component with the navbar
        return (
            <>
                <Navbar adminBool={adminBool} />
                <WrappedComponent {...props} />
            </>
        );
    };
};

export default withNavbar;
