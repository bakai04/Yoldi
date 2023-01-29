import Image from "next/image";
import React from 'react'
import { EditProfile } from "../EditPhoto/EditPhoto";
import style from "./ProfilePhoto.module.scss"

interface IProps {
  isOwner: boolean;
  profilePhoto?: string;
}

const ProfilePhoto = ({ isOwner, profilePhoto }: IProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperInner}>
        {
          profilePhoto ?
            <Image src={profilePhoto} width={100} height={100} alt="profile" /> :
            <div className={style.profileDefault}>B</div>
        }
        {
          isOwner &&
          <div className={style.profilePhotoBtn}>
            <EditProfile />
          </div>
        }
      </div>
    </div>
  )
}

export default ProfilePhoto