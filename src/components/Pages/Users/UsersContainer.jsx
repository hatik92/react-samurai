import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsres } from '../../../Redux/users-reducer';
import Users from './Users';
import Loader from '../../common/loader/loader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPagelector, getTotalUserCount, getUsersSelector } from '../../../selecters/users-selecters';


const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsres(props.currentPage, props.pageSize)
  }, [])
  const onPageChanged = (pageNumber) => {
    props.getUsres(pageNumber, props.pageSize)
  }
  return <>
    {props.isFetching
      ? <Loader />
      : <Users
        totalUserCount={props.totalUserCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
        onPageChanged={onPageChanged}
        followingInProgress={props.followingInProgress}
      />
    }

  </>
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPagelector(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, { follow, unfollow, getUsres }),
  withAuthRedirect
)(UsersContainer);