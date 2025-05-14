import { createIframeLink } from "@/lib/utils";

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <div className="video-player">
      <iframe
        src={createIframeLink(videoId)}
        loading="lazy"
        title="video player"
        style={{ border: 0, zIndex: 50 }}
        allowFullScreen
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
      />
    </div>
  );
};
export default VideoPlayer;
