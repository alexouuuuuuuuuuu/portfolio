import { motion } from "motion/react";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const isDark = variant === "dark";
  
  const sizeMap = {
    sm: { width: 40, height: 40 },
    md: { width: 56, height: 56 },
    lg: { width: 72, height: 72 },
  };

  const { width, height } = sizeMap[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <defs>
        <linearGradient id={`logoGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#AFC7E3" : "#2E3B52"} />
          <stop offset="100%" stopColor={isDark ? "#CCE0F5" : "#AFC7E3"} />
        </linearGradient>
      </defs>
      
      {/* Outer decorative circle */}
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      
      {/* Main filled circle */}
      <circle
        cx="100"
        cy="100"
        r="75"
        fill={isDark ? "#2E3B52" : "#FFFFFF"}
      />
      
      {/* Inner circle border */}
      <circle
        cx="100"
        cy="100"
        r="75"
        stroke={isDark ? "#AFC7E3" : "#2E3B52"}
        strokeWidth="2"
        fill="none"
      />

      {/* Letter A */}
      <path
        d="M 70 130 L 85 70 L 95 70 L 110 130 M 82 105 L 98 105"
        stroke={isDark ? "#CCE0F5" : "#2E3B52"}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Letter M */}
      <path
        d="M 112 130 L 112 70 L 125 95 L 138 70 L 138 130"
        stroke={isDark ? "#AFC7E3" : "#2E3B52"}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Decorative stars */}
      <g opacity="0.9">
        <circle cx="155" cy="45" r="6" fill="#FFD700" />
        <circle cx="148" cy="38" r="3" fill="#FFD700" opacity="0.6" />
      </g>
      
      {/* Small accent dots */}
      <circle cx="45" cy="155" r="4" fill={isDark ? "#CCE0F5" : "#AFC7E3"} opacity="0.7" />
    </svg>
  );
}
