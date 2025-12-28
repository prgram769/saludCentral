"use client";

import { Alimentacion } from "@/components/ui/alimentacion";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { MainPage } from "@/components/ui/main";
import { createContext, useState } from "react";

export default function Home() {
  // const ThemeContext = createContext("light");

  const [isAlimentation, setAlimentation] = useState(false);

  return (
    <>
      {" "}
      {isAlimentation ? (
        <Alimentacion />
      ) : (
        <>
          <div className="mainDiv min-h-[95.6vh] items-center justify-center font-sans bg-white">
            <div className="flex justify-center items-center bg-[#87AECE]">
              <Header />
            </div>
            <MainPage isAlimentation={isAlimentation} setAlimentation={setAlimentation}/>
          </div>
          <Footer />
        </>
      )}{" "}
    </>
  );
}
