import ProfilePhotos from "@/components/ProfilePhotos/ProfilePhotos";
import React from 'react'
import style from "./owner.module.scss";
import pen from "@/assets/icons/profileIcons/pen.svg";
import Image from "next/image";
import logout from "@/assets/icons/profileIcons/logout-icon.svg";

function Owner() {
  return (
    <div className={style.owner}>
      <ProfilePhotos isOwner={true} />
      <div className="container">
        <div className={style.ownerInner}>
          <div className={style.ownerInform}>
            <h2 className={style.ownerName}>Владислав</h2>
            <p className={style.ownerEmail}>example@gmail.com</p>
          </div>
          <button className={style.ownerButton}>
            <Image src={pen} width={18} height={18} alt="edit" />
            Редактировать
          </button>
        </div>
        <p className={style.ownerDescription}>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.</p>
        <button className={style.ownerButton}>
          <Image src={logout} width={19} height={19} alt="logout" />
          Выйти
        </button>
      </div>
    </div>
  )
}

export default Owner;