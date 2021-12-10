import React from 'react';
import c from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  let nav_link = props.nav_link
    .map((el, i) => <li key={i}><NavLink to={el.link} activeClassName={c.active}>{el.item}</NavLink></li>)
  return <nav className={c.nav}>
    <ul>
      {nav_link}
    </ul>
  </nav>
};

export default Nav;