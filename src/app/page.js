"use client";

import { Addictions } from "@/components/ui/addictions";
import { Alimentacion } from "@/components/ui/alimentacion";
import { CommonConditions } from "@/components/ui/commonConditions";
import { Footer } from "@/components/ui/footer";
import { GymRoutine } from "@/components/ui/gymRoutine";
import { Header } from "@/components/ui/header";
import { MainPage } from "@/components/ui/main";
import { createContext, useState } from "react";

export default function Home() {
  // const ThemeContext = createContext("light");

  let content;

  const [nPage, setNPage] = useState(0);

  if (nPage == 0) {
    content = (
      <>
        <div className="mainDiv min-h-[95.6vh] items-center justify-center font-sans dark:bg-[#222]">
          <div className="flex justify-center items-center bg-[#87AECE]">
            <Header />
          </div>
          <MainPage nPage={nPage} setNPage={setNPage} />
        </div>
        <Footer />
      </>
    );
  } else if (nPage == 1) {
    content = <Alimentacion nPage={nPage} setNPage={setNPage} />;
  } else if (nPage == 2) {
    content = <GymRoutine nPage={nPage} setNPage={setNPage} />;
  } else if (nPage == 3) {
    content = <CommonConditions nPage={nPage} setNPage={setNPage}/>
  } else if (nPage == 4) {
    content = <Addictions nPage={nPage} setNPage={setNPage}/>
  }
  return (
    <>
      {/* {" "} */}
      {/* {isAlimentation === 1 ? ( */}
      {/*   <Alimentacion */}
      {/*     isAlimentation={isAlimentation} */}
      {/*     setAlimentation={setAlimentation} */}
      {/*   /> */}
      {/* ) : ( */}
      {/*   <> */}
      {/*     <div className="mainDiv min-h-[95.6vh] items-center justify-center font-sans dark:bg-[#222]"> */}
      {/*       <div className="flex justify-center items-center bg-[#87AECE]"> */}
      {/*         <Header /> */}
      {/*       </div> */}
      {/*       <MainPage */}
      {/*         isAlimentation={isAlimentation} */}
      {/*         setAlimentation={setAlimentation} */}
      {/*       /> */}
      {/*     </div> */}
      {/*     <Footer /> */}
      {/*   </> */}
      {/* )}{" "} */}

      {content}
    </>
  );
}
