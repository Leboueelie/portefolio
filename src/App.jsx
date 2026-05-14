import { useState, useEffect, useRef } from "react";
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
  // Curseur : refs uniquement, pas de state
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const cursorTextRef = useRef(null);
  const cursorVariant = useRef("default");

  const [preloaderDone, setPreloaderDone] = useState(false);
  const { dark, toggleDark, cycleAccent, eco, toggleEco } = useTheme();

  // Curseur optimisé avec requestAnimationFrame
  useEffect(() => {
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;
    const textEl = cursorTextRef.current;
    if (!dot || !outline) return;

    let rafId;
    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = () => {
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      outline.style.transform = `translate(${mouseX - 16}px, ${mouseY - 16}px)`;
      rafId = null;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updateCursor);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, .clickable, [data-cursor]");
      if (target) {
        const text =
          target.getAttribute("data-cursor") ||
          target.textContent?.trim().slice(0, 12) ||
          "";
        if (textEl) {
          textEl.textContent = text;
          textEl.style.display = "block";
        }
        outline.classList.add("cursor-hover");
        cursorVariant.current = "hover";
      } else {
        if (textEl) textEl.style.display = "none";
        outline.classList.remove("cursor-hover");
        cursorVariant.current = "default";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Désactiver le curseur si mode éco ou tactile
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const disableCursor = eco || isTouchDevice;
    document.body.style.cursor = disableCursor ? "auto" : "none";
    if (cursorDotRef.current)
      cursorDotRef.current.style.display = disableCursor ? "none" : "block";
    if (cursorOutlineRef.current)
      cursorOutlineRef.current.style.display = disableCursor ? "none" : "block";
  }, [eco]);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, // plus léger
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
          {/* Curseur personnalisé (aucun re‑render) */}
          <div ref={cursorDotRef} className="cursor-dot" />
          <div ref={cursorOutlineRef} className="cursor-outline">
            <span ref={cursorTextRef} className="cursor-text" />
          </div>

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
