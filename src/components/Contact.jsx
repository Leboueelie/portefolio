import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    // Récupération des données du formulaire
    const formData = new FormData(form.current);
    const templateParams = {
      from_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_USER_ID,
        },
      )
      .then(() => {
        setSent(true);
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        setErr("L'envoi a échoué. Veuillez réessayer.");
        console.error("Erreur EmailJS :", error);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-deep-blue dark:bg-gray-900 relative transition-colors"
    >
      <div className="max-w-xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-white"
        >
          Parlons de votre projet
        </motion.h2>
        <p className="text-cream/80 dark:text-gray-300">
          Une idée, une mission, un stage ? Écrivez‑moi.
        </p>

        {sent ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-4 px-6 bg-green-leaf/20 border border-green-leaf/40 text-green-leaf rounded-xl font-medium"
          >
            ✅ Message envoyé avec succès ! Je vous répondrai au plus vite.
          </motion.div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Votre nom"
              required
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Votre email"
              required
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Votre message"
              required
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="clickable px-8 py-3 bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-xl shadow-accent/20"
              data-cursor="Envoyer"
            >
              {loading ? "Envoi…" : "Envoyer le message"}
            </button>
          </form>
        )}

        {err && (
          <p className="text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg px-4 py-2">
            {err}
          </p>
        )}

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://linkedin.com/in/leboue-elie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-accent transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/LBT-ELIE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-accent transition-colors"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
