"use client";

interface HeroVideoPlayerProps {
  className?: string;
  videoId?: string;
}

export function HeroVideoPlayer({
  className = "",
  videoId = "M576WGiDBdQ",
}: HeroVideoPlayerProps) {
  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Subtle, soft ambient glow matching reference image */}
      <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/10 via-purple-600/8 to-indigo-600/10 blur-2xl rounded-xl pointer-events-none -z-10" />

      {/* Pure Large Video Frame - Controlled, visibly reduced height */}
      <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[400px] xl:h-[570px] rounded-lg overflow-hidden border border-slate-200/90 dark:border-slate-800/80 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.18),0_0_20px_rgba(59,130,246,0.08)] bg-black pointer-events-none">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
          title="Web Development Showcase"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute -top-[12%] -left-[5%] w-[110%] h-[124%] border-0 object-cover pointer-events-none"
        />
      </div>
    </div>
  );
}
