import { IUser } from "@/core/models/user";
import Image from "next/image";
import React from 'react'
import { EditProfile } from "../EditPhoto/EditPhoto";
import style from "./ProfilePhoto.module.scss"

interface IProps {
  isOwner: boolean;
  userData?: IUser;
}

const ProfilePhoto = ({ isOwner, userData }: IProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperInner}>
        {
          userData?.image ?
            <Image src={userData.image?.url} className={style.profileImg} width={100} height={100} alt="profile" /> :
            <div className={style.profileDefault}>{userData ? userData.name[0] : ""}</div>
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