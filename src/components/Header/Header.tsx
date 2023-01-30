import React, { useState } from 'react'
import Logo from "@/assets/icons/logo-wrapper.svg";
import style from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { getUserData } from "../../core/api/getUserData";
import { useEffect } from "react";

const Header = () => {
  const [userAuth, setUserAuth] = useState(false);
  const { data: userData } = useSWR("userData", getUserData);

  useEffect(() => {
    const isAuthUser = !!localStorage.getItem("userData");
    setUserAuth(isAuthUser);
  }, [])

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link href={"/"}>
            <Image src={Logo} width={80} height={50} alt="logo" />
          </Link>
          <p className={style.headerInform}>
            Разрабатываем и запускаем сложные веб проекты
          </p>
        </div>
        {
          userAuth ?
            <div className={style.headerUser}>
              <p className={style.headerUserName}>{userData?.name}</p>
              <Link href={"/owner"} className={style.headerUserPhoto}>
                {userData?.image &&
                  <Image
                    alt="photo"
                    src={userData?.image?.url || ""}
                    width={userData?.image ? +userData.image.width : 0}
                    height={userData?.image ? +userData.image.height : 0} />
                }
                {userData?.name[0]}
              </Link>
            </div> :
            <Link href={"/sign-in"}>
              <button className={style.headerSignIn}>
                Войти
              </button>
            </Link>
        }
      </div>
    </header>
  )
}

export default Header