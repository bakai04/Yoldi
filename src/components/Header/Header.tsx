import React from 'react'
import Logo from "@/assets/icons/logo-wrapper.svg";
import style from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
        <Link href={"/sign-in"}>
          <button className={style.headerSignIn}>
            Войти
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header