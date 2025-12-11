# Guide : Ajouter de nouveaux projets

## Comment ajouter facilement un nouveau projet avec sa propre page

### Étape 1 : Ajouter le projet dans `Projects.tsx`

Modifiez `src/components/Projects.tsx` et ajoutez un nouvel objet dans le tableau `projects` :

```tsx
{
  id: 2, // Incrémentez l'ID
  title: "Mon Projet",
  description: "Description courte du projet",
  fullDescription: "Description détaillée du projet...",
  technologies: ["Tech1", "Tech2"],
  categories: ["UI/UX", "Web design"],
  image: "./assets/projets/mon-projet.png",
  projectRoute: "mon-projet", // ⚠️ À UTILISER POUR LA ROUTE
  size: "medium", // Options : "large", "tall", "medium"
},
```

### Étape 2 : Créer le composant du projet

Créez un fichier `src/components/MonProjet.tsx` en vous inspirant de `Oliveoil.tsx` :

```tsx
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MonProjet() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="./assets/projets/mon-projet.png"
          alt="Mon Projet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Bouton retour */}
        <motion.button
          onClick={() => navigate("/#projects")}
          className="absolute top-28 left-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all flex items-center justify-center"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </motion.button>

        {/* Contenu */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Mon Projet
          </h1>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Description</h2>
          <p className="text-lg text-gray-600 mb-8">
            Votre contenu ici...
          </p>
        </div>
      </section>
    </div>
  );
}
```

### Étape 3 : Ajouter la route dans `App.tsx`

Modifiez `src/App.tsx` :

```tsx
import { MonProjet } from "./components/MonProjet";

// Dans les Routes :
<Route path="/mon-projet" element={<MonProjet />} />
```

### Exemple complet pour 3 projets

**Projects.tsx (tableau projects) :**
```tsx
{
  id: 1,
  projectRoute: "oliveoil",
  // ...
},
{
  id: 2,
  projectRoute: "subway-surfer",
  // ...
},
{
  id: 3,
  projectRoute: "pokeduel",
  // ...
},
```

**App.tsx (Routes) :**
```tsx
import { Oliveoil } from "./components/Oliveoil";
import { SubwaySurfer } from "./components/SubwaySurfer";
import { Pokeduel } from "./components/Pokeduel";

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/oliveoil" element={<Oliveoil />} />
  <Route path="/subway-surfer" element={<SubwaySurfer />} />
  <Route path="/pokeduel" element={<Pokeduel />} />
</Routes>
```

## ✅ C'est tout !

Le système gère automatiquement :
- ✔️ La navigation lors du clic sur "Voir le projet"
- ✔️ Le bouton retour vers les projets
- ✔️ L'ouverture du modal avant la navigation
- ✔️ Les URL propres sans extensions

## Checklist avant de push :
- [ ] Ajouter le projet dans `Projects.tsx`
- [ ] Créer le composant `XyzProject.tsx`
- [ ] Ajouter l'import et la route dans `App.tsx`
- [ ] Vérifier l'image du projet existe dans `public/assets/projets/`
- [ ] Tester la navigation
