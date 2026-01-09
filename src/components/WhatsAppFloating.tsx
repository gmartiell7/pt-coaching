import WhatsAppLink from "@/components/WhatsAppLink";

export default function WhatsAppFloating() {
    return (
        <div className="fixed bottom-5 right-5 z-[60]">
            <WhatsAppLink
                variant="button"
                className="shadow-lg shadow-black/20"
                text="Ciao! Vorrei prenotare una consulenza."
            >
                WhatsApp
            </WhatsAppLink>
        </div>
    );
}
