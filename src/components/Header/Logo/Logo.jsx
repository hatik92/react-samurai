import React from 'react';
import c from './Logo.module.css';


const Logo = (props) => {
  return <img src={props.logo} className={c.logo_img} alt="LOGO" />
};

export default Logo;