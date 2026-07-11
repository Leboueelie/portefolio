import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealMaskProps {
  children: ReactNode;
  className?: string;
}

export default function RevealMask({ children, className }: RevealMaskProps) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="origin-bottom"
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-accent"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}
