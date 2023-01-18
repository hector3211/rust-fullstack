"use client";
import YouTube, { YouTubeProps } from "react-youtube";
type YtProps = {
  key: string;
};
export default function YT({ key }: YtProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={key} opts={opts} onReady={onPlayerReady} />;
}
