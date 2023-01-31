import { IUser } from "../models/user";
import { Fetcher } from 'swr'

export const getUserData : Fetcher<IUser, string> = async (url) => {
  const token = localStorage.getItem("token") || "";
  return await fetch(`https://frontend-test-api.yoldi.agency/api${url}`,{
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token || "",
    },
  })
    .then((res) => res.json())
    .catch(e => { throw e});
}

