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

export default function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

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
