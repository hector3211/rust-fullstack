"use client";
import Link from "next/link";
import { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type YtProps = {
  title: string;
  results: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }[];
};

export default function YT({ results, title }: YtProps) {
  const [error, setError] = useState<true | false>(true);
  let [currentIdx, setCurrentIdx] = useState<number>(0);
  console.log(currentIdx);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };
  function handleError() {
    setError(false);
  }
  function handleNextVideo() {
    setCurrentIdx((currentIdx += 1));
  }

  let currentVideo = results[currentIdx]?.key;
  return (
    <div>
      {error ? (
        <div className="ml-10 mt-10">
          <YouTube
            className="object-fill border-2 border-orange-500 rounded-md shadow-black drop-shadow-lg"
            videoId={currentVideo}
            opts={opts}
            onReady={onPlayerReady}
            onError={handleError}
          />
          <button
            onClick={handleNextVideo}
            className="btn btn-success w-full mt-3"
          >
            Next Video
          </button>
        </div>
      ) : (
        <div className="absolute top-1/2 left-2/4">
          <Link
            href={`https://youtube.com/results?search_query=${title}`}
            target="_blank"
            className="text-xl btn btn-success"
          >
            Tailer
          </Link>
        </div>
      )}
    </div>
  );
}
