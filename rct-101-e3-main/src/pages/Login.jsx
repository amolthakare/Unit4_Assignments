import React, {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [loginCreds, setLoginCreds] = useState({});
    const { login } = useContext (AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginCreds({
            ...loginCreds,
            [name]:value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }

  return (
    <div>
      Login
      <form>
        <input data-cy="login-email" name='email' type="text" placeholder="Enter email" onChange={handleChange}/>
        <input data-cy="login-password" type="password" placeholder="Enter Password..."  onChange={handleChange}/>
        <button data-cy="login-submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
