import Header from "@/components/Header/Header";
import { ErrorMessage, Field, Form } from "formik";
import React from 'react'
import style from "./EditProfileForm.module.scss"
import { useEffect } from "react";

interface IEditFormProps {
  isValid: boolean
  resetForm: () => void
  toggleEditModal: () => void
}

const EditProfileForm = ({ isValid, resetForm, toggleEditModal }: IEditFormProps) => {
  const onResetForm = () => {
    resetForm();
    toggleEditModal();
  }

  useEffect(()=>{
    location.hostname
  },[]) 
  return (
    <Form className={style.editForm}>
      <h2 className={style.editFormTitle}>Редактировать профиль</h2>
      <div>
        <p className={style.editInputTitle}>Имя</p>
        <Field name="name" type="text" className={style.editFormInput} />
        <ErrorMessage className={style.errorMassage} name="name" component={"p"} />
      </div>
      <div>
        <p className={style.editInputTitle}>Адрес профиля</p>
        <div className={style.editFormEmail}>
          <p>{location.hostname}/profile/</p>
          <Field name="slug" type="text" className={style.editEmailInput} />
        </div>
        <ErrorMessage className={style.errorMassage} name="email" component={"p"} />
      </div>
      <div>
        <p className={style.editInputTitle}>Описание</p>
        <Field as="textarea" name="description" className={style.editFormSlug} />
        <ErrorMessage className={style.errorMassage} name="description" component={"p"} />
      </div>
      <div className={style.editFormButtons}>
        <button className={style.editFormReset} type="button" onClick={onResetForm}>Отменa</button>
        <button className={style.editFormSubmit} type="submit" disabled={!isValid}>Сохранить</button>
      </div>
    </Form>
  )
}

export default EditProfileForm;