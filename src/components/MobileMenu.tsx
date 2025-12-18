"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.aside
                        className="fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm bg-white p-4 shadow-xl"
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 40, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">Menu</span>
                            <button
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200"
                                onClick={onClose}
                                aria-label="Chiudi menu"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <nav className="mt-6 flex flex-col gap-3 text-base">
                            <Link href="/#home" onClick={onClose} className="py-2">Home</Link>
                            <Link href="/servizi" onClick={onClose} className="py-2">Servizi</Link>
                            <Link href="/#faq" onClick={onClose} className="py-2">FAQ</Link>
                            <Link href="/contatti" onClick={onClose} className="py-2">Contatti</Link>
                            <Link
                                href="/contatti"
                                onClick={onClose}
                                className="mt-2 rounded-xl bg-zinc-900 px-4 py-3 text-center text-white"
                            >
                                Prenota una call
                            </Link>
                        </nav>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
