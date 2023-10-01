import { Navbar,Footer } from "@/Shared-Components";
import {
  Hero,
  AboutUs,
  WhatWeOffer,
  Domains,
  MeetTheTeam,
  Events

} from "./RootPage-Components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-32">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <Domains />
      <MeetTheTeam />
      <Events/>
      <Footer/>
    </main>
  );
}
