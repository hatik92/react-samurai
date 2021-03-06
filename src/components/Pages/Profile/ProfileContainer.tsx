import React, { useEffect } from 'react';
import { getUserProfile, getStatus, updateStatus, setStatus, uploadImage } from '../../../Redux/profile-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStoreType } from '../../../Redux/redux-store';
import { getStatusSelector, getUserId, getUserProfileSel } from '../../../selecters/profile-selecters';
import { UsersItem } from '../../../tsTypes/myTypes';

type MapState = {
  userProfile: Array<UsersItem>
  userId: number
  status: string
}
type MapDispatch = {
  getUserProfile: (id:number) => void
  getStatus: (id:number) => void
  updateStatus: (status:string) => void
  setStatus: (status:string) => void
  uploadImage: (file:any) => void
}
type OwnProps = {
  match:any
}
type PropsType = MapState & MapDispatch & OwnProps
const ProfileContainer: React.FC<PropsType> = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId
    if(!userId) {
      userId = props.userId
    }
    props.getUserProfile(userId)
    props.getStatus(userId)
  }, [props.match.params.userId])

  return <Profile {...props} isOwner={!props.match.params.userId} />
}
let mapStateToProps = (state:AppStoreType) => {
  return {
    userProfile: getUserProfileSel(state),
    userId: getUserId(state),
    status: getStatusSelector(state)
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, setStatus, uploadImage}),
  withAuthRedirect,
  withRouter
)(ProfileContainer)