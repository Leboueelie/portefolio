import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={loading ? {} : { opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-blue"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-center"
      >
        <div className="text-6xl font-heading font-bold gradient-text mb-6">
          LBT
        </div>
        <div className="w-16 h-1 bg-accent rounded-full mx-auto animate-pulse" />
      </motion.div>
    </motion.div>
  );
}
