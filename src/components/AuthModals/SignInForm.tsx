import { Form, Formik } from "formik";
import React from 'react'
import { InputPassword, SubmitButton, InputIcon } from "../Inputs/Inputs";
import style from "./AuthModals.module.scss";
import email from "@/assets/icons/inputMail.svg";
import password from "@/assets/icons/inputPassword.svg";
import { signInSchema } from "./component/utils";
import useSWRMutation from "swr/mutation";
import onGetToken from "@/core/api/onGetToken";
import { useRouter } from "next/router";
import { getUserData } from "../../core/api/getUserData";


interface ISignIn {
  email: string,
  password: string
}

const SignInForm = () => {
  const { trigger: authTrigger } = useSWRMutation("/auth/login/", onGetToken);
  const { trigger: userDataTrigger } = useSWRMutation("/profile", getUserData) 
  const router = useRouter()

  const onSignIn = async (data: ISignIn) => {
    const { value } = await authTrigger(data);
    if (value)
      localStorage.setItem("token", value);
    router.push("/");
    userDataTrigger()
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