"use client";

import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { MainPage } from "@/components/ui/main";

export default function Home() {
  return (
    <>
      <main className="mainDiv flex flex-col flex-1 font-sans">
        <section className="headerSection flex justify-center items-center bg-[#87AECE]">
          <Header />
        </section>
        <div className="flex-1 justify-center items-center">
          <MainPage/>
        </div>
        <Footer />
      </main>
    </>
  );
}
