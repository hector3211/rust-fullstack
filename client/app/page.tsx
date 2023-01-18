import AllTheMovies from "./AllMovies";
import Footer from "./Footer";

export default async function Home() {
  return (
    <main>
      <div className="flex w-full">
        {/* @ts-expect-error Server Component */}
        <AllTheMovies />
      </div>
      <Footer />
    </main>
  );
}
