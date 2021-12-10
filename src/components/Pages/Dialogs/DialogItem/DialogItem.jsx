import React from 'react';
import c from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
  
  let path = "/messages/" + props.id;

  return (
    <div className={c.dialog}>
      <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
    </div>
  )
};


export default DialogItem;