import React from "react";
import c from "./ProfileInfo.module.css";


const ProfileInfo = ({fullName, image, aboutMe}) => {
  return (<>
    <div className={c.profile_cover}>
      {/* <img src={yerevanImage} /> */}
    </div>
    <div>
      <h2>{fullName}</h2>
      <img src={image.large} alt="" />
      <p>{aboutMe}</p>
    </div>
  </>)
}

export default ProfileInfo