import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  variant?: "dark" | "light";
}

export function SectionTitle({ children, subtitle, variant = "dark" }: SectionTitleProps) {
  const isDark = variant === "dark";
  
  return (
    <div className="relative mb-16">
      {/* Main title */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center"
      >
        {/* Title with simple underline */}
        <div className="inline-block">
          <h2 className={`relative ${isDark ? 'text-primary' : 'text-white'} mb-2`}>
            {children}
          </h2>
          {/* Simple animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`h-1 rounded-full ${isDark ? 'bg-gradient-to-r from-secondary via-accent to-secondary' : 'bg-gradient-to-r from-white/50 via-white to-white/50'}`}
            style={{ transformOrigin: "center" }}
          />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`mt-6 max-w-2xl mx-auto ${isDark ? 'text-muted-foreground' : 'text-white/80'}`}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
