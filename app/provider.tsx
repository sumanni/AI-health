"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/contex/userDetailContext";

export type UserDetail = {
  name: string;
  email: string;
  credit: number;
};

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<any>();

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
  }, [user]);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/users", {
        email: user?.emailAddresses[0]?.emailAddress,
        name: user?.firstName + " " + user?.lastName,
      });
      console.log("This is the result data", result.data);
      setUserDetail(result.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default Provider;
