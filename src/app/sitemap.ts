import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: "https://www.tuosito.it", lastModified: new Date() },
        { url: "https://www.tuosito.it/chi-sono", lastModified: new Date() },
        { url: "https://www.tuosito.it/servizi", lastModified: new Date() },
        { url: "https://www.tuosito.it/percorsi", lastModified: new Date() },
        { url: "https://www.tuosito.it/contatti", lastModified: new Date() },
    ];
}