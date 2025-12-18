import Link from "next/link";
import { FadeIn, MotionCard, MotionButton } from "@/components/motion";

export default function ServiziPage() {
    return (
        <div className="pt-16">
            {/* HERO */}
            <FadeIn>
                <section className="bg-zinc-900 py-24">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Servizi su misura per i tuoi obiettivi
                        </h1>
                        <p className="text-lg text-gray-300">
                            In presenza o online, ogni percorso è costruito attorno a te,
                            al tuo livello e al tuo stile di vita.
                        </p>
                    </div>
                </section>
            </FadeIn>

            {/* SERVIZI */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid gap-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <MotionCard>
                        <div className="border border-white/10 rounded-2xl p-8 h-full">
                            <h3 className="text-xl font-semibold mb-4">Personal Training</h3>
                            <p className="text-gray-400 mb-6">
                                Allenamenti individuali in palestra o a domicilio. Ogni sessione
                                è focalizzata su tecnica, sicurezza e risultati concreti.
                            </p>
                            <ul className="text-gray-400 space-y-2">
                                <li>• Programmazione personalizzata</li>
                                <li>• Correzione tecnica costante</li>
                                <li>• Monitoraggio progressi</li>
                            </ul>
                        </div>
                    </MotionCard>

                    <MotionCard>
                        <div className="border border-white/10 rounded-2xl p-8 h-full">
                            <h3 className="text-xl font-semibold mb-4">Coaching Online</h3>
                            <p className="text-gray-400 mb-6">
                                Allenati ovunque con un supporto continuo. Avrai un piano chiaro
                                e adattabile, con feedback settimanali.
                            </p>
                            <ul className="text-gray-400 space-y-2">
                                <li>• Programmi aggiornati</li>
                                <li>• Check settimanali</li>
                                <li>• Supporto diretto</li>
                            </ul>
                        </div>
                    </MotionCard>

                    <MotionCard>
                        <div className="border border-white/10 rounded-2xl p-8 h-full">
                            <h3 className="text-xl font-semibold mb-4">Ricondizionamento</h3>
                            <p className="text-gray-400 mb-6">
                                Percorsi sicuri per tornare ad allenarti dopo infortuni o lunghi
                                periodi di stop, rispettando i tuoi tempi.
                            </p>
                            <ul className="text-gray-400 space-y-2">
                                <li>• Recupero graduale</li>
                                <li>• Prevenzione infortuni</li>
                                <li>• Lavoro posturale</li>
                            </ul>
                        </div>
                    </MotionCard>
                </div>
            </section>

            {/* CTA */}
            <FadeIn>
                <section className="bg-black py-24">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Non esistono programmi standard
                        </h2>
                        <p className="text-gray-400 mb-10">
                            Raccontami il tuo obiettivo e costruiremo insieme il percorso
                            migliore per raggiungerlo.
                        </p>
                        <MotionButton>
                            <Link
                                href="/contatti"
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-5 rounded-2xl"
                            >
                                Prenota la consulenza gratuita
                            </Link>
                        </MotionButton>
                    </div>
                </section>
            </FadeIn>
            
        </div>
    );
}
