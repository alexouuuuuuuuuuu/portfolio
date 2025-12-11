import { useRef, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Oliveoil } from "./components/Oliveoil";

function HomePage() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero onScrollToProjects={scrollToProjects} />
        </div>
        
        <div ref={projectsRef}>
          <Projects />
        </div>
        
        <div id="journey">
          <Journey />
        </div>
        
        <Contact />
      </main>
      
      <Footer />
      
      <Toaster position="bottom-right" />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oliveoil" element={<Oliveoil />} />
      </Routes>
    </BrowserRouter>
  );
}
