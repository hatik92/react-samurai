import React from 'react';
import c from './Profile.module.css';
import Posts from './Posts/Posts';
import Loader from '../../common/loader/loader';
import ProfileInfo from './PRofileInfo/ProfileInfo';
// import yerevanImage from '../../../assets/images/yerevan-header.jpg'

const Profile = (props) => {
  console.log(props);
  if(!props.userProfile) {
    return <Loader />
  }
  return <div className="main-content">
    <ProfileInfo
    fullName={props.userProfile.fullName}
    image={props.userProfile.photos}
    aboutMe={props.userProfile.aboutMe}
    />
    <Posts />
  </div>
};

export default Profile;