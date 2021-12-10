import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Headers.module.css';
import Logo from './Logo/Logo';


const Headers = (props) => {
  console.log(props);
  const logout = () => {
    props.logout()
  }
  return <header className={c.header}>
    <div>
      <Logo logo={props.logo}/>
      <div className={c.auth_block}>
        {props.authInfo.isAuth
        ? <div>{props.authInfo.login} - <button onClick={logout}>Logout</button></div>
        : <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  </header>
};

export default Headers;