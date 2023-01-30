import * as Yup from "yup";
export const editSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  email: Yup.string()
  .required("Обязательное поле")
  .email("Введите правильный адрес"),
  slug: Yup.string().required("Обязательное поле")
})