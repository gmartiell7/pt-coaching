"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        q: "Offri personal training a Milano?",
        a: "Sì, lavoro come personal trainer a Milano offrendo allenamenti personalizzati in presenza, a domicilio e online.",
    },
    {
        q: "È possibile allenarsi online?",
        a: "Assolutamente sì. Il coaching online è ideale se vivi a Milano ma hai poco tempo o preferisci allenarti da casa.",
    },
    {
        q: "Quanto costa un personal trainer a Milano?",
        a: "Il costo dipende dal percorso scelto. Dopo una consulenza gratuita valuto le tue esigenze e propongo la soluzione più adatta.",
    },
    {
        q: "Dove si svolgono gli allenamenti?",
        a: "Gli allenamenti si svolgono a Milano in palestra, a domicilio oppure online, in base alle tue preferenze.",
    },
    {
        q: "Offri una consulenza gratuita?",
        a: "Sì, la prima consulenza è gratuita e serve a definire obiettivi e strategia di allenamento.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
                Domande Frequenti
            </h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.12 },
                    },
                }}
                className="space-y-4"
            >
                {faqs.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="border border-white/10 rounded-2xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full flex justify-between items-center p-6 text-left"
                        >
                            <span className="font-medium">{item.q}</span>
                            <motion.span
                                animate={{ rotate: open === i ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-2xl"
                            >
                                +
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {open === i && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="px-6 pb-6 text-sm text-white/80"
                                >
                                    {item.a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
