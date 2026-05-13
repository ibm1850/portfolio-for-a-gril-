"use client";

type FloralLogoProps = {
  compact?: boolean;
  light?: boolean;
  className?: string;
};

export function FloralLogo({
  compact = false,
  light = false,
  className = "",
}: FloralLogoProps) {
  return (
    <span className={`logo-lockup ${compact ? "logo-lockup--compact" : ""} ${className}`}>
      <svg
        className="logo-lockup__mark"
        viewBox="0 0 120 120"
        role="img"
        aria-label="Maram red flower M logo"
      >
        <defs>
          <linearGradient id="maramLogoGradient" x1="20" x2="98" y1="8" y2="110">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="48%" stopColor="#c8102e" />
            <stop offset="100%" stopColor="#7A0019" />
          </linearGradient>
          <filter id="maramLogoShadow" x="-16%" y="-16%" width="132%" height="132%">
            <feDropShadow dx="0" dy="8" floodColor="#be123c" floodOpacity="0.18" stdDeviation="5" />
          </filter>
        </defs>
        <g fill="url(#maramLogoGradient)" filter="url(#maramLogoShadow)">
          <path d="M8 104c16.4-21.1 22.9-44 29.1-65.4 3.7 27.3-4.4 52.8-17.9 65.4H8Z" />
          <path d="M112 104C95.6 82.9 89.1 60 82.9 38.6c-3.7 27.3 4.4 52.8 17.9 65.4H112Z" />
          <path d="M58.5 30h3v70h-3z" />
          <circle cx="60" cy="16.5" r="10.8" />
          <path d="M58.6 36.2C39.8 30.8 32.2 17.3 33.4 9.8c17.4 2.6 25.6 13.5 25.2 26.4Z" />
          <path d="M61.4 36.2C80.2 30.8 87.8 17.3 86.6 9.8 69.2 12.4 61 23.3 61.4 36.2Z" />
          <path d="M58.5 75.8C42 70.8 35.7 59.3 37 52.7c14.7 2.2 21.8 11.7 21.5 23.1Z" />
          <path d="M61.5 75.8C78 70.8 84.3 59.3 83 52.7 68.3 54.9 61.2 64.4 61.5 75.8Z" />
          <path d="M60 99.5c-11.1-9.7-13-22.2-8.3-30.8 9.8 6.2 12.2 18.4 8.3 30.8Z" />
          <path d="M60 99.5c11.1-9.7 13-22.2 8.3-30.8-9.8 6.2-12.2 18.4-8.3 30.8Z" opacity="0.92" />
        </g>
      </svg>
      {!compact && (
        <span className="logo-lockup__text">
          <span className={`logo-lockup__name ${light ? "text-white" : "text-[#7A0019]"}`}>
            Maram
          </span>
          <span className={light ? "text-white/70" : "text-[#be123c]/70"}>
            UGC Creator
          </span>
        </span>
      )}
    </span>
  );
}
