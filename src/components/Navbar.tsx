"use client";

import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useScroll,
    useMotionValueEvent,
    AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";

// ✅ componenti intermedi (fix parser SWC)
const MotionNav = motion.nav;
const MotionDiv = motion.div;

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    // ✅ Scroll lock mobile
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <MotionNav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-zinc-900/60 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-poppins font-bold text-xl">
                    <Image
                        src="/brand/logoB.png"
                        alt="Logo palestra"
                        width={70}
                        height={28}
                        className="rounded-sm"
                        priority
                    />
                    
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/chi-sono">Chi sono</Link>
                    <Link href="/servizi">Servizi</Link>
                    <Link href="/percorsi">Percorsi</Link>
                    <Link href="/contatti">Contatti</Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Apri menu"
                >
                    <span className="block w-6 h-0.5 bg-white mb-1" />
                    <span className="block w-6 h-0.5 bg-white mb-1" />
                    <span className="block w-6 h-0.5 bg-white" />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <MotionDiv
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="flex flex-col px-6 py-6 gap-6 text-lg">
                            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link href="/chi-sono" onClick={() => setOpen(false)}>Chi sono</Link>
                            <Link href="/servizi" onClick={() => setOpen(false)}>Servizi</Link>
                            <Link href="/percorsi" onClick={() => setOpen(false)}>Percorsi</Link>
                            <Link
                                href="/contatti"
                                onClick={() => setOpen(false)}
                                className="text-red-500 font-semibold"
                            >
                                Contatti
                            </Link>
                        </div>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </MotionNav>
    );
}
