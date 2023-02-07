"use client";
import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type YtProps = {
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

/*
 * WOULD LIKE TO ADD SOME SORT OF TOAST WHEN NO VIDEO IS AVAILABLE !!!!!!!
 *
 */
export default function YT({ results }: YtProps) {
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

  // function startTime() {
  //   setTimeout(() => {
  //     handleError();
  //   }, 5000);
  // }
  //
  // useEffect(() => {
  //   startTime();
  // }, [currentIdx]);

  let currentVideo = results[currentIdx]?.key;
  return (
    <div>
      {error && (
        <div>
          <YouTube
            className="object-fill border-2 border-orange-500 rounded-md shadow-black drop-shadow-lg"
            videoId={currentVideo}
            opts={opts}
            onReady={onPlayerReady}
            onError={handleError}
          />
          <button onClick={handleNextVideo} className="btn btn-success">
            Next Video
          </button>
        </div>
      )}
    </div>
  );
}
