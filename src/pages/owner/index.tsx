import ProfilePhotos from "@/components/ProfilePhotos/ProfilePhotos";
import React, { useState } from 'react'
import style from "./owner.module.scss";
import pen from "@/assets/icons/profileIcons/pen.svg";
import Image from "next/image";
import logout from "@/assets/icons/profileIcons/logout-icon.svg";
import EditProfile from "@/components/EditProfile/EditProfile";
import useSWR from "swr";
import getUserData from "@/core/api/getUserData";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Owner() {
  const [isEdit, setIsEdit] = useState(false);
  const { data: userData, mutate } = useSWR("userData", getUserData);
  const router = useRouter();

  const toggleEditModal = () => {
    setIsEdit(prev => !prev)
  }

  useEffect(()=>{
    const { email } = JSON.parse(localStorage.getItem("userData") || "");
    const slug = email.replace(/@/g, "--");
    mutate(slug);
  },[])

  const onLogout = () => {
    localStorage.clear();
    router.push("/sign-in")
  }

  return (
    <div className={style.owner}>
      <ProfilePhotos isOwner={true} userData={userData}/>
      <div className="container">
        <div className={style.ownerInner}>
          <div className={style.ownerInform}>
            <h2 className={style.ownerName}>{userData?.name}</h2>
            <a href="mailto:example@gmail.com" className={style.ownerEmail}>{userData?.email}</a>
          </div>
          <button className={style.ownerButton} onClick={toggleEditModal}>
            <Image src={pen} width={18} height={18} alt="edit" />
            Редактировать
          </button>
        </div>
        <p className={style.ownerDescription}>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.</p>
        <button className={style.ownerButton} onClick={onLogout}>
          <Image src={logout} width={19} height={19} alt="logout" />
          Выйти
        </button>
      </div>
      {
        isEdit && <EditProfile userData={userData} toggleEditModal={toggleEditModal}/>
      }
    </div>
  )
}

export default Owner;