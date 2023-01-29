import { Form, Formik } from "formik";
import React from 'react'
import { InputPassword, SubmitButton, InputIcon } from "../Inputs/Inputs";
import style from "./AuthModals.module.scss";
import email from "@/assets/icons/inputMail.svg";
import password from "@/assets/icons/inputPassword.svg";
import { signInSchema } from "./component/utils";

interface ISignIn {
  email: string,
  password: string
}

const SignInForm = () => {

  const onSignIn = (data: ISignIn) => {
    console.log(data);
  }

  return (
    <div className={style.auth}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnMount
        validateOnChange
        validationSchema={signInSchema }
        onSubmit={(values: ISignIn, { resetForm }) => {
          console.log(values)
          resetForm();
          onSignIn(values);
        }}
      >
        {({ isValid }) => (
          <Form className={style.authInner}>
            <h2 className={style.authTitle}>Вход в Yoldi Agency</h2>
            <InputIcon icon={email} type="email" name="email" placeholder="E-mail" />
            <InputPassword icon={password} type="password" name="password" placeholder="Пароль" />
            <SubmitButton isValid={isValid} title={"Войти"} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignInForm;