import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.formData();

        const nome = String(data.get("nome") || "").trim();
        const email = String(data.get("email") || "").trim();
        const telefono = String(data.get("telefono") || "").trim();
        const obiettivo = String(data.get("obiettivo") || "").trim(); // se lo aggiungi
        const messaggio = String(data.get("messaggio") || "").trim();

        if (!nome || !email || !messaggio) {
            return NextResponse.redirect(new URL("/contatti?error=1", req.url));
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `Sito Personal Trainer <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email, // cos� puoi rispondere direttamente al cliente
            subject: `Nuova richiesta consulenza - ${nome}`,
            html: `
        <h2>Nuova richiesta consulenza</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || "-"}</p>
        <p><strong>Obiettivo:</strong> ${obiettivo || "-"}</p>
        <p><strong>Messaggio:</strong><br/>${messaggio.replace(/\n/g, "<br/>")}</p>
      `,
        });

        // Redirect a pagina contatti con flag success
        return NextResponse.redirect(new URL("/contatti?sent=1", req.url));
    } catch (err) {
        console.error("CONTACT_ERROR", err);
        return NextResponse.redirect(new URL("/contatti?error=1", req.url));
    }
}
