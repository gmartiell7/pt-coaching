import Link from "next/link";

export default function TestimonianzePage() {
    return (
        <div className="pt-16">
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h1 className="font-poppins text-4xl md:text-5xl font-bold leading-tight">
                    Risultati reali.<br />Persone vere.
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                    Le parole contano, ma i risultati contano di pi�. Ecco cosa dicono le
                    persone che hanno deciso di iniziare un percorso con me.
                </p>
            </section>

            {/* TESTIMONIANZE */}
            <section className="bg-zinc-900/60">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="border border-white/10 rounded-2xl p-8">
                            <p className="text-gray-300 mb-6">
                                �Non pensavo di riuscire a essere costante. Oggi allenarmi fa parte
                                della mia routine e mi sento molto pi� forte.�
                            </p>
                            <p className="font-semibold">Marco, 34 anni</p>
                        </div>

                        <div className="border border-red-500 rounded-2xl p-8 bg-zinc-900">
                            <p className="text-gray-300 mb-6">
                                �Allenarmi online mi sembrava impossibile. Invece ho ottenuto
                                risultati concreti e continuit�.�
                            </p>
                            <p className="font-semibold">Laura, 29 anni</p>
                        </div>

                        <div className="border border-white/10 rounded-2xl p-8">
                            <p className="text-gray-300 mb-6">
                                �Finalmente un metodo sostenibile. Niente estremi, solo
                                progressione e risultati reali.�
                            </p>
                            <p className="font-semibold">Andrea, 41 anni</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RISULTATI */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="font-poppins text-3xl font-bold mb-12 text-center">
                    Cosa ottengono i miei clienti
                </h2>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h3 className="font-semibold mb-4">Costanza</h3>
                        <p className="text-gray-300">
                            Allenamenti sostenibili che diventano abitudine.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Risultati</h3>
                        <p className="text-gray-300">
                            Miglioramenti concreti, misurabili e duraturi.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Consapevolezza</h3>
                        <p className="text-gray-300">
                            Capisci cosa stai facendo e perch� lo stai facendo.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-red-600">
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                        Vuoi essere il prossimo?
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
