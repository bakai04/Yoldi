import { IUser } from "@/core/models/user"
import React from 'react';
import UserCard from "../UserCard/UserCard";
import style from "./UserList.module.scss";
import useSWR from "swr";
import getAccountList from "../../core/api/getAccountList";


const UserList = () => {
  const { data: userList } = useSWR("userList", getAccountList);
  return (
    <div className={style.userList}>
      <div className="container">
        <h2 className={style.userListTitle}>Список аккаунтов</h2>
        {
          userList?.map(elem => (
            <UserCard key={elem.slug} userData={elem} />
          ))
        }
      </div>
    </div>
  )
}

export default UserList