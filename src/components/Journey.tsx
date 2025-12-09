import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const timeline = [
  {
    year: "2025",
    title: "Phénix Studio",
    type: "Stage en UX/UI & Intégration Wordpress",
    description: "Conception de maquettes UI, optimisation UX, intégration sous WordPress, suivi client",
    icon: Briefcase,
  },
  {
    year: "2023-2026",
    title: "BUT MMI",
    type: "Métiers du Multimédia et de l'Internet",
    description: "À l'IUT du Limousin - Spécialisé Création Numérique. Formation en design graphique, développement web, audiovisuel, communication digitale",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "BAC général",
    type: "Spécialité Maths, NSI",
    description: "",
    icon: GraduationCap,
  },
];

const skillCategories = [
  {
    category: "Design & Création",
    skills: [
      { name: "Design graphique", level: 5 },
      { name: "Web design", level: 5 },
      { name: "UI/UX Design", level: 4 },
    ],
    color: "from-[#AFC7E3] to-[#CCE0F5]",
  },
  {
    category: "Développement",
    skills: [
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "WordPress", level: 4 },
    ],
    color: "from-[#2E3B52] to-[#4a5d7a]",
  },
  {
    category: "Communication & Gestion",
    skills: [
      { name: "Gestion de projet", level: 4 },
      { name: "Communication", level: 5 },
      { name: "Stratégie digitale", level: 4 },
    ],
    color: "from-[#CCE0F5] to-[#AFC7E3]",
  },
  {
    category: "Audiovisuel",
    skills: [
      { name: "Montage vidéo", level: 4 },
      { name: "Motion design", level: 4 },
      { name: "Modélisation 3D", level: 3 },
    ],
    color: "from-[#4a5d7a] to-[#2E3B52]",
  },
];
const softwareCategories = [
  {
    name: "Design Graphique",
    color: "#FF9A00",
    tools: [
      { image: "./assets/logitiels/illustrator.png", color: "#FF9A00" },
      { image: "./assets/logitiels/photoshop.png", color: "#31A8FF" },
      { image: "./assets/logitiels/indesign.png", color: "#FF3366" },
    ],
  },
  {
    name: "UI/UX",
    color: "#A259FF",
    tools: [
      { image: "./assets/logitiels/figma.png", color: "#A259FF" },
      { image: "./assets/logitiels/adobe-xd.png", color: "#FF61F6" },
    ],
  },
  {
    name: "Vidéo & Motion",
    color: "#9999FF",
    tools: [
      { image: "./assets/logitiels/premiere-pro.png", color: "#9999FF" },
      { image: "./assets/logitiels/after-effects.png", color: "#9999FF" },
    ],
  },
  {
    name: "3D",
    color: "#FF8C00",
    tools: [
      { image: "./assets/logitiels/blender.png", color: "#FF8C00" },
    ],
  },
  {
    name: "Développement",
    color: "#61DAFB",
    tools: [
      { image: "./assets/logitiels/html.png", color: "#E34F26" },
      { image: "./assets/logitiels/css.png", color: "#1572B6" },
      { image: "./assets/logitiels/javascript.png", color: "#F7DF1E" },
    ],
  },
];

// Flatten all tools for grid display with image paths
const allSoftware = [
  { name: "Illustrator", image: "./assets/logiciels/illustrator.svg", color: "#FF9A00", category: "Design" },
  { name: "Photoshop", image: "./assets/logiciels/photoshop.svg", color: "#31A8FF", category: "Design" },
  { name: "InDesign", image: "./assets/logiciels/indesign.svg", color: "#FF3366", category: "Design" },
  { name: "Figma", image: "./assets/logiciels/figma.svg", color: "#A259FF", category: "UI/UX" },
  { name: "Premiere Pro", image: "./assets/logiciels/premiere-pro.svg", color: "#9999FF", category: "Vidéo" },
  { name: "After Effects", image: "./assets/logiciels/after-effects.svg", color: "#9999FF", category: "Motion" },
  { name: "Blender", image: "./assets/logiciels/blender.svg", color: "#FF8C00", category: "3D" },
  { name: "HTML", image: "./assets/logiciels/html.svg", color: "#E34F26", category: "Web" },
  { name: "CSS", image: "./assets/logiciels/css.svg", color: "#1572B6", category: "Web" },
  { name: "JavaScript", image: "./assets/logiciels/js.svg", color: "#F7DF1E", category: "Web" },
  { name: "PHP", image: "./assets/logiciels/php.svg", color: "#777BB3", category: "Web" },
  { name: "WordPress", image: "./assets/logiciels/wordpress.svg", color: "#21759B", category: "CMS" },
];

