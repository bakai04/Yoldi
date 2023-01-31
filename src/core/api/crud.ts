export async function patch<T>( body :T) {
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



 async function get(url:string) {
  const { token } = JSON.parse(localStorage.getItem("userData") || "");
  return await fetch(`https://frontend-test-api.yoldi.agency/api${url}`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token || "",
    },
  }).then((res:any) => res.json()).catch(e=>{ throw e});
}


 async function post<T>(url:string, body:T) {
  console.log("asd", body);
  const { token } = JSON.parse(localStorage.getItem("userData") || "");
  return await fetch(`https://frontend-test-api.yoldi.agency/api/image`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "X-API-KEY": token || "",
    },
    body: body,
  }).then((res:any) => res.json()).catch(e=>{ throw e});
}


export const crud = { post, get, patch }