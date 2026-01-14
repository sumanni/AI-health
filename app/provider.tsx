'use client'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';
const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const{user} = useUser()


    useEffect(()=>{
        CreateNewUser()

    },[user])

    const  CreateNewUser =async ()=>{
        const result = await axios.post("/api/users");
        console.log("This iis the result data",result.data)

    }
  return <div>{children}</div>;
};

export default Provider