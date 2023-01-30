import { SubmitButton } from "@/components/Inputs/Inputs";
import { ErrorMessage, Field, Form } from "formik";
import React from 'react'
import style from "./EditProfileForm.module.scss"

interface IEditFormProps {
  isValid: boolean
  resetForm: () => void
  toggleEditModal: () => void
}

const EditProfileForm = ({ isValid, resetForm, toggleEditModal }: IEditFormProps) => {

  const onResetForm = () =>{
    resetForm();
    toggleEditModal();
  }
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
        <Field name="email" type="email" className={style.editFormInput} />
        <ErrorMessage className={style.errorMassage} name="email" component={"p"} />
      </div>
      <div>
        <p className={style.editInputTitle}>Описание</p>
        <Field as="textarea" name="slug" className={style.editFormSlug} />
        <ErrorMessage className={style.errorMassage} name="slug" component={"p"} />
      </div>
      <div className={style.editFormButtons}>
        <button className={style.editFormReset} onClick={onResetForm}>Отменa</button>
        <button className={style.editFormSubmit} disabled={!isValid}>Сохранить</button>
      </div>
    </Form>
  )
}

export default EditProfileForm;