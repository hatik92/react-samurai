import React, { useEffect } from 'react';
import { getUserProfile } from '../../../Redux/profile-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUserId, getUserProfileSel } from '../../../selecters/profile-selecters';

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId
    if(!userId) {
      userId = props.userId
    }
    props.getUserProfile(userId)
  }, [])

  return <Profile {...props}/>
}
let mapStateToProps = (state) => {
  return {
    userProfile: getUserProfileSel(state),
    userId: getUserId(state)
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withAuthRedirect,
  withRouter
)(ProfileContainer)