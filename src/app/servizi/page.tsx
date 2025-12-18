import Link from "next/link";

export const metadata = {
    title: "Servizi di Personal Training",
    description:
        "Scopri i servizi di personal training: allenamento in palestra, coaching online e percorsi personalizzati.",
};
export default function ServiziPage() {
    return (
        <div className="pt-16">
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h1 className="font-poppins text-4xl md:text-5xl font-bold leading-tight">
                    Non esistono allenamenti standard.<br />Esiste il tuo.
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                    Allenamenti personalizzati, supporto costante e percorsi costruiti sui
                    tuoi obiettivi. In presenza o online.
                </p>
            </section>

            {/* IN PRESENZA */}
            <section className="bg-zinc-900/60">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <h2 className="font-poppins text-3xl font-bold mb-12">
                        Allenamenti in presenza
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="border border-white/10 rounded-2xl p-8">
                            <h3 className="font-semibold text-xl mb-4">Personal Training 1:1</h3>
                            <p className="text-gray-300 mb-6">
                                Allenamenti completamente personalizzati, con focus totale su di
                                te. Tecnica, progressione e risultati.
                            </p>
                            <p className="text-gray-400 mb-6">
                                Ideale se vuoi essere seguito passo dopo passo e ottenere il
                                massimo da ogni sessione.
                            </p>
                            <Link href="/contatti" className="text-red-500 font-semibold">
                                Contattami →
                            </Link>
                        </div>

                        <div className="border border-white/10 rounded-2xl p-8">
                            <h3 className="font-semibold text-xl mb-4">Valutazione e pianificazione</h3>
                            <p className="text-gray-300 mb-6">
                                Analizziamo il tuo punto di partenza e costruiamo una strategia
                                chiara e sostenibile.
                            </p>
                            <p className="text-gray-400 mb-6">
                                Niente improvvisazione. Ogni scelta ha uno scopo.
                            </p>
                            <Link href="/contatti" className="text-red-500 font-semibold">
                                Inizia dal punto giusto →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ONLINE */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="font-poppins text-3xl font-bold mb-12">
                    Online coaching
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="border border-white/10 rounded-2xl p-8">
                        <h3 className="font-semibold text-xl mb-4">Coaching Online Personalizzato</h3>
                        <p className="text-gray-300 mb-6">
                            Allenati dove vuoi, senza essere lasciato solo. Programmi su misura,
                            check regolari e supporto continuo.
                        </p>
                        <p className="text-gray-400 mb-6">
                            La distanza non è una scusa. I risultati arrivano comunque.
                        </p>
                        <Link href="/contatti" className="text-red-500 font-semibold">
                            Scopri come funziona →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-red-600">
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                        Scegli il servizio giusto per te
                    </h2>
                    <Link
                        href="/contatti"
                        className="inline-block bg-black hover:bg-zinc-900 text-white font-semibold px-10 py-4 rounded-xl transition"
                    >
                        Prenota una consulenza gratuita
                    </Link>
                </div>
            </section>
        </div>
    );
}
