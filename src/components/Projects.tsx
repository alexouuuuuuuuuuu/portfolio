import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, X } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

const projects = [
  {
    id: 1,
    title: "Refonte UI/UX E-commerce",
    description: "Conception d'une interface moderne pour une plateforme de vente en ligne avec parcours utilisateur optimisé.",
    fullDescription: "Projet de refonte complète d'une plateforme e-commerce avec focus sur l'expérience utilisateur. J'ai réalisé une étude approfondie des parcours utilisateurs, créé des wireframes, des maquettes haute-fidélité et un prototype interactif. Le design met l'accent sur la simplicité, la clarté et l'accessibilité pour maximiser les conversions.",
    technologies: ["Figma", "Prototyping", "User Research"],
    category: "UI/UX",
    image: "./src/assets/projets/olive-oil.png",
    link: "#",
    size: "large",
  },
  {
    id: 2,
    title: "Produire du contenu multimédia",
    description: "J'ai choisi l'univers de Subway Surfer pour ce projet.",
    fullDescription: "Il nous a été demandé de créer, développer et promouvoir un site web e-commerce inspiré des plateformes comme Le Bon Coin, Vinted, … adapté à l'univers d'un jeu vidéo emblématique de votre choix (par exemple : Mario, Zelda, etc.). ",
    technologies: ["HTML", "CSS", "JavaScript", "Motion"],
    category: "3D",
    image: "./src/assets/projets/subway-surfer.png",
    link: "#",
    size: "medium",
  },
  {
    id: 3,
    title: "Vidéo Promotionnelle",
    description: "Réalisation d'une vidéo de présentation dynamique avec motion design et effets visuels.",
    fullDescription: "Production complète d'une vidéo promotionnelle incluant le storyboard, le tournage, le montage et les effets spéciaux. J'ai créé des animations motion design pour dynamiser le message et captiver l'audience. Le projet a nécessité une coordination étroite avec le client pour respecter sa vision.",
    technologies: ["Premiere Pro", "After Effects", "Illustrator"],
    category: "Vidéo",
    image: "./src/assets/projets/pokeduel.png",
    link: "#",
    size: "medium",
  },
  {
    id: 4,
    title: "Créer pour une campagne de communication visuelle",
    description: "Campagne de communication visuelle pour la création d’un “Bar à thème”",
    fullDescription: "Il nous a été demandé de créer et de mettre en place une campagne de communication visuelle pour la création d’un 'Bar à thème'. Le thème du bar et la ville m'ont été imposés : Bar médiéval à Anvers en Belgique.",
    technologies: ["Figma", "Prototyping", "Benchmarking"],
    category: "UI/UX",
    image: "./src/assets/projets/lebarbare.png",
    link: "#",
    size: "tall",
  },
  {
    id: 5,
    title: "Identité Visuelle Startup",
    description: "Développement complet d'une charte graphique incluant logo, typographie et palette de couleurs.",
    fullDescription: "Création d'une identité visuelle complète pour une startup innovante. Le projet englobait la conception du logo, le choix de la typographie, la définition de la palette de couleurs et la création d'un guide de style. J'ai également développé des supports de communication print et digital.",
    technologies: ["Illustrator", "InDesign", "Photoshop"],
    category: "Communication visuelle",
    image: "./src/assets/projets/glow-pong.png",
    link: "#",
    size: "medium",
  },
  {
    id: 6,
    title: "Produire des contenus pour une communication plurimédia",
    description: "Promouvoir l'évenement du Digital Clean Up.",
    fullDescription: "Le prochain événement du Digital Clean Up aura lieu le 25 mars 2025. Pour l'occasion, l'organisation souhaite cibler les moins de 25 ans. Il nous a donc été demandé de promouvoir cette action.",
    technologies: ["Figma", "Prototyping", "Stratégie de communication", "Newsletter", "Réseaux sociaux"],
    category: "Communication visuelle",
    image: "./src/assets/projets/digital-cleanup.png",
    link: "#",
    size: "medium",
  },
  {
    id: 7,
    title: "Concevoir des visualisations de données pour le web",
    description: "Suite à une collaboration avec OpenData University, nous avons créé un ensemble de supports numériques",
    fullDescription: "Dans le cadre d’une collaboration avec OpenData University, nous avez été sollicités pour créer un ensemble de supports numériques en groupe de trois visant à informer et sensibiliser le public sur un des thèmes liés à la culture.",
    technologies: ["GSAP", "HTML", "CSS", "Figma"],
    category: "Web design",
    image: "./src/assets/projets/data-visualisation.png",
    link: "#",
    size: "tall",
  },
  {
    id: 8,
    title: "Créer un site WordPress de type “click & collect”",
    description: "Nous avons choisi de travailler sur Daniel Wellington, une marque suédoise renommée pour ses montres élégantes et minimalistes",
    fullDescription: "Il nous a été demandé par binômes de concevoir et de développer des parcours utilisateurs au sein d'un système d'information, en combinant le développement web, le design d'expérience et la gestion de projet. Nous devions créer un site WordPress de type “click & collect” pour une enseigne choisie en gardant la même charte graphique.",
    technologies: ["WordPress", "Figma", "user flows", "Wireframes"],
    category: "UI/UX",
    image: "./src/assets/projets/danniel-wellington.png",
    link: "#",
    size: "large",
  },
  {
    id: 9,
    title: "Dashboard Analytique",
    description: "Interface d'administration pour la visualisation de données complexes avec graphiques interactifs.",
    fullDescription: "Conception d'un dashboard complet pour la gestion et l'analyse de données. J'ai créé une hiérarchie visuelle claire, intégré des graphiques interactifs et optimisé l'expérience pour les utilisateurs professionnels. Le design privilégie la lisibilité et l'efficacité.",
    technologies: ["Figma", "Data Visualization", "Adobe XD"],
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYxMDU0MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    size: "medium",
  },
  {
    id: 10,
    title: "Clip Musical Animé",
    description: "Production d'un clip vidéo avec animations 2D et effets de transition créatifs.",
    fullDescription: "Réalisation complète d'un clip musical mêlant prises de vues réelles et animations 2D. J'ai conçu le storyboard, animé les séquences graphiques et assuré le montage final. Le projet demandait une synchronisation parfaite avec la musique et un style visuel unique.",
    technologies: ["After Effects", "Premiere Pro", "Illustrator"],
    category: "Vidéo",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0aW1lbGluZXxlbnwxfHx8fDE3NjA5NTY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    size: "medium",
  },
  {
    id: 11,
    title: "Architecture 3D Moderne",
    description: "Visualisation architecturale 3D d'un bâtiment contemporain avec environnement paysager.",
    fullDescription: "Création de rendus architecturaux photoréalistes pour un projet immobilier. J'ai modélisé l'ensemble du bâtiment et de son environnement, travaillé l'éclairage naturel et créé plusieurs vues pour présenter le projet sous différents angles. Les rendus ont été utilisés pour la communication commerciale.",
    technologies: ["Blender", "V-Ray", "Photoshop"],
    category: "3D",
    image: "https://images.unsplash.com/photo-1668672355709-a2f199a65201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFyY2hpdGVjdHVyZSUyMHJlbmRlcnxlbnwxfHx8fDE3NjEwNTQwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    size: "medium",
  },
  {
    id: 12,
    title: "Campagne d'Affichage",
    description: "Série de posters et affiches publicitaires pour une campagne de communication urbaine.",
    fullDescription: "Conception d'une campagne d'affichage complète avec déclinaison sur différents formats. J'ai développé un concept visuel fort, créé les visuels et adapté les créations aux contraintes techniques de l'affichage urbain. Le projet incluait aussi la déclinaison digitale pour les réseaux sociaux.",
    technologies: ["Photoshop", "Illustrator", "InDesign"],
    category: "Communication visuelle",
    image: "https://images.unsplash.com/photo-1621974714993-465ae51a4483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjBncmFwaGljfGVufDF8fHx8MTc2MDkzNzYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    size: "medium",
  },
];

