import React, { useEffect, useState } from "react";
import c from "./ProfileInfo.module.css";
import avatar from '../../../../assets/images/avatar7.png'

const ProfileInfo = ({ fullName, image, aboutMe, profileStatus, isOwner, updateStatus, uploadImage }) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(profileStatus);
  
  useEffect(() => {
    setStatus(profileStatus);
  }, [profileStatus]);
  const editStatus = () => {
    updateStatus(status)
    setEditMode(false)
  }
  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value)
  }
  const updateMyPhoto = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      uploadImage(img)
    }
  };
  return (<>
    <div className={c.profile_cover}>
      {/* <img src={yerevanImage} /> */}
    </div>
    <div>
      <h2>{fullName}</h2>
      <img src={image.large ? image.large : avatar} alt="" /><hr />
      {!editMode
        ? <h4 onDoubleClick={() => setEditMode(true)}>{status || "------"}</h4>
        : <input onChange={onChangeStatus} value={status} autoFocus={true} onBlur={editStatus} />}
      {isOwner && <input type='file' onChange={updateMyPhoto} />}
      <p>{aboutMe}</p>
    </div>
  </>)
}

export default ProfileInfo