export function Journey() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-accent/5 to-white relative overflow-hidden" id="journey">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionTitle subtitle="Mon évolution professionnelle et mes domaines d'expertise en design et développement multimédia.">
          Parcours & Compétences
        </SectionTitle>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="mb-8 text-center text-primary">Parcours professionnel</h3>
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#4a5d7a] flex items-center justify-center shadow-lg"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-accent text-accent-foreground">
                          {item.year}
                        </Badge>
                      </div>
                      <h4 className="mb-1 text-primary">{item.title}</h4>
                      <p className="text-muted-foreground mb-2">{item.type}</p>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills Banner - Full Width */}
        <div className="mb-20 -mx-4 md:-mx-8 lg:-mx-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Banner content */}
            <div className="relative bg-gradient-to-r from-primary to-secondary py-12 px-4 md:px-8 shadow-2xl overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }} />
              </div>

              {/* Skills grid */}
              <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {["Design & Création", "Développement", "Communication", "Gestion de projet", "Audiovisuel"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/50">
                      {/* Icon/Emoji based on skill */}
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {index === 0 && (
                          <img
                            src="./assets/icones/palette.svg"
                            alt="Design"
                            className="mx-auto w-10 h-10 object-contain"
                          />
                        )}
                        {index === 1 && (
                          <img
                            src="./assets/icones/ordinateur.svg"
                            alt="Développement"
                            className="mx-auto w-10 h-10 object-contain"
                          />
                        )}
                        {index === 2 && (
                          <img
                            src="./assets/icones/speaker.svg"
                            alt="Communication"
                            className="mx-auto w-10 h-10 object-contain"
                          />
                        )}
                        {index === 3 && (
                          <img
                            src="./assets/icones/calendrier.svg"
                            alt="Gestion de projet"
                            className="mx-auto w-10 h-10 object-contain"
                          />
                        )}
                        {index === 4 && (
                          <img
                            src="./assets/icones/camera.svg"
                            alt="Audiovisuel"
                            className="mx-auto w-10 h-10 object-contain"
                          />
                        )}
                      </div>
                      
                      {/* Skill name */}
                      <h4 className="text-primary group-hover:text-secondary transition-colors duration-300">
                        {skill}
                      </h4>
                      
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 30}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Software - Organized by category with logos */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle subtitle="Outils et logiciels vu au cours de ma formation et mes expériences.">
              Logiciels maîtrisés
            </SectionTitle>
            
            {/* Modern Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {allSoftware.map((software, index) => (
                <motion.div
                  key={software.name}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 150,
                  }}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary/10 overflow-hidden">
                    {/* Colored background on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: software.color }}
                    />
                    
                    {/* Content */}
                    <div className="relative flex flex-col items-center gap-3">
                      {/* Logo Image */}
                      <motion.div
                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 bg-white"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                        style={{ overflow: "hidden" }}
                      >
                        <img
                          src={software.image}
                          alt={software.name}
                          className="w-10 h-10 object-contain"
                        />
                      </motion.div>
                      
                      {/* Name */}
                      <div className="text-center">
                        <p className="text-sm text-primary group-hover:text-secondary transition-colors duration-300">
                          {software.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {software.category}
                        </p>
                      </div>
                    </div>
                    
                    {/* Accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                      style={{ backgroundColor: software.color }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}