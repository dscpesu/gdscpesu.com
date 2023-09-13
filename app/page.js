import { Navbar } from "@/Shared-Components";
import { Hero, AboutUs, WhatWeOffer } from "./RootPage-Components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-32">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <WhatWeOffer/>

    </main>
  );
}
