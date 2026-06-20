import Image from "next/image";

type VideoPanelProps = {
  title: string;
  imageSrc: string;
  alt: string;
  label: string;
  videoSrc?: string;
  priority?: boolean;
};

export function VideoPanel({ title, imageSrc, alt, label, videoSrc, priority }: VideoPanelProps) {
  return (
    <figure className="design-x-video-panel">
      {videoSrc ? (
        <video
          aria-hidden="true"
          autoPlay
          className="design-x-video-media"
          loop
          muted
          playsInline
          poster={imageSrc}
          preload={priority ? "metadata" : "none"}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          alt={alt}
          className="design-x-video-media"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 46vw, 100vw"
          src={imageSrc}
        />
      )}
      <figcaption>
        <span>{label}</span>
        <strong>{title}</strong>
      </figcaption>
    </figure>
  );
}
