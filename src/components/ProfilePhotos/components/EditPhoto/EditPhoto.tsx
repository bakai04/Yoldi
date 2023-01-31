import React, { ChangeEvent, useState } from 'react'
import style from "./EditPhoto.module.scss";
import install from "@/assets/icons/profileIcons/install-icon.svg";
import cart from "@/assets/icons/profileIcons/cart-icon.svg";
import galery from "@/assets/icons/profileIcons/galery-icon.svg";
import Image from "next/image";
import EditPhoto from "@/assets/icons/profileIcons/edit-photo.svg";
import { crud } from "@/core/api/crud";
import useSWR from "swr";
import { getUserData } from "../../../../core/api/getUserData";
import { useSWRConfig } from "swr";
import { editUserProfile } from "@/core/api/editUserProfile";
import { IUser } from "../../../../core/models/user";

interface IFormData {
  file: File
}

const editImage = async (formData: any, mutate: any, userData: IUser | undefined, key: string) => {
  const response = await crud.post("image", formData);
  mutate("userData", editUserProfile({
    [key]: response.id,
    name: userData?.name,
    email: userData?.email,
    slug: userData?.slug,
  }));
}



export const EditCover = () => {
  const { data: userData } = useSWR("/profile", getUserData);
  const { mutate: mutate } = useSWRConfig();

  const onChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append("file", e.target.files![0]!);
    editImage(formData, mutate, userData, "coverId");
    e.target.value = "";
  }

  const onDeleteCover = () => {
    mutate("userData", editUserProfile({
      coverId: null,
      name: userData?.name,
      email: userData?.email,
      slug: userData?.slug,
    }));
  }

  if (userData?.cover)
    return (
      <div className={style.wrapper}>
        <button className={style.installButton} onClick={onDeleteCover}>
          <Image src={cart} width={17} height={18} alt="install" />
          <span>Удалить</span>
          <Image src={galery} width={22} height={17} alt="galery" />
        </button>
      </div>
    )
  return (
    <div className={style.wrapper}>
      <input type="file" className={style.editCoverInput} onChange={(onChangeFileInput)} />
      <button className={style.installButton}>
        <Image src={install} width={14} height={19} alt="install" />
        <span>Загрузить</span>
        <Image src={galery} width={22} height={17} alt="galery" />
      </button>
    </div>
  )
}

export const EditProfile = () => {
  const { data: userData } = useSWR("/profile", getUserData);
  const { mutate: mutate } = useSWRConfig();

  const onChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append("file", e.target.files![0]!);
    editImage(formData, mutate, userData, "imageId");
    e.target.value = "";
  }

  return (
    <div className={style.wrapperProfile}>
      <input type="file" className={style.editCoverInput} onChange={(onChangeFileInput)} />
      <Image src={EditPhoto} width={40} height={32} alt="install" />
    </div>
  )
}
