import { motion } from "framer-motion";

export function Avatar() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="95" fill="#CCE0F5" />
      
      {/* Head */}
      <ellipse cx="100" cy="85" rx="42" ry="48" fill="#F5C4A0" />
      
      {/* Modern short hair - clean fade style */}
      {/* Back and sides - very short */}
      <ellipse cx="100" cy="58" rx="44" ry="20" fill="#2E2419" />
      
      {/* Top hair - styled with volume and texture */}
      <path
        d="M 65 58 Q 62 48, 68 42 Q 75 38, 82 40 Q 88 36, 94 38 Q 98 34, 102 35 Q 106 34, 110 38 Q 116 36, 122 40 Q 129 38, 136 42 Q 142 48, 138 58 L 135 60 Q 125 62, 115 61 Q 105 62, 100 61 Q 95 62, 85 61 Q 75 62, 65 60 Z"
        fill="#2E2419"
      />
      
      {/* Hair highlights and texture - modern spiky/textured look */}
      <path
        d="M 85 46 L 87 42 M 95 44 L 97 40 M 105 44 L 107 40 M 115 46 L 117 42"
        stroke="#3d332a"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Front quiff/fringe */}
      <path
        d="M 90 50 Q 95 45, 100 46 Q 105 45, 110 50"
        stroke="#1a1612"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Ears */}
      <ellipse cx="60" cy="85" rx="6" ry="10" fill="#E5B490" />
      <ellipse cx="140" cy="85" rx="6" ry="10" fill="#E5B490" />
      
      {/* Eyes */}
      <motion.g
        animate={{
          scaleY: [1, 0.1, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      >
        <ellipse cx="85" cy="82" rx="5" ry="7" fill="#2E3B52" />
        <ellipse cx="115" cy="82" rx="5" ry="7" fill="#2E3B52" />
      </motion.g>
      
      {/* Eye highlights */}
      <circle cx="87" cy="80" r="1.5" fill="white" />
      <circle cx="117" cy="80" r="1.5" fill="white" />
      
      {/* Eyebrows */}
      <path
        d="M 75 73 Q 82 71, 90 73"
        stroke="#2E2419"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 110 73 Q 117 71, 125 73"
        stroke="#2E2419"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Nose */}
      <path
        d="M 100 92 L 96 100 Q 100 102, 104 100 Z"
        fill="#E5B490"
      />
      
      {/* Smile */}
      <motion.path
        d="M 85 105 Q 100 115, 115 105"
        stroke="#2E3B52"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        animate={{
          d: [
            "M 85 105 Q 100 115, 115 105",
            "M 85 105 Q 100 113, 115 105",
            "M 85 105 Q 100 115, 115 105",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Neck */}
      <rect x="85" y="125" width="30" height="18" fill="#F5C4A0" rx="5" />
      
      {/* Streetwear Hoodie - cleaner design */}
      {/* Hoodie body */}
      <path
        d="M 65 145 Q 60 135, 70 130 L 85 140 L 100 135 L 115 140 L 130 130 Q 140 135, 135 145 L 140 200 L 60 200 Z"
        fill="#2E3B52"
      />
      
      {/* Hoodie strings */}
      <path
        d="M 88 145 Q 92 155, 90 168"
        stroke="#AFC7E3"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 112 145 Q 108 155, 110 168"
        stroke="#AFC7E3"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Hoodie string tips */}
      <circle cx="90" cy="170" r="3" fill="#AFC7E3" />
      <circle cx="110" cy="170" r="3" fill="#AFC7E3" />
      
      {/* Hoodie center zipper */}
      <path
        d="M 100 145 L 100 200"
        stroke="#1a2332"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Hoodie pockets */}
      <path
        d="M 75 175 Q 78 170, 85 172 L 83 185 Q 78 187, 73 183 Z"
        fill="#1a2332"
      />
      <path
        d="M 125 175 Q 122 170, 115 172 L 117 185 Q 122 187, 127 183 Z"
        fill="#1a2332"
      />
      
      {/* Arms in hoodie */}
      <ellipse cx="55" cy="170" rx="12" ry="30" fill="#2E3B52" transform="rotate(-15 55 170)" />
      <ellipse cx="145" cy="170" rx="12" ry="30" fill="#2E3B52" transform="rotate(15 145 170)" />
      
      {/* Hands */}
      <circle cx="50" cy="195" r="8" fill="#F5C4A0" />
      <circle cx="150" cy="195" r="8" fill="#F5C4A0" />
      
      {/* Left hand holding phone */}
      <motion.g
        animate={{
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "50px 195px" }}
      >
        <rect x="44" y="188" width="12" height="18" rx="2" fill="#1a2332" />
        <rect x="45" y="189" width="10" height="14" fill="#CCE0F5" />
      </motion.g>
      
      {/* Right hand - peace sign */}
      <g transform="translate(150, 195)">
        <path d="M -2 -8 L -2 2" stroke="#F5C4A0" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 2 -8 L 2 2" stroke="#F5C4A0" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      
      {/* Floating sparkles */}
      <motion.g
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformOrigin: "100px 100px" }}
      >
        <path
          d="M 25 100 L 27 102 L 25 104 L 23 102 Z"
          fill="#FFD700"
        />
        <path
          d="M 175 100 L 177 102 L 175 104 L 173 102 Z"
          fill="#FFD700"
        />
        <path
          d="M 100 25 L 102 27 L 100 29 L 98 27 Z"
          fill="#FFD700"
        />
      </motion.g>
    </svg>
  );
}
