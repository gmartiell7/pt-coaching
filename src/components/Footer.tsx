import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <h3 className="font-poppins text-lg font-bold">
                        Personal Trainer
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        Allenamenti in presenza e online
                    </p>
                    <p className="mt-4 text-sm leading-relaxed">
                        Trasforma il tuo corpo.<br />
                        Costruisci la tua disciplina.
                    </p>
                </div>

                {/* Navigazione */}
                <div>
                    <h4 className="font-semibold mb-4">Navigazione</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-red-500">Home</Link></li>
                        <li><Link href="/chi-sono" className="hover:text-red-500">Chi sono</Link></li>
                        <li><Link href="/servizi" className="hover:text-red-500">Servizi</Link></li>
                        <li><Link href="/percorsi" className="hover:text-red-500">Percorsi</Link></li>
                        <li><Link href="/testimonianze" className="hover:text-red-500">Testimonianze</Link></li>
                        <li><Link href="/contatti" className="hover:text-red-500">Contatti</Link></li>
                    </ul>
                </div>

                {/* Contatti */}
                <div>
                    <h4 className="font-semibold mb-4">Contatti</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Email: info@email.it</li>
                        <li>WhatsApp: +39 000 000 0000</li>
                    </ul>
                    <Link
                        href="/contatti"
                        className="inline-block mt-4 text-sm text-red-500 hover:underline"
                    >
                        Scrivimi su WhatsApp
                    </Link>
                </div>

                {/* CTA */}
                <div>
                    <h4 className="font-semibold mb-4">Inizia ora</h4>
                    <p className="text-sm text-gray-400 mb-4">
                        Il primo passo � una scelta.
                    </p>
                    <Link
                        href="/contatti"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition"
                    >
                        Prenota una consulenza gratuita
                    </Link>
                    <p className="mt-3 text-xs text-gray-500">
                        Consulenza senza impegno
                    </p>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
                � {new Date().getFullYear()} Personal Trainer � Tutti i diritti riservati
            </div>
        </footer>
    );
}
