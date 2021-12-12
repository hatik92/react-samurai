import React from 'react';
import c from './Users.module.css';
import avatar from '../../../assets/images/avatar7.png'
import { NavLink } from 'react-router-dom';
import { Pagination } from '@mui/material';

const Users = (props) => {
  const handleChange = (e,value) => {
    console.log(e, value);
    props.onPageChanged(value)
  }
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return <div>
  <Pagination count={pagesCount} defaultPage={props.currentPage} onChange={handleChange} />

  <div className={c.list_wrapper} ng-app="app" ng-controller="MainCtrl as ctrl">
      <ul className={c.list}>
        {props.users.map((el, i) =>
          <li className={c.list_item} key={i}>
            <div className={c.img_block}>
              <NavLink to={'/profile/' + el.id}>
                <img src={el.photos.small ? el.photos.small : avatar} className={c.list_item_image} alt="" />
              </NavLink>
            </div>
            <div className={c.list_item_content}>
              <h4>{el.name}</h4>
              <p>{el.status}</p>
            </div>
            <div className={c.about_block}>
              {/* <h4>Country: {el.location.country}</h4> */}
              {/* <h4>City: {el.location.city}</h4> */}
            </div>
            <div className={c.btn_block}>
              {el.followed
                ? <button onClick={() => {
                  props.unfollow(el.id)
                }}
                  disabled={props.followingInProgress.some(id => id === el.id)}
                >Unfollow</button>
                : <button onClick={() => {
                  props.follow(el.id)
                }}
                disabled={props.followingInProgress.some(id => id === el.id)}
                >Follow</button>}
            </div>
          </li>
        )}
      </ul>
    </div>
    <Pagination count={pagesCount} defaultPage={props.currentPage} onChange={handleChange} />

  </div>

}

export default Users;