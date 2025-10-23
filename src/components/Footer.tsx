import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 relative overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#2E3B52"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-2 mb-4">
            Créé avec <Heart className="w-5 h-5 text-red-400 fill-red-400 animate-pulse" /> par Alexis Maugain
          </p>
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Alexis Maugain - Tous droits réservés
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
