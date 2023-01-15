"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Poster, Movie } from "@/typings";

type MovieTitle = {
  title: string;
};

export default async function MoviePoster({
  title,
}: MovieTitle): Promise<JSX.Element> {
  const [posterUrl, setPosterUrl] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?t=${title}&apikey=${process.env.NEXT_PUBLIC_POSTER_API_KEY}`
      )
      .then((res) => setPosterUrl(res.data))
      .catch((error) => console.log(error));
  }, [title]);

  if (!posterUrl) {
    return <div>loading..</div>;
  }
  return (
    <img
      src={posterUrl}
      alt={"poster for ${movieTitle}"}
      className="object-fill"
    />
  );
}
