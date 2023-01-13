import { Movie } from "@/typings";

const url = "localhost:8080/";

async function getMoives() {
  const res = await fetch(`${url}/getmovies`);
  if (!res) {
    throw new Error("Error fetching data from server");
  }

  const allMovies: Movie[] = await res.json();
  return allMovies;
}

export default async function GetMovies() {
  return <div></div>;
}
