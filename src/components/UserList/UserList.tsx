import { IUser } from "@/models/user"
import React from 'react';
import UserCard from "../UserCard/UserCard";
import style from "./UserList.module.scss";


const userList: IUser[] = [
  {
    name: "sdfsf",
    email: "vl@mail.com",
    slug: "vl--mail.com",
    image: null,
    cover: null
  },
  {
    name: "sdfsf",
    email: "vl@mail.com",
    slug: "vl--mail.com",
    image: null,
    cover: null
  }, {
    name: "sdfsf",
    email: "vl@mail.com",
    slug: "vl--mail.com",
    image: null,
    cover: null
  }, {
    name: "sdfsf",
    email: "vl@mail.com",
    slug: "vl--mail.com",
    image: null,
    cover: null
  }, {
    name: "sdfsf",
    email: "vl@mail.com",
    slug: "vl--mail.com",
    image: null,
    cover: null
  }, {
    name: "sdfsf",
    email: "vl@mail.com",
    slug: "vl--mail.com",
    image: null,
    cover: null
  }, {
    name: "sdfsf",
    email: "vl@mail.com",
    slug: "vl--mail.com",
    image: null,
    cover: null
  },
]

const UserList = () => {
  return (
    <div className={style.userList}>
      <div className="container">
        <h2 className={style.userListTitle}>Список аккаунтов</h2>
        {
          userList.map(elem => (
            <UserCard key={elem.slug} userData={elem}/>
          ))
        }
      </div>
    </div>
  )
}

export default UserList