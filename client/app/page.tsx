import AllTheMovies from "./AllMovies";

export default async function Home() {
  return (
    <main>
      <div className="flex w-full">
        {/* @ts-expect-error Server Component */}
        <AllTheMovies />
      </div>
    </main>
  );
}
