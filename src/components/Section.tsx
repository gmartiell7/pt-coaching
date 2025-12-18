"use client";

import { motion } from "framer-motion";

export default function Section({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <motion.section
            id={id}
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
        >
            {children}
        </motion.section>
    );
}
