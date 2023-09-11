import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { JwtHelper } from './checkToken';

const ProtectedRoutes = () => {
    const auth = { 'token': Cookies.get('auth') }
    const objJwtHelper = new JwtHelper()
    const jwt_string = objJwtHelper.decodeToken(auth['token'])
    interface JwtPayload {
        email: string;
        provider: number;
        exp: number;
        role: string
    }
    function isExpired (jwt_string: JwtPayload) {
        console.log(jwt_string)
        const currentEpochTime = Math.floor(new Date().getTime() / 1000);
        console.log(currentEpochTime); // This will log the current epoch time in seconds
        if (jwt_string['exp'] < currentEpochTime){
            console.log("token expired")
            return null
        }
        return true
    }    
    return (
        isExpired(jwt_string) ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoutes;
