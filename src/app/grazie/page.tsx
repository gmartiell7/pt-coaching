import Link from "next/link";

export default function GraziePage() {
    return (
        <div className="pt-16 min-h-screen flex items-center">
            <section className="max-w-3xl mx-auto px-6 py-24 text-center">
                <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
                    Richiesta inviata con successo ??
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                    Grazie per avermi contattato. Ho ricevuto la tua richiesta e ti
                    risponderò il prima possibile per fissare la consulenza gratuita.
                </p>
                <p className="text-gray-400 mb-12">
                    Nel frattempo, preparati a iniziare un percorso fatto di costanza,
                    metodo e risultati concreti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition"
                    >
                        Torna alla Home
                    </Link>
                    <Link
                        href="/percorsi"
                        className="border border-white/20 hover:border-red-500 px-8 py-4 rounded-xl transition"
                    >
                        Scopri i percorsi
                    </Link>
                </div>
            </section>
        </div>
    );
}
