import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { FaSun, FaMoon, FaLeaf, FaPalette } from "react-icons/fa";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import Lenis from "lenis";

function AppContent() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const { dark, toggleDark, cycleAccent, eco, toggleEco } = useTheme();

  // Lenis smooth scroll (conservé)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Désactiver le curseur custom si mode éco (mais on n'en a plus, donc on garde juste le curseur normal)
  useEffect(() => {
    document.body.style.cursor = "auto"; // toujours auto
  }, []);

  // Easter egg Konami
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
    const handler = (e) => {
      if (e.key === konami[idx]) {
        idx++;
        if (idx === konami.length) {
          alert(
            "🎉 Code Konami activé ! Bienvenue dans le multiverse de LEBOUE ELIE (LBT)",
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
          {/* Plus de curseur custom */}
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />

          <footer className="bg-deep-blue dark:bg-gray-900 text-cream/80 dark:text-gray-300 text-center py-6 text-sm space-y-2">
            <p>
              © {new Date().getFullYear()} LEBOUE ELIE (LBT). Tous droits
              réservés.
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
              >
                <FaPalette className="text-gray-400" />
                <span>Changer l'accent</span>
              </button>
              <button
                onClick={toggleEco}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <FaLeaf className={eco ? "text-green-leaf" : "text-gray-400"} />
                <span>{eco ? "Mode standard" : "Mode éco"}</span>
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
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
