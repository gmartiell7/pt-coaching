import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.formData();

  const nome = data.get("nome") as string;
  const email = data.get("email") as string;
  const obiettivo = data.get("obiettivo") as string;
  const messaggio = data.get("messaggio") as string;

  /* EMAIL */
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
    subject: "Nuova richiesta consulenza",
    html: `
      <h2>Nuova richiesta</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Obiettivo:</strong> ${obiettivo}</p>
      <p><strong>Messaggio:</strong><br/>${messaggio}</p>
    `,
  });

  /* WHATSAPP (link diretto) */
  const whatsappMessage = encodeURIComponent(
    `Nuova richiesta consulenza:%0A
Nome: ${nome}%0A
Email: ${email}%0A
Obiettivo: ${obiettivo}%0A
Messaggio: ${messaggio}`
  );

  const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return NextResponse.redirect(whatsappUrl);
}
