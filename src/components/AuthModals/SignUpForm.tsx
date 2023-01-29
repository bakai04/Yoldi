import { Form, Formik } from "formik";
import React from 'react'
import { InputIcon, InputPassword, SubmitButton } from "../Inputs/Inputs";
import { signUpSchema } from "./component/utils";
import style from "./AuthModals.module.scss";
import email from "@/assets/icons/inputMail.svg";
import password from "@/assets/icons/inputPassword.svg";
import name from "@/assets/icons/inputPerson.svg";

interface ISignUp {
  name: string
  email: string,
  password: string
}

const SignUpForm = () => {
  const onSignUp = async (data: ISignUp) => {
    console.log(data);
  }

  return (
    <div className={style.auth}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validateOnMount
        validateOnChange
        validationSchema={signUpSchema}
        onSubmit={(values: ISignUp, { resetForm }) => {
          onSignUp(values);
        }}
      >
        {({ isValid }) => (
          <Form className={style.authInner}>
            <h2 className={style.authTitle}>Регистрация в Yoldi Agency</h2>
            <InputIcon icon={name} type="text" placeholder="Имя" name="name" />
            <InputIcon icon={email} type="email" name="email" placeholder="E-mail" />
            <InputPassword icon={password} type="password" name="password" placeholder="Пароль" />
            <SubmitButton isValid={isValid} title={"Создать аккаунт"} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignUpForm;