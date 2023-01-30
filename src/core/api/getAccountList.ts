import { IUser } from "../models/user";
import { Fetcher } from 'swr'

const getAccountList : Fetcher<IUser[], string> = async () => {
  return await fetch(`https://frontend-test-api.yoldi.agency/api/user/`)
    .then(( res) => res.json())
    .catch(e => { throw e});
}

export default getAccountList;