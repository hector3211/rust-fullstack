import AllTheMovies from "./AllMovies";
export default function Home() {
  return (
    <main>
      <div className="flex ">
        {/* @ts-expect-error Server Component */}
        <AllTheMovies />
      </div>
    </main>
  );
}
