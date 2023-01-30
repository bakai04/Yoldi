import Image from "next/image";
import React, { useState } from 'react'
import { EditCover } from "../EditPhoto/EditPhoto";
import style from "./CoverPhoto.module.scss";
import back from "@/assets/image/background.png";
import { IUser } from "@/core/models/user";

interface IProps {
  isOwner: boolean;
  userData?: IUser;
}

const CoverPhoto = ({ isOwner, userData }: IProps) => {
  const [isEmpty, setIsEmpty] = useState(!!userData?.cover);

  return (
    <div className={style.wrapper}>
      {
        userData?.cover ?
          <Image src={back} className={style.coverImage} width={0} height={0} alt="cover" /> :
          <div className={style.coverDefault}></div>
      }
      {
        isOwner &&
        <div className={style.coverPhotoBtn}>
          <EditCover isEmpty={isEmpty} />
        </div>
      }
    </div >
  )
}

export default CoverPhoto