const categories = ["Tous", "UI/UX", "Web design", "Vidéo", "3D", "Communication visuelle"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="projects">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionTitle subtitle="Découvrez une sélection de mes réalisations en design graphique, développement web et création de contenu multimédia.">
          Mes Projets
        </SectionTitle>

        {/* Categories - Modern tabs style */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative inline-flex items-center justify-center w-full">
            <div className="inline-flex flex-wrap items-center gap-2 p-2 bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 rounded-2xl backdrop-blur-sm border border-secondary/20 shadow-lg">
              {categories.map((category, index) => {
                const isActive = activeCategory === category;
                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "text-white shadow-md" 
                        : "text-foreground hover:text-primary"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bento Box Grid - Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]" style={{ gridAutoFlow: 'dense' }}>
          {filteredProjects.map((project, index) => {
            // Define grid span based on size
            let gridClass = "";
            if (project.size === "large") {
              gridClass = "md:col-span-2 md:row-span-2";
            } else if (project.size === "tall") {
              gridClass = "md:row-span-2";
            } else {
              gridClass = "md:col-span-1 md:row-span-1";
            }

            return (
              <motion.div
                key={project.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className={gridClass}
              >
                <Card 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image background */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-primary/95 group-hover:via-primary/60 transition-all duration-500" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative h-full flex flex-col justify-end p-4 text-white">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 mb-2 w-fit text-xs">
                      {project.category}
                    </Badge>
                    
                    <CardTitle className="mb-1 text-white group-hover:text-[#CCE0F5] transition-colors text-lg leading-tight">
                      {project.title}
                    </CardTitle>
                    
                    <CardDescription className="text-white/80 text-xs mb-3 line-clamp-2 group-hover:line-clamp-3 transition-all leading-relaxed">
                      {project.description}
                    </CardDescription>

                    {/* View project button - appears on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="flex items-center gap-2 text-xs text-[#CCE0F5]">
                        <span>Voir le projet</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Load more hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Plus de projets à venir...
          </p>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {selectedProject.category}
                    </Badge>
                  </div>
                </div>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Full Description */}
                <div>
                  <h4 className="mb-3 text-primary">Description détaillée</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="mb-3 text-primary">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    Fermer
                  </button>
                  <a
                    href={selectedProject.link}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Voir le projet</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}