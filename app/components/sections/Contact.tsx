import { motion } from 'framer-motion';
import Link from 'next/link';

type Reference = {
    name: string;
    title: string;
    company: string;
    contact: string;
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string; }) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-primary/5"
    >
        {icon}
        <span className="font-medium">{label}</span>
    </Link>
);

const ReferenceCard = ({ reference }: { reference: Reference; }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 bg-card rounded-lg shadow-lg border border-border"
    >
        <div className="space-y-2">
            <h3 className="text-lg font-semibold">{reference.name}</h3>
            <p className="text-primary">{reference.title}</p>
            <p className="text-muted-foreground">{reference.company}</p>
            <p className="text-sm">{reference.contact}</p>
        </div>
    </motion.div>
);

export const Contact = () => {
    const references: Reference[] = [
        {
            name: "Dr. Amadou Keita",
            title: "Directeur des Études",
            company: "USSGB",
            contact: "amadou.keita@ussgb.edu.ml",
        },
        {
            name: "Mme. Sarah Johnson",
            title: "CTO",
            company: "AM-TECHNOLOGIE",
            contact: "sarah.j@amtech.com",
        },
    ];

    return (
        <section className="py-20 bg-background/50" id="contact">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-16"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Contact & Références</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold">Me contacter</h3>
                            <div className="space-y-4">
                                <SocialLink
                                    href="https://linkedin.com/in/username"
                                    icon={
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    }
                                    label="LinkedIn"
                                />
                                <SocialLink
                                    href="mailto:contact@example.com"
                                    icon={
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    }
                                    label="Email"
                                />
                                <SocialLink
                                    href="https://github.com/username"
                                    icon={
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    }
                                    label="GitHub"
                                />
                            </div>
                        </div>

                        {/* Références */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold">Références professionnelles</h3>
                            <div className="space-y-6">
                                {references.map((reference) => (
                                    <ReferenceCard key={reference.name} reference={reference} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 