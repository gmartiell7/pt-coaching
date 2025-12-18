import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata = {
    title: {
        default: "Personal Trainer | Allenamento Online e in Presenza",
        template: "%s | Personal Trainer"
    },
    description:
        "Personal trainer specializzato in allenamenti personalizzati online e in presenza. Metodo scientifico, risultati concreti.",
    keywords: [
        "personal trainer",
        "allenamento personalizzato",
        "personal trainer online",
        "coaching fitness",
        "allenamento in presenza"
    ],
    authors: [{ name: "Nome Personal Trainer" }],
    creator: "Nome Personal Trainer",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL! || "http://localhost:3000"),
    openGraph: {
        title: "Personal Trainer | Allenamento Online e in Presenza",
        description:
            "Allenamenti personalizzati, coaching online e percorsi su misura per raggiungere i tuoi obiettivi.",
        url: "https://www.tuosito.it",
        siteName: "Personal Trainer",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Personal Trainer Coaching",
            },
        ],
        locale: "it_IT",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="it" className={`${inter.variable} ${poppins.variable}`}>
            <body className="bg-black text-gray-100 font-inter antialiased">
                <Navbar />
                <main className="min-h-screen pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
