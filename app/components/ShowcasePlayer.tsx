"use client";

import { useEffect, useRef } from "react";

type ShowcasePlayerProps = {
  webmSrc: string;
  mp4Src: string;
  posterSrc: string;
  className?: string;
};

export function ShowcasePlayer({
  webmSrc,
  mp4Src,
  posterSrc,
  className,
}: ShowcasePlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link rel="preload" as="image" href={posterSrc} fetchPriority="high" />
      <video
        ref={videoRef}
        poster={posterSrc}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Prototyp-Demo einer App-Oberfläche (Konzept, kein reales Produkt)"
        className={className}
      >
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>
    </>
  );
}
