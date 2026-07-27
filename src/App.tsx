import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { FaSun, FaMoon, FaLeaf, FaPalette } from "react-icons/fa";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Interests from "./components/Interests";
import ThreeScene from "./components/ThreeScene";
import Lenis from "lenis";

function ErrorFallback({ error }: { error: unknown }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-blue text-white p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Oups !</h1>
        <p className="text-cream/80">Une erreur est survenue.</p>
        <pre className="text-sm text-red-300 bg-white/10 p-4 rounded-lg max-w-md mx-auto overflow-auto">
          {error instanceof Error ? error.message : "Erreur inconnue"}
        </pre>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors"
        >
          Recharger la page
        </button>
      </div>
    </div>
  );
}

function AppContent() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const { dark, toggleDark, cycleAccent, eco, toggleEco } = useTheme();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    document.body.style.cursor = "auto";
  }, []);

  useEffect(() => {
    const konami = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let idx = 0;
    const handler = (e: KeyboardEvent) => {
      if (e.key === konami[idx]) {
        idx++;
        if (idx === konami.length) {
          alert(
            "Code Konami active ! Bienvenue dans le multiverse de LEBOUE ELIE (LBT)",
          );
          idx = 0;
        }
      } else {
        idx = 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      {preloaderDone && (
        <div className="overflow-x-hidden">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Stats />
          <Services />
          <Testimonials />
          <Timeline />
          <Interests />
          <ThreeScene />
          <Contact />

          <footer className="bg-deep-blue dark:bg-gray-900 text-cream/80 dark:text-gray-300 text-center py-6 text-sm space-y-2">
            <p>
              (c) {new Date().getFullYear()} LEBOUE ELIE (LBT). Tous droits
              reserves.
            </p>
            <div className="flex justify-center gap-6 items-center">
              <button
                onClick={toggleDark}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                {dark ? (
                  <FaSun className="text-yellow-400" />
                ) : (
                  <FaMoon className="text-gray-400" />
                )}
                <span>{dark ? "Mode clair" : "Mode sombre"}</span>
              </button>
              <button
                onClick={cycleAccent}
                className="flex items-center gap-1 hover:text-white transition-colors"
                title="Changer la couleur d'accent"
              >
                <FaPalette className="text-gray-400" size={14} />
              </button>
              <button
                onClick={toggleEco}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <FaLeaf className={eco ? "text-green-leaf" : "text-gray-400"} />
                <span>{eco ? "Mode standard" : "Mode eco"}</span>
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
