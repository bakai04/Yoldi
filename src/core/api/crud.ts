import { Fetcher } from "swr";
import { IUser } from "../models/user";

export async function patch<T>( body :T) {
  const token = localStorage.getItem("token") || "";
  return await fetch(`https://frontend-test-api.yoldi.agency/api/profile/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token || "",
    },
    body: JSON.stringify(body),
  }).then((res:any) => res.json()).catch(e=>{ throw e});
}



  const get:Fetcher<IUser, string> = async (url:string) => {
  const token = localStorage.getItem("token") || "";
  return await fetch(`https://frontend-test-api.yoldi.agency/api${url}`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token || "",
    },
  }).then((res) => res.json()).catch(e=>{ throw e});
}


 async function post<T>(url:string, body:T) {
  const token = localStorage.getItem("token") || "";
  return await fetch(`https://frontend-test-api.yoldi.agency/api/${url}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "X-API-KEY": token || "",
    },
    body: body,
  }).then((res:any) => res.json()).catch(e=>{ throw e});
}


export const crud = { post, get, patch }