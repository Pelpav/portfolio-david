"use client"
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Experience = {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
};

const TimelinePoint = ({ isActive }: { isActive: boolean; }) => (
    <div className="relative">
        <motion.div
            className={`w-6 h-6 rounded-full border-4 z-20 relative
                ${isActive ? 'border-primary bg-background' : 'border-primary/50 bg-background'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }} // Durée d'animation améliorée
        />
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }} // Durée d'animation améliorée
        />
    </div>
);

const ExperienceCard = ({ experience, isActive, onClick, index, total }: {
    experience: Experience;
    isActive: boolean;
    onClick: () => void;
    index: number;
    total: number;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            ref={cardRef}
            className={`relative mb-16 ${isLeft ? 'ml-[50%] pl-12' : 'mr-[50%] pr-12'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }} // Délai d'animation amélioré pour chaque carte
        >
            {/* Point de timeline */}
            <div className={`absolute top-0 ${isLeft ? 'left-0' : 'left-full'} -translate-x-1/2`}>
                <TimelinePoint isActive={isActive} />
            </div>

            {/* Ligne verticale */}
            {index !== total - 1 && (
                <motion.div
                    className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-6 w-0.5 h-24 -translate-x-1/2 bg-gradient-to-b from-primary/50 to-transparent`}
                    initial={{ height: 0 }}
                    animate={{ height: '6rem' }} // Animation pour la ligne verticale
                    transition={{ duration: 0.4, delay: index * 0.1 }} // Délai d'animation amélioré pour la ligne
                />
            )}

            
            {/* Date */}
            <div
                className={`absolute top-0 ${isLeft ? 'right-full mr-8' : 'left-full ml-8'} 
                    whitespace-nowrap text-sm font-medium text-primary`}
            >
                {experience.period}
            </div>

            {/* Carte */}
            <motion.div
                className={`relative bg-card p-6 rounded-lg border-2 shadow-lg cursor-pointer
                    ${isActive ? 'border-primary shadow-primary/10' : 'border-border'}
                    hover:shadow-xl transition-all duration-300`}
                onClick={onClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold" style={{ color: isActive ? 'var(--primary)' : 'inherit' }}>
                            {experience.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {experience.company}
                        </span>
                    </div>

                    <p className="text-muted-foreground">{experience.description}</p>

                    <div className="pt-4 space-y-6">
                        <div className="space-y-3">
                            <h4 className="font-semibold text-primary">Réalisations clés</h4>
                            <ul className="space-y-2">
                                {experience.achievements.map((achievement, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-muted-foreground"
                                    >
                                        <span className="text-primary mt-1.5 text-sm">◆</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold text-primary">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full
                                            border border-primary/10 hover:bg-primary/10 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const Experience = () => {
    const [activeExperience, setActiveExperience] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const experiences: Experience[] = [
        {
            title: "Développeur Fullstack",
            company: "USSGB",
            period: "Janvier 2024 - en cours",
            description: "Développement d'un portail web académique moderne et intuitif pour l'université.",
            achievements: [
                "Mise en place d'une architecture microservices scalable",
                "Implémentation d'un système d'authentification sécurisé",
                "Développement de tableaux de bord personnalisés",
                "Optimisation des performances et du temps de chargement",
            ],
            technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Redis"],
        },
        {
            title: "Développeur Web Frontend",
            company: "AM-TECHNOLOGIE",
            period: "Juillet 2023 - Octobre 2023",
            description: "Création d'un site e-commerce responsive et d'une application mobile associée.",
            achievements: [
                "Développement d'une interface utilisateur moderne et responsive",
                "Intégration de systèmes de paiement sécurisés",
                "Optimisation SEO et performances",
                "Mise en place de tests automatisés",
            ],
            technologies: ["React", "React Native", "TypeScript", "Redux", "Jest"],
        },
        {
            title: "Développeur Web Mobile",
            company: "Freelance",
            period: "Août 2023 - Octobre 2023",
            description: "Développement d'applications mobiles cross-platform pour divers clients.",
            achievements: [
                "Création d'applications mobiles performantes",
                "Intégration de fonctionnalités de géolocalisation",
                "Mise en place de notifications push",
                "Optimisation de l'expérience utilisateur",
            ],
            technologies: ["Flutter", "Firebase", "REST API", "Git", "Agile"],
        },
    ];

    return (
        <section className="py-32 bg-background overflow-hidden" id="experience">
            <div className="container mx-auto px-4" ref={containerRef}>
                <div className="max-w-5xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-primary to-primary/60">
                            Expériences professionnelles
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Découvrez mon parcours professionnel à travers une timeline interactive.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Ligne centrale */}
                        <motion.div
                            className="absolute top-0 left-1/2 w-0.5 h-full -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{
                                duration: 4, // Durée d'animation améliorée pour la ligne centrale
                                delay: 0.5
                            }} // Animation pour la ligne centrale
                        />

                        <div className="relative">
                            {experiences.map((experience, index) => (
                                <ExperienceCard
                                    key={experience.company}
                                    experience={experience}
                                    isActive={activeExperience === index}
                                    onClick={() => setActiveExperience(activeExperience === index ? null : index)}
                                    index={index}
                                    total={experiences.length}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 
