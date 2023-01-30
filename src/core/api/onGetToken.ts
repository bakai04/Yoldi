import axios from "axios"

interface ISignUpArg {
  arg: {
    name?: string
    password: string
    email: string
  }
}

const onGetToken = async (url:string, body:ISignUpArg) => {
  return await fetch(`https://frontend-test-api.yoldi.agency/api${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(body.arg),
  }).then((res:any) => res.json()).catch(e=>{ throw e});
}

export default onGetToken;