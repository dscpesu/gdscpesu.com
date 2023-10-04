import { Navbar, Footer } from "@/Shared-Components";
import { Events } from "../RootPage-Components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-32">
      <Navbar />
      <Events/>
      <Footer/>
    </main>
  );
}
