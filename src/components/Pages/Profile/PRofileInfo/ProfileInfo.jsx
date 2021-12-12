import React, { useState } from "react";
import c from "./ProfileInfo.module.css";
import avatar from '../../../../assets/images/avatar7.png'

const ProfileInfo = ({fullName, image, aboutMe, isOwner, status}) => {
  const [updateStatus, setUpdateStatus] = useState(false)
  const UpdateStatus = () => {
    setUpdateStatus(true)
  }
  const DeUpdateStatus = () => {
    setUpdateStatus(false)
  }
  return (<>
    <div className={c.profile_cover}>
      {/* <img src={yerevanImage} /> */}
    </div>
    <div>
      <h2>{fullName}</h2>
      <img src={image.large ? image.large : avatar} alt="" /><hr/>
      {!updateStatus
      && <h4 onDoubleClick={UpdateStatus}>{status || "------"}</h4>}
      {updateStatus
      && <input value={status} autoFocus={true} onBlur={DeUpdateStatus} />}
      {isOwner && <input type='file' />}
      <p>{aboutMe}</p>
    </div>
  </>)
}

export default ProfileInfo