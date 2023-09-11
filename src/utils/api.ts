import axios from 'axios';
import qs from 'qs'
import Cookies from 'js-cookie';

export const sgptInstance = axios.create({
    baseURL: 'http://localhost:9999',
    // baseURL: 'https://jlgn3246tdskpvbgctphkuf76i0ykoau.lambda-url.us-east-1.on.aws'
});

interface loginApiProps {
    email: string,
    password: string
}

export const loginAPi = async (props: loginApiProps): Promise<boolean> => {
    const data = qs.stringify({
        email: props.email,
        password: props.password,
    });
    try {
        const response = await sgptInstance.post('/v1/login', data);
        Cookies.set('auth', response.data[0]['auth']);
        console.log('Login successful');
        return true;
    } catch (error) {
        console.error('Error during login:', error);
        return false;
    }
};

