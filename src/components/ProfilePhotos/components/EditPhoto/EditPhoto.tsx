import React from 'react'
import style from "./EditPhoto.module.scss";
import install from "@/assets/icons/profileIcons/install-icon.svg";
import cart from "@/assets/icons/profileIcons/cart-icon.svg";
import galery from "@/assets/icons/profileIcons/galery-icon.svg";
import Image from "next/image";
import EditPhoto from "@/assets/icons/profileIcons/edit-photo.svg";

interface IProps {
  isEmpty: boolean,
}

export const EditCover = ({ isEmpty }: IProps) => {
  if (isEmpty)
    return (
      <div className={style.wrapper}>
        <input type="file" className={style.editCoverInput} />
        <button className={style.installButton}>
          <Image src={install} width={14} height={19} alt="install" />
          <span>Загрузить</span>
          <Image src={galery} width={22} height={17} alt="galery" />
        </button>
      </div>
    )

  return (
    <div className={style.wrapper}>
      <button className={style.installButton}>
        <Image src={cart} width={17} height={18} alt="install" />
        <span>Удалить</span>
        <Image src={galery} width={22} height={17} alt="galery" />
      </button>
    </div>
  )
}

export const EditProfile = () => {
  return (
    <div className={style.wrapperProfile}>
      <input type="file" className={style.editCoverInput} />
      <Image src={EditPhoto} width={40} height={32} alt="install" />
    </div>
  )
}
