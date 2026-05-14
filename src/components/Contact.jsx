import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sent] = useState(false);
  const [err] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID,
    );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-deep-blue dark:bg-gray-900 relative"
    >
      <div className="max-w-xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-heading font-bold text-white"
        >
          Parlons de votre projet
        </motion.h2>
        <p className="text-cream/80 dark:text-gray-300">
          Une idée, une mission, un stage ? Écrivez-moi.
        </p>

        {sent ? (
          <p className="text-green-leaf font-semibold">✅ Message envoyé !</p>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="email"
              name="user_email"
              placeholder="Votre email"
              required
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-burnt-orange"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Votre message"
              required
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-burnt-orange"
            />
            <button
              type="submit"
              data-cursor="Envoyer"
              className="clickable px-8 py-3 bg-burnt-orange hover:bg-burnt-orange/90 text-white font-bold rounded-xl transition-transform transform hover:-translate-y-1 shadow-xl"
            >
              Envoyer
            </button>
          </form>
        )}
        {err && <p className="text-red-400">{err}</p>}

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/elie-leboue-0658b0294/"
            className="text-white/70 hover:text-burnt-orange"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Leboueelie"
            className="text-white/70 hover:text-burnt-orange"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
