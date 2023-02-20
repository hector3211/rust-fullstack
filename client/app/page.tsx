import { Suspense } from "react";
import AllTheMovies from "./AllMovies";
import Footer from "./Footer";
import Loading from "./loading";

export default async function Home() {
  return (
    <main>
      <div className="pt-10">
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Server Component */}
          <AllTheMovies />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
