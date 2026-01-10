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
        <main className="mainDiv flex flex-col flex-1 font-sans">
          <section className="headerSection flex justify-center items-center bg-[#87AECE]">
            <Header />
          </section>
          <div className="flex-1 justify-center items-center">
            <MainPage nPage={nPage} setNPage={setNPage} />
          </div>
          <Footer />
        </main>
      </>
    );
  } else if (nPage == 1) {
    content = <Alimentacion nPage={nPage} setNPage={setNPage} />;
  } else if (nPage == 2) {
    content = <GymRoutine nPage={nPage} setNPage={setNPage} />;
  } else if (nPage == 3) {
    content = <CommonConditions nPage={nPage} setNPage={setNPage} />;
  } else if (nPage == 4) {
    content = <Addictions nPage={nPage} setNPage={setNPage} />;
  } else if (nPage == 5) {
    content = <SocialSupport nPage={nPage} setNPage={setNPage} />;
  } else if (nPage == 6) {
    content = <InterpersonalRelationships nPage={nPage} setNPage={setNPage} />;
  }
  return <>{content}</>;
}
