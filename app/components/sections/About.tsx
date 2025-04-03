import { motion } from 'framer-motion';

const LanguageBar = ({ language, level }: { language: string; level: number; }) => (
    <div className="space-y-2">
        <div className="flex justify-between">
            <span className="font-medium">{language}</span>
            <span className="text-muted-foreground">{level}%</span>
        </div>
        <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            />
        </div>
    </div>
);

const InterestCard = ({ icon, title }: { icon: string; title: string; }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-4 bg-card rounded-lg shadow-lg border border-border"
    >
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="font-medium">{title}</h3>
    </motion.div>
);

export const About = () => {
    const languages = [
        { name: "Français", level: 90 },
        { name: "Bambara", level: 95 },
        { name: "Anglais", level: 70 },
    ];

    const interests = [
        { icon: "🔬", title: "Science & Technologie" },
        { icon: "🎬", title: "Cinéma" },
        { icon: "✈️", title: "Voyage" },
    ];

    return (
        <section className="py-20 bg-background" id="about">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">À propos de moi</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <p>
                            Passionné par le développement web et la data science, je suis constamment
                            à la recherche de nouvelles façons d'innover et de créer des solutions
                            technologiques impactantes. Mon parcours m'a permis de développer une
                            expertise polyvalente, alliant développement web, mobile et analyse de données.
                        </p>
                        <p>
                            Je crois fermement en l'apprentissage continu et en l'importance de rester
                            à jour avec les dernières technologies. Ma vision du développement est centrée
                            sur la création de solutions robustes, évolutives et centrées sur l'utilisateur.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">Langues</h3>
                        <div className="space-y-4">
                            {languages.map((lang) => (
                                <LanguageBar
                                    key={lang.name}
                                    language={lang.name}
                                    level={lang.level}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">Centres d'intérêt</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {interests.map((interest) => (
                                <InterestCard
                                    key={interest.title}
                                    icon={interest.icon}
                                    title={interest.title}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 