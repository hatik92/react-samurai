import React from 'react';
import c from './Profile.module.css';
import Posts from './Posts/Posts';
import Loader from '../../common/loader/loader';
import ProfileInfo from './PRofileInfo/ProfileInfo';
// import yerevanImage from '../../../assets/images/yerevan-header.jpg'

const Profile = (props) => {
  if(!props.userProfile) {
    return <Loader />
  }
  return <div className="main-content">
    <ProfileInfo
    fullName={props.userProfile.fullName}
    userId={props.userProfile.userId}
    image={props.userProfile.photos}
    aboutMe={props.userProfile.aboutMe}
    isOwner={props.isOwner}
    profileStatus={props.status}
    updateStatus={props.updateStatus}
    setStatus={props.setStatus}
    uploadImage={props.uploadImage}
    />
    <Posts />
  </div>
};

export default Profile;