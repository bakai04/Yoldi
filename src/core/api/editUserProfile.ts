import { Fetcher } from "swr";
import { IUser } from "../models/user";


export async function editUserProfile<T>( body :T) {
  const { token } = JSON.parse(localStorage.getItem("userData") || "");
  return await fetch(`https://frontend-test-api.yoldi.agency/api/profile/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token || "",
    },
    body: JSON.stringify(body),
  }).then((res:any) => res.json()).catch(e=>{ throw e});
}
