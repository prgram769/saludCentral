"use client";

import { Header } from "@/components/ui/header";
import { createContext } from "react";

export default function Home() {
  // const ThemeContext = createContext("light");

  return (
    <div className="mainDiv min-h-screen items-center justify-center font-sans bg-white">
      <div className="flex justify-center items-center min-w-screen bg-[#87AECE]">
        <Header/>
      </div>
    </div>
  );
}
