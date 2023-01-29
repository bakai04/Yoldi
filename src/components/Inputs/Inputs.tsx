import { ErrorMessage, Field, Formik } from "formik";
import React, { useState } from 'react'
import style from "./Inputs.module.scss";
import Image from "next/image";
import visiblePassword from "@/assets/icons/visiblePassword.svg";

interface IInputIcon {
  icon: string
  type: string
  name: string
  placeholder: string
}

export const InputIcon = ({ icon, type, name, placeholder }: IInputIcon) => {
  return (
    <div className={style.wrapper}>
      <Field className={style.wrapperInput} name={name} type={type} placeholder={placeholder} />
      <Image src={icon} alt="icon" className={style.wrapperSvg} width={20} height={20} />
      <ErrorMessage className={style.errorMassage} name={name} component={"p"}></ErrorMessage>
    </div>
  )
}

export const InputPassword = ({ icon, type, name, placeholder }: IInputIcon) => {
  const [isVisible, setIsVisible] = useState(false);

  const changeInputType = () => {
    setIsVisible(prev => !prev);
  }

  return (
    <div className={style.wrapper}>
      <Field className={style.wrapperInput} name={name} type={isVisible ? "text" : type} placeholder={placeholder} />
      <Image src={icon} alt="icon" className={style.wrapperSvg} width={20} height={20} />
      <Image
        onClick={changeInputType}
        src={visiblePassword}
        className={style.password}
        width={23}
        height={12}
        alt="password" />
      <ErrorMessage name={name} className={style.errorMassage} component={"p"}></ErrorMessage>
    </div>
  )
}

interface ISubmitButton {
  title: string
  isValid: boolean
}

export const SubmitButton = ({ title, isValid }: ISubmitButton) => {
  return (
    <div className={style.wrapper}>
      <button className={style.button} type="submit" disabled={!isValid} >{title}</button>
    </div>
  )
}
