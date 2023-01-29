import React from 'react'
import style from "./ProfilePhotos.module.scss";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import CoverPhoto from "./components/BackgroundPhoto/CoverPhoto";

interface IProfilePhotos {
  isOwner: boolean;
  coverPhoto?: string;
  profilePhoto?: string;
}

const ProfilePhotos = ({ isOwner, coverPhoto, profilePhoto }: IProfilePhotos) => {
  return (
    <div className={style.wrapper}>
      <CoverPhoto isOwner={isOwner} coverPhoto={coverPhoto} />
      <div className="container">
        <div className={style.userPhoto}>
          <ProfilePhoto isOwner={isOwner} profilePhoto={profilePhoto}/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePhotos;