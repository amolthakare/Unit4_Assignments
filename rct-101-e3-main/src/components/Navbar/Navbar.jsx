import React from 'react';
import { useContext } from 'react';
import {Link, useNavigate} from "react-router-dom";
// import { AuthContext } from '../../context/AuthContext';
import {AuthContext} from '../../context/AuthContext';

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLoginClick=() => {

      if(isAuth) {
        logout();
        navigate("/");
      }
      else{
        navigate("/login");
      }
    }

  return (
    <div data-cy="navbar">
      Navbar
      <Link data-cy="navbar-home-link" to="">Home</Link>
      <span data-cy="navbar-cart-items-count" >count</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {/* Spacer */}
          {isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
// onClick={handleOnClick}>{isAuth ? "Logout" : "Login"}
