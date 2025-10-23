import { motion } from "framer-motion";
import logoImage from "../assets/logo.png";

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
  
  // Filtres CSS pour changer la couleur selon le variant
  const getColorFilter = () => {
    if (isDark) {
      // Variant dark : logo en noir/gris foncé (pour fond blanc)
      return "brightness(0) saturate(100%) contrast(1.2)";
    } else {
      // Variant light : couleurs originales du logo (pour fond sombre)
      return "brightness(1) saturate(1)";
    }
  };
  
  return (
    <motion.img
      src={logoImage}
      alt="Logo Alexis Maugain"
      width={width}
      height={height}
      className="inline-block object-contain transition-all duration-300"
      style={{
        filter: getColorFilter()
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    />
  );
}
