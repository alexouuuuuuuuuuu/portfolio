import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar } from "./Avatar";

interface HeroProps {
  onScrollToProjects: () => void;
}

export function Hero({ onScrollToProjects }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a2332] via-[#2E3B52] to-[#3d4f6b]">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#AFC7E3 1px, transparent 1px),
                           linear-gradient(90deg, #AFC7E3 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left side - Profile & Intro */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Avatar with creative frame */}
            <div className="relative inline-block mb-8">
              <div className="relative">
                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#AFC7E3] shadow-2xl relative z-10 bg-white">
                  <Avatar />
                </div>
                
                {/* Decorative rotating circles */}
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-[#CCE0F5]"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute -inset-8 rounded-full border border-[#AFC7E3] opacity-50"
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            {/* Creative Name Display */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <div className="relative inline-block">
                <h1 className="text-5xl md:text-7xl mb-2 relative z-10">
                  <span className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
                    Alexis
                  </span>
                  <br />
                  <span 
                    className="bg-gradient-to-r from-[#CCE0F5] via-[#AFC7E3] to-[#CCE0F5] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(204,224,245,0.6)]"
                    style={{ 
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 2px 4px rgba(175, 199, 227, 0.5))',
                    }}
                  >
                    Maugain
                  </span>
                </h1>
                {/* Decorative underline */}
                <motion.div
                  className="h-2 bg-gradient-to-r from-[#FFD700] via-[#CCE0F5] to-[#AFC7E3] rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Role with badge style */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-8"
            >
              {/* Removed badge */}
            </motion.div>

            {/* Introduction */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-white text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow-lg"
            >
              Passionné par le <span className="text-[#CCE0F5] font-semibold drop-shadow-[0_2px_8px_rgba(204,224,245,0.8)]">design</span>, 
              le <span className="text-[#FFD700] font-semibold drop-shadow-[0_2px_8px_rgba(255,215,0,0.8)]">web</span> et 
              l'<span className="text-[#CCE0F5] font-semibold drop-shadow-[0_2px_8px_rgba(204,224,245,0.8)]">interactivité</span>.
              <br />
              Je conçois des expériences numériques qui allient esthétique et fonctionnalité.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={onScrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-[#AFC7E3] to-[#CCE0F5] hover:from-[#CCE0F5] hover:to-[#AFC7E3] text-[#2E3B52] rounded-full px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Voir mes projets
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                size="lg"
                variant="outline"
                className="border-2 border-[#CCE0F5] text-[rgb(46,59,82)] hover:bg-[#CCE0F5] hover:text-[#2E3B52] rounded-full px-8 py-6 backdrop-blur-md transition-all duration-300"
              >
                Me contacter
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Creative visual elements */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Large decorative text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-[200px] font-black text-white/5 select-none leading-none">
                  MMI
                </div>
              </motion.div>

              {/* Floating skills */}
              {[
                { name: "UI/UX", x: "10%", y: "20%", delay: 0 },
                { name: "Web", x: "70%", y: "15%", delay: 0.2 },
                { name: "Video", x: "15%", y: "60%", delay: 0.4 },
                { name: "3D", x: "75%", y: "70%", delay: 0.6 },
                { name: "Design", x: "50%", y: "45%", delay: 0.8 },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="absolute px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm"
                  style={{
                    left: skill.x,
                    top: skill.y,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    scale: { delay: 1 + skill.delay, duration: 0.5 },
                    opacity: { delay: 1 + skill.delay, duration: 0.5 },
                    y: {
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.name}
                </motion.div>
              ))}

              {/* Decorative shapes */}
              <motion.div
                className="absolute top-[30%] left-[40%] w-40 h-40 bg-gradient-to-br from-[#AFC7E3]/30 to-[#CCE0F5]/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}