import Link from "next/link";
import { FadeIn, MotionCard, MotionButton } from "@/components/motion";

export default function PercorsiPage() {
    return (
        <div className="pt-16">
            {/* HERO */}
            <FadeIn>
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h1 className="font-poppins text-4xl md:text-5xl font-bold leading-tight">
                    Percorsi strutturati.<br />Risultati concreti.
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                    Non semplici allenamenti, ma percorsi guidati pensati per accompagnarti
                    passo dopo passo verso il tuo obiettivo.
                </p>
            </section>
            </FadeIn>

            {/* PERCORSI */}
            <FadeIn>
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-3 gap-10">
                        {/* Percorso 1 */}
                        <MotionCard>
                    <div className="border border-white/10 rounded-2xl p-8 flex flex-col">
                        <h3 className="font-poppins text-2xl font-bold mb-4">Ricomposizione Corporea</h3>
                        <p className="text-gray-300 mb-6">
                            Per chi vuole perdere grasso, tonificare e migliorare la propria
                            forma fisica in modo sostenibile.
                        </p>
                        <ul className="text-gray-400 mb-8 space-y-2">
                            <li>• Allenamenti personalizzati</li>
                            <li>• Progressione guidata</li>
                            <li>• Supporto costante</li>
                        </ul>
                        <Link href="/contatti" className="mt-auto text-red-500 font-semibold">
                            Voglio iniziare →
                        </Link>
                    </div>
                            </MotionCard>
                        {/* Percorso 2 */}
                        <MotionCard>
                    <div className="border border-red-500 rounded-2xl p-8 flex flex-col bg-zinc-900">
                        <h3 className="font-poppins text-2xl font-bold mb-4">Forza & Performance</h3>
                        <p className="text-gray-300 mb-6">
                            Per chi vuole diventare più forte, migliorare le prestazioni e
                            costruire un fisico solido.
                        </p>
                        <ul className="text-gray-400 mb-8 space-y-2">
                            <li>• Programmazione avanzata</li>
                            <li>• Focus su tecnica ed esecuzione</li>
                            <li>• Monitoraggio continuo</li>
                        </ul>
                        <Link href="/contatti" className="mt-auto text-red-500 font-semibold">
                            Scopri il percorso →
                        </Link>
                            </div>
                            </MotionCard>

                        {/* Percorso 3 */}
                        <MotionCard>
                    <div className="border border-white/10 rounded-2xl p-8 flex flex-col">
                        <h3 className="font-poppins text-2xl font-bold mb-4">Stile di Vita Attivo</h3>
                        <p className="text-gray-300 mb-6">
                            Per chi vuole rimettersi in forma, migliorare energia e benessere
                            senza stress.
                        </p>
                        <ul className="text-gray-400 mb-8 space-y-2">
                            <li>• Allenamenti flessibili</li>
                            <li>• Approccio sostenibile</li>
                            <li>• Adatto a tutti i livelli</li>
                        </ul>
                        <Link href="/contatti" className="mt-auto text-red-500 font-semibold">
                            Inizia ora →
                        </Link>
                            </div>
                            </MotionCard>
                </div>
             </section>
             </FadeIn>

            {/* COME FUNZIONA */}
            <FadeIn>
            <section className="bg-zinc-900/60">
                <div className="max-w-5xl mx-auto px-6 py-24">
                    <h2 className="font-poppins text-3xl font-bold mb-12 text-center">
                        Come funziona
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        <div>
                            <h3 className="font-semibold mb-4">1. Analisi</h3>
                            <p className="text-gray-300">
                                Valutiamo obiettivi, livello e disponibilità.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">2. Percorso</h3>
                            <p className="text-gray-300">
                                Costruiamo il programma più adatto a te.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">3. Risultati</h3>
                            <p className="text-gray-300">
                                Ti accompagno fino al raggiungimento dell’obiettivo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
                        </FadeIn>
            {/* CTA */}
            <FadeIn>
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                    Inizia il tuo percorso oggi
                    </h2>
                    <MotionButton>
                <Link
                    href="/contatti"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-xl transition"
                >
                    Prenota una consulenza gratuita
                        </Link>
                        </MotionButton>
                </section>
                </FadeIn>
        </div>
    );
}
