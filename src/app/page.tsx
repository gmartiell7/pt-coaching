"use client";

import Link from "next/link";
import { FadeIn, MotionButton, MotionCard } from "@/components/motion";
import FAQ from "@/components/FAQ";

export default function HomePage() {
    return (
        <div className="pt-16">
            {/* HERO */}
            
                <section className="min-h-[80vh] flex items-center bg-gradient-to-b from-black to-zinc-900">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6">
                            Trasforma il tuo corpo.
                            <br />
                            Costruisci disciplina.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Allenamenti personalizzati in presenza e online per ottenere
                            risultati reali, misurabili e duraturi.
                        </p>
                        <div className="flex justify-center">
                            <MotionButton>
                                <Link
                                    href="/contatti"
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-5 rounded-2xl"
                                >
                                    Prenota consulenza gratuita
                                </Link>
                            </MotionButton>
                        </div>
                    </div>
                </section>
            

            {/* SERVIZI */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Come posso aiutarti
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    <MotionCard>
                        <div className="border border-white/10 rounded-2xl p-8 h-full">
                            <h3 className="text-xl font-semibold mb-4">Personal Training</h3>
                            <p className="text-gray-400">
                                Allenamenti one-to-one in palestra o a domicilio, costruiti su
                                misura per te.
                            </p>
                        </div>
                    </MotionCard>

                    <MotionCard>
                        <div className="border border-white/10 rounded-2xl p-8 h-full">
                            <h3 className="text-xl font-semibold mb-4">Coaching Online</h3>
                            <p className="text-gray-400">
                                Programmi online con supporto costante, check settimanali e
                                adattamenti continui.
                            </p>
                        </div>
                    </MotionCard>

                    <MotionCard>
                        <div className="border border-white/10 rounded-2xl p-8 h-full">
                            <h3 className="text-xl font-semibold mb-4">Ricondizionamento</h3>
                            <p className="text-gray-400">
                                Percorsi sicuri per ripartire dopo infortuni o lunghi periodi di
                                stop.
                            </p>
                        </div>
                    </MotionCard>
                </div>
            </section>

            {/* CTA FINALE */}
            <FadeIn>
                <section className="bg-zinc-900 py-24">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Sei pronto a iniziare?
                        </h2>
                        <p className="text-gray-400 mb-10">
                            Il cambiamento parte da una decisione. Il momento è adesso.
                        </p>
                        <div className="flex justify-center">
                            <MotionButton>
                                <Link
                                    href="/contatti"
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-5 rounded-2xl"
                                >
                                    Contattami ora
                                </Link>
                            </MotionButton>
                        </div>
                    </div>
                </section>
            </FadeIn>
            <FAQ />
        </div>
    );
}
