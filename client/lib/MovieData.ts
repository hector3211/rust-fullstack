import { Movie } from "@/typings";

export async function fetchFromActix() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/getmovies`, {
    next: { revalidate: 10 },
  });
  if (!res) {
    throw new Error("Error fetching data from server");
  }

  const allMovies: Movie[] = await res.json();
  return allMovies;
}
