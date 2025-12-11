import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

const navItems = [
  { name: "Accueil", href: "#home" },
  { name: "Projets", href: "#projects" },
  { name: "Parcours", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    
    // Si on est sur la page d'accueil, scroller directement
    if (window.location.pathname === "/") {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Si on est sur une autre page, aller à la page d'accueil puis scroller
      navigate("/");
      setTimeout(() => {
        if (href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    }
  };

  const handleHomeClick = () => {
    window.location.href = "/portfolio/";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={handleHomeClick}
            whileHover={{ scale: 1.05 }}
            className="z-50"
          >
            <Logo variant={scrolled ? "dark" : "light"} />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                className={`transition-colors relative group ${
                  scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-[#CCE0F5]"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? "bg-primary" : "bg-[#CCE0F5]"} group-hover:w-full transition-all duration-300`}></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden z-50 ${scrolled ? "text-primary" : "text-white"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="md:hidden bg-white/98 backdrop-blur-md overflow-hidden"
      >
        <div className="container mx-auto px-4 py-8 space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: isOpen ? 0 : -50,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
