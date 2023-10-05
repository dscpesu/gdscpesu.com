import { posts } from "@/constants";
import { Navbar, Footer } from "@/Shared-Components";
import InvalidPage from "./InvalidPage";
import EventPage from "./EventPage";

export async function generateStaticParams() {
  const params = Object.values(posts).map((post) => ({
    slug: post.slug,
  }));
  return params;
}
export default function Home({ params }) {
  const slugNumber = params.event[0];
  const isValidRequest = (slugNumber) => {
    if (slugNumber <= Object.keys(posts).length) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-32">
      <Navbar />
      {isValidRequest(slugNumber) ? (
        <EventPage {...posts[slugNumber]} />
      ) : (
        <InvalidPage />
      )}
      <Footer />
    </main>
  );
}
