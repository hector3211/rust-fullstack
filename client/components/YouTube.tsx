"use client";
import YouTube, { YouTubeProps } from "react-youtube";

type YtProps = {
  videoId: string;
};

export default function YT({ videoId }: YtProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    // event.target.setPlaybackQuality("1080");
    event.target.playVideo();
    console.log(event.target.getPlayerState());
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      className="object-fill border-2 border-orange-500 rounded-md shadow-black drop-shadow-lg"
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}
