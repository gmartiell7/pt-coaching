"use client";

// 1️⃣ Installazione
// yarn add framer-motion

// 2️⃣ Wrapper animato riutilizzabile
import { motion } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// 3️⃣ Hover button (CTA)
export function MotionButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}

// 4️⃣ Card animata (servizi / percorsi)
export function MotionCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      {children}
    </motion.div>
  );
}

// 5️⃣ ESEMPIO USO
// <FadeIn>
//   <h2>Sezione animata</h2>
// </FadeIn>

// <MotionButton>
//   <Link className="bg-red-600 px-8 py-4 rounded-xl">CTA</Link>
// </MotionButton>

// <MotionCard>
//   <div className="border rounded-2xl p-8">Card</div>
// </MotionCard>
