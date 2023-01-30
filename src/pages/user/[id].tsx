import ProfilePhotos from "@/components/ProfilePhotos/ProfilePhotos";
import React from 'react'
import style from "./user.module.scss"
import { getUserBySlag } from "@/core/api/getUserData";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query
  const { data: userData } = useSWR(id, getUserBySlag);

  return (
    <div className={style.userProfile}>
      <ProfilePhotos isOwner={false}  userData={userData}/>
      <div className="container">
        <h2 className={style.userProfileName}>{userData?.name}</h2>
        <a href="mailto:example@gmail.com" className={style.userProfileEmail}>{userData?.email}</a>
        <p className={style.userProfileDescription}>{ userData?.description }</p>
      </div>
    </div >
  )
}

export default UserProfile;