interface VideoEmbedProps {
  videoId: string;
  title: string;
}

const VideoEmbed = ({ videoId, title }: VideoEmbedProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden shadow-card">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoEmbed;