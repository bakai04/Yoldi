import ProfilePhotos from "@/components/ProfilePhotos/ProfilePhotos";
import Image from "next/image";
import React from 'react'
import style from "./user.module.scss"

const UserProfile = () => {
  return (
    <div className={style.userProfile}>
      <ProfilePhotos isOwner={false} />
      <div className="container">
        <h2 className={style.userProfileName}>Владислав</h2>
        <p className={style.userProfileEmail}>example@gmail.com</p>
        <p className={style.userProfileDescription}>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.</p>
      </div>
    </div >
  )
}

export default UserProfile;