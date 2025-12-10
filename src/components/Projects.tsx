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
    title: "One page pour Olive Oil",
    description: "aacréer un site internet pour une marque d'huile d'olive reflétant leur encrage territorial ainsi que l'univers prestigieux de la marque",
    fullDescription: "Olive Oil, marque d'huile d'olive 100 % italienne, lance sa nouvelle huile premium avec des ingrédients haut de gamme. Pour accompagner ce lancement, ils souhaitent créer un site internet reflétant leur encrage territorial ainsi que l'univers prestigieux de la marque, destiné à une clientèle exigeante. Le design du site devra être élégant, moderne et raffiné, tout en respectant l'identité visuelle existante (couleurs, typographie, logo).Le contenu présentera de manière claire et originale la marque, ses valeurs et son produit. L'expérience utilisateur devra inciter à l’achat, tout en véhiculant une ambiance exclusive et sophistiquée.",
    technologies: ["Figma", "Prototyping", "User Research"],
    categories: ["UI/UX"], 
    image: "./assets/projets/olive-oil.png",
    link: "./src/page/Oliveoil.html",
    size: "large",
  },
  {
    id: 2,
    title: "Produire du contenu multimédia",
    description: "J'ai choisi l'univers de Subway Surfer pour ce projet.",
    fullDescription: "Il nous a été demandé de créer, développer et promouvoir un site web e-commerce inspiré des plateformes comme Le Bon Coin, Vinted, … adapté à l'univers d'un jeu vidéo emblématique de votre choix (par exemple : Mario, Zelda, etc.). ",
    technologies: ["HTML", "CSS", "JavaScript", "Blender", "After Effects"],
    categories: ["3D", "UI/UX", "Web design", "Vidéo"], 
    image: "./assets/projets/subway-surfer.png",
    link: "#",
    size: "medium",
  },
  {
    id: 3,
    title: "Concept d'application mobile",
    description: "Réalisation d'une vidéo de présentation dynamique avec motion design et effets visuels.",
    fullDescription: "Production complète d'une vidéo promotionnelle incluant le storyboard, le tournage, le montage et les effets spéciaux. J'ai créé des animations motion design pour dynamiser le message et captiver l'audience. Le projet a nécessité une coordination étroite avec le client pour respecter sa vision.",
    technologies: ["Figma"],
    categories: ["UX/UI"],
    image: "./assets/projets/pokeduel.png",
    link: "#",
    size: "medium",
  },

  {
    id: 4,
    title: "livre de cuisine",
    description: "Visualisation architecturale 3D d'un bâtiment contemporain avec environnement paysager.",
    fullDescription: "Création de rendus architecturaux photoréalistes pour un projet immobilier. J'ai modélisé l'ensemble du bâtiment et de son environnement, travaillé l'éclairage naturel et créé plusieurs vues pour présenter le projet sous différents angles. Les rendus ont été utilisés pour la communication commerciale.",
    technologies: ["InDesign"],
    categories: ["Communication visuelle"],
    image: "./assets/projets/livre-recette.png",
    link: "#",
      size: "tall",
    },
  {
    id: 5,
    title: "Créer pour une campagne de communication visuelle",
    description: "Campagne de communication visuelle pour la création d'un 'Bar à thème'",
    fullDescription: "Il nous a été demandé de créer et de mettre en place une campagne de communication visuelle pour la création d'un 'Bar à thème'. Le thème du bar et la ville m'ont été imposés : Bar médiéval à Anvers en Belgique.",
    technologies: ["Figma", "Prototyping", "Benchmarking"],
    categories: ["UI/UX", "Communication visuelle"], 
    image: "./assets/projets/lebarbare.png",
    link: "#",
    size: "medium",
  },
  {
    id: 6,
    title: "Identité Visuelle Startup",
    description: "Développement complet d'une charte graphique incluant logo, typographie et palette de couleurs.",
    fullDescription: "Création d'une identité visuelle complète pour une startup innovante. Le projet englobait la conception du logo, le choix de la typographie, la définition de la palette de couleurs et la création d'un guide de style. J'ai également développé des supports de communication print et digital.",
    technologies: ["Illustrator", "InDesign", "Photoshop"],
    categories: ["UX/UI"],
    image: "./assets/projets/glow-pong.png",
    link: "#",
    size: "medium",
  },
  {
    id: 7,
    title: "Produire des contenus pour une communication plurimédia",
    description: "Promouvoir l'évenement du Digital Clean Up.",
    fullDescription: "Le prochain événement du Digital Clean Up aura lieu le 25 mars 2025. Pour l'occasion, l'organisation souhaite cibler les moins de 25 ans. Il nous a donc été demandé de promouvoir cette action.",
    technologies: ["Figma", "Prototyping", "Stratégie de communication", "Newsletter", "Réseaux sociaux"],
    categories: ["Communication visuelle"],
    image: "./assets/projets/digital-cleanup.png",
    link: "#",
    size: "medium",
  },



  {
    id: 8,
    title: "Nuit du Code",
    description: "Création d’un mini-jeu p5.js et d’une landing page sobre pour sensibiliser à la pollution numérique.",
    fullDescription: "Projet réalisé dans le cadre de la Nuit MMI 2025 : conception d’un jeu interactif en p5.js mettant en scène les gestes permettant de réduire la pollution numérique, ainsi que d’une landing page entièrement en anglais présentant le projet et les pistes d’amélioration pour une version 2. Le travail inclut une hiérarchie visuelle simple et efficace, une attention portée à la sobriété numérique (optimisation du poids des fichiers, limitation des médias lourds) et une mise en page pensée pour la clarté et l’impact pédagogique.",
    technologies: ["Figma", "p5.js", "HTML/CSS"],
    categories: ["UI/UX", "Web design"],
    image: "./assets/projets/nuitcode.png",
    link: "#",
    size: "medium",
  },
  {
    id: 9,
    title: "vr",
    description: "Production d'un clip vidéo avec animations 2D et effets de transition créatifs.",
    fullDescription: "Réalisation complète d'un clip musical mêlant prises de vues réelles et animations 2D. J'ai conçu le storyboard, animé les séquences graphiques et assuré le montage final. Le projet demandait une synchronisation parfaite avec la musique et un style visuel unique.",
    technologies: ["After Effects", "Premiere Pro", "Illustrator"],
    categories: ["Web design", "3D"], 
    image: "./assets/projets/vr.png",
    link: "#",
    size: "medium",
  },

  {
    id: 10,
    title: "Concevoir des visualisations de données pour le web",
    description: "Suite à une collaboration avec OpenData University, nous avons créé un ensemble de supports numériques",
    fullDescription: "Dans le cadre d'une collaboration avec OpenData University, nous avez été sollicités pour créer un ensemble de supports numériques en groupe de trois visant à informer et sensibiliser le public sur un des thèmes liés à la culture.",
    technologies: ["GSAP", "HTML", "CSS", "Figma"],
    categories: ["Web design"],
    image: "./assets/projets/data-visualisation.png",
    link: "#",
    size: "tall",
  },

  {
    id: 11,
    title: "Créer un site WordPress de type 'click & collect'",
    description: "Nous avons choisi de travailler sur Daniel Wellington, une marque suédoise renommée pour ses montres élégantes et minimalistes",
    fullDescription: "Il nous a été demandé par binômes de concevoir et de développer des parcours utilisateurs au sein d'un système d'information, en combinant le développement web, le design d'expérience et la gestion de projet. Nous devions créer un site WordPress de type \"click & collect\" pour une enseigne choisie en gardant la même charte graphique.",
    technologies: ["WordPress", "Figma", "user flows", "Wireframes"],
    categories: ["UI/UX", "Web design"],
    image: "./assets/projets/danniel-wellington.png",
    link: "#",
    size: "large",
  },

  {
    id: 12,
    title: "Refonte du site web d’une cave à vin",
    description: "Refaire son site web en intégrant une partie retreinte pour les professionnels, pour qu’ils puissent passer commande pour leurs évènements",
    fullDescription: "Romane est une caviste indépendante implantée à Haute-Goulaine, passionnée par le vin et engagée dans la mise en valeur de producteurs authentiques. Elle propose une sélection soignée de vins, spiritueux et autres produits du terroir, avec un service personnalisé, que ce soit en boutique ou à l’occasion d’événements. Un site web est déjà en ligne, conçu par sa belle-sœur. Celui-ci adopte une structure en one-page, ce qui limite ses performances en référencement naturel (SEO)*. En effet, l’absence de pages distinctes empêche l’optimisation par thématique (mots-clés, titres, balises, liens internes, etc.), ce qui restreint la visibilité sur les moteurs de recherche. Sur le plan visuel, le site est fonctionnel mais minimaliste, et ne reflète pas pleinement l'identité, l’expertise et la chaleur de l’activité. Une refonte ou une évolution vers un site multi-pages, plus engageant et mieux optimisé pour le SEO*, permettrait de mieux mettre en avant la personnalité de Romane, son savoir-faire ainsi que ses offres uniques.",
    technologies: ["Figma", "WordPress"],
    categories: ["UI/UX", "Web design"],
    image: "./assets/projets/fiefdesvins.png",
    link: "#",
    size: "medium",
  },
];

const categories = ["Tous", "UI/UX", "Web design", "Vidéo", "3D", "Communication visuelle"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  // Updated filter logic to check if project categories include the active category
  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.categories.includes(activeCategory));

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="projects">
      
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
                    {/* Display all categories as badges */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.categories.map((cat) => (
                        <Badge key={cat} className="bg-white/20 backdrop-blur-md text-white border-white/30 w-fit text-xs">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    
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
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {selectedProject.categories.map((cat) => (
                      <Badge key={cat} className="bg-primary text-white">
                        {cat}
                      </Badge>
                    ))}
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