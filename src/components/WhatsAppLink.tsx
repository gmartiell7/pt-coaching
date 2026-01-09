import Link from "next/link";

function WhatsAppIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className={className}
            fill="currentColor"
        >
            <path d="M16.02 3C9.39 3 4 8.38 4 15.01c0 2.65.87 5.1 2.35 7.08L5 29l7.1-1.3a12 12 0 0 0 3.92.65c6.63 0 12.01-5.38 12.01-12.01C28.03 8.38 22.65 3 16.02 3Zm0 21.75c-1.3 0-2.58-.26-3.78-.77l-.27-.12-4.22.77.79-4.11-.14-.29A9.64 9.64 0 0 1 6.3 15.01c0-5.36 4.36-9.72 9.72-9.72 5.36 0 9.72 4.36 9.72 9.72 0 5.36-4.36 9.74-9.72 9.74Zm5.33-7.31c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35Z" />
        </svg>
    );
}

export default function WhatsAppLink({
    children,
    className = "",
    text,
    variant = "link",
}: {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    variant?: "link" | "button";
}) {
    const number = process.env.WHATSAPP_NUMBER || "";
    const defaultText = process.env.WHATSAPP_DEFAULT_TEXT || "";
    const message = encodeURIComponent(text ?? defaultText);

    // Se non hai configurato WHATSAPP_NUMBER, non renderizziamo nulla (evita link rotto)
    if (!number) return null;

    const href = `https://wa.me/${number}?text=${message}`;

    const base =
        variant === "button"
            ? "inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition"
            : "inline-flex items-center gap-2";

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${base} ${className}`}
        >
            <WhatsAppIcon className="h-5 w-5" />
            {children ?? "Scrivimi su WhatsApp"}
        </Link>
    );
}
