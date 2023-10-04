import { Navbar, Footer } from "@/Shared-Components";
import EventDetails from "./EventDetails";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-32">
      <Navbar />
      <EventDetails/>
      <Footer/>
    </main>
  );
}
