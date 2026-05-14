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

function AppContent() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [preloaderDone, setPreloaderDone] = useState(false);
  const { dark, toggleDark, cycleAccent, eco, toggleEco } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, .clickable, [data-cursor]");
      if (target) {
        const text =
          target.getAttribute("data-cursor") ||
          target.textContent?.trim().slice(0, 12) ||
          "";
        setCursorText(text);
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
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
    const handler = (e) => {
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
          <div
            className={`cursor-dot ${cursorVariant === "hover" ? "scale-0" : "scale-100"}`}
            style={{ left: mousePos.x - 4, top: mousePos.y - 4 }}
          />
          <div
            className={`cursor-outline ${
              cursorVariant === "hover"
                ? "w-auto h-auto min-w-[40px] px-4 py-1 rounded-full bg-accent border-none"
                : "w-8 h-8 rounded-full border-2"
            }`}
            style={{
              left: mousePos.x - (cursorVariant === "hover" ? 20 : 16),
              top: mousePos.y - (cursorVariant === "hover" ? 20 : 16),
            }}
          >
            {cursorText && cursorVariant === "hover" && (
              <span className="text-white text-xs font-bold whitespace-nowrap">
                {cursorText}
              </span>
            )}
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
              >
                <FaPalette className="text-gray-400" />
                <span>Changer l'accent</span>
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
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
