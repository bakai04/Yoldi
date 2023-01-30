import ProfilePhotos from "@/components/ProfilePhotos/ProfilePhotos";
import React from 'react'
import style from "./user.module.scss"
import { getUserData } from "@/core/api/getUserData";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query
  const { data: userData, mutate } = useSWR(id, getUserData);

  return (
    <div className={style.userProfile}>
      <ProfilePhotos isOwner={false} />
      <div className="container">
        <h2 className={style.userProfileName}>{userData?.name}</h2>
        <a href="mailto:example@gmail.com" className={style.userProfileEmail}>{userData?.email}</a>
        <p className={style.userProfileDescription}>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.</p>
      </div>
    </div >
  )
}

export default UserProfile;