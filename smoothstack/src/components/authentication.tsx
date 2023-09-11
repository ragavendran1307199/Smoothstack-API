import { useState } from 'react'
import { Button } from "react-bootstrap"
import { loginAPi } from "../utils/api"
import { useNavigate } from 'react-router-dom';

// interface LoginProps {
//     flag: boolean;
//     setFlag: React.Dispatch<React.SetStateAction<boolean>>;
// : React.FC<LoginProps>
// }

const Authentication = () => {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        "email": "", "password": ""
    })
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCred((prevCred) => ({
            ...prevCred,
            [name]: value
        }));
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const token_flag = await loginAPi({ email: cred.email, password: cred.password });
            // console.log(token_flag);
            if (token_flag) {
                // console.log('/')
                navigate('/');
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <form className="mb-3 sm-1 container" style={{ marginTop: "20%" }} onSubmit={handleSubmit}>
                <h3>Login Page</h3>
                <label className="form-label" htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" className="form-control" required onChange={handleInputChange} value={cred.email} />
                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="form-control" required onChange={handleInputChange} value={cred.password} />
                <Button type="submit" style={{ marginTop: "20px" }}>Submit</Button>
            </form>
        </div>
    )
}

export default Authentication
