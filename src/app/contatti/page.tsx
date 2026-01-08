import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contatti | Personal Trainer a Milano",
    description:
        "Contatta il tuo personal trainer a Milano e prenota una consulenza gratuita. Allenamenti personalizzati in presenza e online.",
};

export default function ContattiPage() {
    return (
        <main className="min-h-screen pt-16">
            <section className="max-w-5xl mx-auto px-6 py-20">
                {/* INTRO */}
                <div className="max-w-2xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Prenota la tua consulenza gratuita
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Compila il modulo e raccontami i tuoi obiettivi.
                        Ti ricontatterò personalmente per capire come aiutarti a ottenere
                        risultati concreti, in palestra o online.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* FORM */}
                    <form
                        action="/api/contatti"
                        method="POST"
                        className="bg-zinc-900 border border-white/10 rounded-2xl p-8 space-y-6"
                    >
                        <div>
                            <label className="block text-sm mb-2">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                required
                                className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Telefono</label>
                            <input
                                type="tel"
                                name="telefono"
                                className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">
                                Raccontami il tuo obiettivo
                            </label>
                            <textarea
                                name="messaggio"
                                rows={4}
                                className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-4 rounded-xl"
                        >
                            Richiedi la consulenza gratuita
                        </button>

                        <p className="text-xs text-gray-500">
                            Inviando il modulo accetti di essere ricontattato per ricevere
                            informazioni sul percorso di allenamento.
                        </p>
                    </form>

                    {/* SIDE CONTENT */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">
                                Come funziona
                            </h2>
                            <ul className="space-y-3 text-gray-400">
                                <li>✔ Analisi dei tuoi obiettivi e del livello attuale</li>
                                <li>✔ Valutazione del percorso più adatto</li>
                                <li>✔ Nessun impegno, nessuna vendita forzata</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-3">
                                Allenamenti a Milano e online
                            </h2>
                            <p className="text-gray-400">
                                Lavoro come personal trainer a Milano offrendo allenamenti
                                personalizzati in presenza, a domicilio o online.
                                Ogni percorso è costruito su misura, senza programmi standard.
                            </p>
                        </div>

                        <div className="bg-black border border-white/10 rounded-2xl p-6">
                            <p className="text-sm text-gray-400">
                                ⏱ Risposta entro 24 ore
                                <br />
                                📍 Milano e provincia
                                <br />
                                💻 Coaching online disponibile
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
