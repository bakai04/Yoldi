import Image from "next/image";
import React, { useState } from 'react'
import { EditCover } from "../EditPhoto/EditPhoto";
import style from "./CoverPhoto.module.scss";
import back from "@/assets/image/background.png";

interface IProps {
  isOwner: boolean;
  coverPhoto?: string;
}

const CoverPhoto = ({ isOwner, coverPhoto }: IProps) => {
  const [isEmpty, setIsEmpty] = useState(coverPhoto ? true : false);

  return (
    <div className={style.wrapper}>
      {
        coverPhoto ?
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