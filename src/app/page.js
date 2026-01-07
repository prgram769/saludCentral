"use client";

import { Addictions } from "@/components/ui/addictions";
import { Alimentacion } from "@/components/ui/alimentacion";
import { CommonConditions } from "@/components/ui/commonConditions";
import { Footer } from "@/components/ui/footer";
import { GymRoutine } from "@/components/ui/gymRoutine";
import { Header } from "@/components/ui/header";
import { InterpersonalRelationships } from "@/components/ui/interpersonalRelationships";
import { MainPage } from "@/components/ui/main";
import { SocialSupport } from "@/components/ui/socialSupport";
import { useState } from "react";

export default function Home() {
  let content;

  const [nPage, setNPage] = useState(0);

  if (nPage == 0) {
    content = (
      <>
        <main className="mainDiv min-h-[95.6vh] items-center justify-center font-sans">
          <section className="flex justify-center items-center bg-[#87AECE]">
            <Header/>
          </section>
          <MainPage nPage={nPage} setNPage={setNPage} />
        </main>
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
  } else if (nPage == 5) {
    content = <SocialSupport nPage={nPage} setNPage={setNPage}/>
  } else if (nPage == 6) {
    content = <InterpersonalRelationships nPage={nPage} setNPage={setNPage}/>
  }
  return (
    <>
      {content}
    </>
  );
}
