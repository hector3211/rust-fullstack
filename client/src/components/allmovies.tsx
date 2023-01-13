import { useState, useEffect } from "react";
import axios from "axios";

const url = "localhost:8080/getmovies";
interface AllMovies {
  data: Movie[];
}
interface Movie {
  id?: number;
  title?: string;
  cover?: string;
  rating?: number;
}
async function fetchData(): Promise<AllMovies> {
  const resp = await fetch(url);
  return await resp.json();
}

export default function AllMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getData() {
      const list = await fetchData();
      setMovies(list);
    }
    getData();
  }, []);

  if (!movies) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>hello all moveis hello</h3>
    </div>
  );
}
