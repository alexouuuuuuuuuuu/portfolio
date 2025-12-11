import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "./Navigation";

export function Oliveoil() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    window.location.href = "/portfolio/";
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="./assets/projets/olive-oil.png"
          alt="Olive Oil Project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Bouton retour */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate("/")}
          className="absolute top-28 left-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all flex items-center justify-center group z-10"
        >
          <ArrowLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </motion.button>

        {/* Contenu Hero */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-6xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold mb-6"
            >
              UI/UX
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              One page pour Olive Oil
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed"
            >
              Création d'un site internet pour une marque d'huile d'olive reflétant leur ancrage territorial ainsi que l'univers prestigieux de la marque
            </motion.p>
          </div>
        </div>
      </section>

     {/* Info Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-24 mb-20">
        <div className="container mx-auto max-w-6xl p-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-row justify-center items-center gap-8"
          >
            {/* Durée */}
            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Durée</h3>
                <p className="text-white/70">3 semaines</p>
              </div>
            </motion.div>

            {/* Équipe */}
            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Équipe</h3>
                <p className="text-white/70">Projet individuel</p>
              </div>
            </motion.div>

            {/* Objectif */}
            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <Target className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Objectif</h3>
                <p className="text-white/70">Design UI/UX premium</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contenu Principal */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Contexte du projet */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-8 text-primary">Contexte du projet</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Olive Oil, marque d'huile d'olive 100 % italienne, lance sa nouvelle huile premium avec des ingrédients haut de gamme. Pour accompagner ce lancement, ils souhaitent créer un site internet reflétant leur ancrage territorial ainsi que l'univers prestigieux de la marque, destiné à une clientèle exigeante.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Le design du site devra être élégant, moderne et raffiné, tout en respectant l'identité visuelle existante (couleurs, typographie, logo). Le contenu présentera de manière claire et originale la marque, ses valeurs et son produit. L'expérience utilisateur devra inciter à l'achat, tout en véhiculant une ambiance exclusive et sophistiquée.
              </p>
            </div>
          </motion.section>

          {/* Objectifs */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-8 text-primary">Objectifs du projet</h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Refléter l'identité de la marque",
                  description: "Créer une expérience visuelle qui met en valeur l'ancrage territorial italien et le positionnement premium"
                },
                {
                  title: "Optimiser le parcours utilisateur",
                  description: "Concevoir un parcours fluide et intuitif qui guide l'utilisateur vers l'achat"
                },
                {
                  title: "Design élégant et moderne",
                  description: "Proposer une interface raffinée qui respecte l'identité visuelle existante"
                },
                {
                  title: "Cibler une clientèle exigeante",
                  description: "Créer une ambiance exclusive et sophistiquée adaptée au positionnement premium"
                }
              ].map((objective, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-xl border border-accent-light/20 hover:border-accent-light/40 transition-all hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600">{objective.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

            {/* Etapes du projet - version plus esthétique */}
            <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
            >
            <h2 className="text-4xl font-bold mb-8 text-primary">Étapes du projet</h2>

            <div className="gap-8 flex flex-col">
              {[
              {
                step: "01",
                title: "Recherche & Analyse",
                description:
                "Étude de la concurrence, analyse de la cible et définition du positionnement"
              },
              {
                step: "02",
                title: "Wireframing",
                description:
                "Création de maquettes basse-fidélité pour définir la structure et l'architecture de l'information"
              },
              {
                step: "03",
                title: "Design UI",
                description:
                "Conception des maquettes haute-fidélité en respectant l'identité visuelle de la marque"
              },
              {
                step: "04",
                title: "Prototypage",
                description:
                "Création d'un prototype interactif pour tester les parcours utilisateurs"
              }
              ].map((phase, index, arr) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 80 }}
                className="flex gap-6 items-start"
              >
                {/* Timeline / Number */}
                <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-light text-white flex items-center justify-center text-lg font-semibold shadow-lg transform-gpu">
                  {phase.step}
                </div>
                {index < arr.length - 1 && (
                  <div className="w-px h-12 bg-accent-light/20 mt-4 rounded" />
                )}
                </div>

                {/* Card */}
                <div className="flex-1 p-6 bg-white/6 backdrop-blur-sm rounded-2xl border border-white/6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">
                  {phase.title}
                  </h3>
                  <span className="text-sm text-accent/80 font-medium">{index + 1}/{arr.length}</span>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
                </div>
              </motion.div>
              ))}
            </div>
            </motion.section>

          {/* Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-8 text-primary">Technologies & Outils</h2>
            <div className="flex flex-wrap gap-4">
              {["Figma", "Prototyping", "User Research", "Adobe XD"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Galerie */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-8 text-primary">Aperçu du projet</h2>
            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow"
              >
                <img
                  src="./assets/projets/olive-oil.png"
                  alt="Olive Oil Design"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Résultats */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-8 text-primary">Résultats & Apprentissages</h2>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 md:p-12 rounded-2xl">
              <p className="text-lg leading-relaxed mb-6">
                Ce projet m'a permis de développer mes compétences en design UI/UX pour des marques premium. J'ai appris à créer une expérience utilisateur raffinée qui reflète les valeurs d'une marque tout en optimisant le parcours d'achat.
              </p>
              <p className="text-lg leading-relaxed">
                L'attention portée aux détails visuels et à la cohérence de l'identité de marque a été essentielle pour créer une expérience immersive et exclusive.
              </p>
            </div>
          </motion.section>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={handleHomeClick}
              className="cursor-pointer px-8 py-6 bg-gray-300 text-primary rounded-xl hover:bg-gray-200 transition-all text-lg font-semibold"
            >
              ← Retour aux projets
            </button>
            <a
              href="https://www.figma.com/proto/your-prototype-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-6 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-2xl transition-all text-lg font-semibold flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <span>Voir le prototype</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-20 text-center"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Intéressé par mon travail ?</h3>
          <p className="text-xl opacity-80 mb-8">
            Découvrez mes autres projets ou contactez-moi
          </p>
          <button
            onClick={() => navigate("/#projects")}
            className="inline-block px-8 py-6 bg-white text-primary rounded-xl hover:bg-white/90 transition-all text-lg font-semibold"
          >
            Voir tous les projets
          </button>
        </div>
      </motion.div>
    </div>
  );
}