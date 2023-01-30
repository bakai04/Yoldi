import { IUser } from "../models/user";
import { Fetcher } from 'swr'

export const getUserData : Fetcher<IUser, string> = async (url) => {
  const { email } = JSON.parse(localStorage.getItem("userData") || "");
  const slug = email.replace(/@/g, "--");
  return await fetch(`https://frontend-test-api.yoldi.agency/api/user/${slug}`)
    .then(( res) => res.json())
    .catch(e => { throw e});
}


export const getUserBySlag : Fetcher<IUser, string> = async (slug) => {
  return await fetch(`https://frontend-test-api.yoldi.agency/api/user/${slug}`)
    .then(( res) => res.json())
    .catch(e => { throw e});
}
