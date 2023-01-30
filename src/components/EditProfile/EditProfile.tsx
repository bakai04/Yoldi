import { IUser } from "@/core/models/user";
import { Form, Formik, Field, ErrorMessage } from "formik";
import React from 'react'
import EditProfileForm from "./components/EditProfileForm/EditProfileForm";
import { editSchema } from "./components/validatingSchema";
import style from "./EditProfile.module.scss";


interface IEditForm {
  name: string,
  email: string,
  slug: string,
}

interface IEditProfileProps {
  toggleEditModal: () => void
  userData?: IUser
}

const EditProfile = ({ toggleEditModal, userData }: IEditProfileProps) => {
  const onEditProfile = (data: IEditForm) => {
    toggleEditModal();
  }

  return (
    <div className={style.editProfile}>
      <div className={style.editProfileBack} onClick={toggleEditModal}></div>
      <Formik
        initialValues={{
          name: userData?.name || "",
          email: userData?.email || "",
          slug: userData?.slug || "",
        }}
        validateOnMount
        validateOnChange
        validationSchema={editSchema}
        onSubmit={(values: IEditForm, { resetForm }) => {
          resetForm();
          onEditProfile(values);
        }}
      >
        {({ isValid, resetForm }) => (
          <EditProfileForm isValid={isValid} resetForm={resetForm} toggleEditModal={toggleEditModal}/>
        )}
      </Formik>
    </div>
  )
}

export default EditProfile;