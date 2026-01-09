import Image from "next/image";
import Link from "next/link";

export default function ChiSonoPage() {
    return (
        <div className="pt-16">
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
                <div>
                    <h1 className="font-poppins text-4xl md:text-5xl font-bold leading-tight">
                        Non alleno solo corpi.<br />
                        Costruisco persone pi� forti.
                    </h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Allenarsi non � questione di motivazione. � questione di metodo,
                        costanza e guida.
                    </p>
                </div>

                {/* Placeholder immagine */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900">
                    <Image
                        src="/images/trainer.jpg"
                        alt="Foto del trainer"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

            </section>

            {/* STORIA */}
            <section className="bg-zinc-900/60">
                <div className="max-w-5xl mx-auto px-6 py-24">
                    <h2 className="font-poppins text-3xl font-bold mb-6">La mia storia</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        So cosa significa sentirsi bloccati. Sapere cosa fare, ma non riuscire
                        a essere costanti.
                        <br />
                        <br />
                        L�allenamento ha cambiato il mio modo di vivere, di pensare e di
                        affrontare le difficolt�. Oggi il mio obiettivo � aiutarti a fare lo
                        stesso, con un metodo semplice e concreto.
                    </p>
                </div>
            </section>

            {/* METODO */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="font-poppins text-3xl font-bold mb-12 text-center">
                    Il mio metodo
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="border border-white/10 rounded-2xl p-8">
                        <h3 className="font-semibold mb-4">Ascolto</h3>
                        <p className="text-gray-300">
                            Partiamo da te: obiettivi, livello, stile di vita.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-2xl p-8">
                        <h3 className="font-semibold mb-4">Progressione</h3>
                        <p className="text-gray-300">
                            Ogni allenamento ha uno scopo e segue una direzione chiara.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-2xl p-8">
                        <h3 className="font-semibold mb-4">Sostenibilit�</h3>
                        <p className="text-gray-300">
                            Risultati che durano, non soluzioni estreme.
                        </p>
                    </div>
                </div>
            </section>

            {/* ESPERIENZA */}
            <section className="bg-zinc-900/60">
                <div className="max-w-5xl mx-auto px-6 py-24">
                    <h2 className="font-poppins text-3xl font-bold mb-6">
                        Esperienza e formazione
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Negli anni ho lavorato con persone di ogni et� e livello.
                        <br />
                        <br />
                        Le certificazioni sono importanti, ma lo sono ancora di pi� i risultati
                        ottenuti sul campo, insieme a chi ha deciso di mettersi in gioco.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                    Parliamo dei tuoi obiettivi
                </h2>
                <Link
                    href="/contatti"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-xl transition"
                >
                    Prenota una consulenza gratuita
                </Link>
            </section>
        </div>
    );
}
