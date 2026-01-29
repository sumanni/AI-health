"use client";
import React from "react";
import AppHeader from "./_components/AppHeader";
import HistoryList from "./HistoryList";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl py-10">My Dashboard</h2>
        <Button className="cursor-pointer">+ Consult with doctor</Button>
      </div>
      <HistoryList />
    </div>
  );
};

export default Dashboard;
