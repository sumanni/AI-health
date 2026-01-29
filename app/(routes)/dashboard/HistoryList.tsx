"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HistoryList = () => {
  const [history, setHistory] = useState([]);
  return (
    <div>
      {history.length == 0 ? (
        <div className="flex items-center flex-col justify-center p-7 border-3 border-dahed rounded-2xl mt-4">
          <Image src={"./logo.svg"} width={200} alt="imagex" height={200} />
          <h2 className="font-bold text-xmt-5l">No recent Consultations</h2>
          <p>It looks like you haven't consulted with any doctors yet.</p>
          <Button className="mt-4 cursor-pointer">+ Start a Consultation</Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default HistoryList;
