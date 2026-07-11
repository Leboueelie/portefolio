import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Kouame A.",
    role: "Responsable IT, Ministere",
    avatar: "KA",
    content:
      "Un travail remarquable sur la refonte de notre portail. Professionnalisme, rigueur et une vraie comprehesion des enjeux de l'administration publique.",
    rating: 5,
  },
  {
    name: "Mariam B.",
    role: "Fondatrice, Startup EdTech",
    avatar: "MB",
    content:
      "Elie a developpe notre plateforme e-learning en un temps record. Le code est propre, bien documente, et l'equipe a ete impressionnee par la qualite du livrable.",
    rating: 5,
  },
  {
    name: "Jean-Philippe K.",
    role: "CPO, Agence Digitale",
    avatar: "JP",
    content:
      "J'ai collabore avec Elie sur plusieurs projets full stack. Sa maitrise de React et NestJS est solide, et sa capacite a comprendre le metier fait la difference.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center gradient-text mb-4">
          Ils me recommandent
        </h2>
        <p className="text-center text-charcoal/60 dark:text-gray-400 mb-16 max-w-lg mx-auto">
          Retours de collaborateurs et clients sur mon travail.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 relative"
            >
              <FaQuoteLeft className="text-accent/20 text-3xl absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-deep-blue dark:text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-charcoal/50 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-charcoal/70 dark:text-gray-300 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} className="text-yellow-500 text-xs" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
