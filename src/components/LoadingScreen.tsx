import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onLoadingComplete, 800);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#1a2332] via-[#2E3B52] to-[#1a2332] overflow-hidden"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#AFC7E3 1px, transparent 1px), linear-gradient(90deg, #AFC7E3 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#CCE0F5] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative z-10">
            {/* Main content container */}
            <div className="flex flex-col items-center gap-8">
              {/* Logo with reveal animation */}
              <div className="relative">
                {/* Outer rotating rings */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      stroke="#AFC7E3"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="10 5"
                      opacity="0.5"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="75"
                      stroke="#CCE0F5"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="5 10"
                      opacity="0.7"
                    />
                  </svg>
                </motion.div>

                {/* Center logo - Image PNG */}
                <motion.div
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="relative w-[200px] h-[200px] flex items-center justify-center"
                >
                  <motion.img
                    src="./assets/logo.png"
                    alt="Logo Alexis Maugain"
                    className="w-[150px] h-[150px] object-contain"
                    initial={{ filter: "brightness(0.5) blur(10px)" }}
                    animate={{ filter: "brightness(1) blur(0px)" }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </motion.div>

                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#CCE0F5] opacity-20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Name and tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="text-center"
              >
                <motion.h1 
                  className="text-white text-3xl mb-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Alexis Maugain
                </motion.h1>
                <p className="text-[#CCE0F5]">Portfolio Créatif</p>
              </motion.div>

              {/* Loading dots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex gap-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-[#CCE0F5] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}