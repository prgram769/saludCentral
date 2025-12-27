"use client";

import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { MainPage } from "@/components/ui/main";
import { createContext } from "react";

export default function Home() {
  // const ThemeContext = createContext("light");

  return (
    <>
      {" "}
      <div className="mainDiv min-h-[95.6vh] items-center justify-center font-sans bg-white">
        <div className="flex justify-center items-center bg-[#87AECE]">
          <Header />
        </div>
        <MainPage />
      </div>
      <Footer />
    </>
  );
}
