import { VideoPlayerProps } from '@/types';

export function VideoPlayer({ 
  src, 
  autoPlay = false, 
  muted = true, 
  loop = false 
}: VideoPlayerProps) {
  return (
    <video 
      controls 
      autoPlay={autoPlay} 
      muted={muted} 
      loop={loop}
      className="w-full rounded-lg shadow-lg"
    >
      <source src={src} type="video/mp4" />
      Your browser doesn't support HTML5 video.
    </video>
  );
}