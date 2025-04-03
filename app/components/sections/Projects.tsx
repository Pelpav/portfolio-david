import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    links: {
        github?: string;
        live?: string;
    };
};

const ProjectCard = ({ project, index }: { project: Project; index: number; }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="group relative bg-card rounded-xl overflow-hidden shadow-lg border border-border"
    >
        {/* Image du projet */}
        <div className="relative h-64 w-full">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Contenu */}
        <div className="relative p-6 space-y-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>

            {/* Technologies utilisées */}
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Liens */}
            <div className="flex gap-4 pt-4">
                {project.links.github && (
                    <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
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
                        <span>GitHub</span>
                    </Link>
                )}
                {project.links.live && (
                    <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                        <span>Voir le projet</span>
                    </Link>
                )}
            </div>
        </div>
    </motion.div>
);

export const Projects = () => {
    const projects: Project[] = [
        {
            title: "Portail Académique USSGB",
            description: "Plateforme web moderne pour la gestion académique avec authentification et tableaux de bord personnalisés.",
            image: "https://source.unsplash.com/random/800x600/?dashboard,university",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
            links: {
                github: "https://github.com/username/academic-portal",
                live: "https://academic-portal.example.com",
            },
        },
        {
            title: "E-commerce Mobile App",
            description: "Application mobile cross-platform pour une plateforme e-commerce avec paiement intégré.",
            image: "https://source.unsplash.com/random/800x600/?ecommerce,mobile",
            technologies: ["React Native", "Redux", "Stripe", "Firebase"],
            links: {
                github: "https://github.com/username/ecommerce-app",
            },
        },
        {
            title: "Data Analytics Dashboard",
            description: "Tableau de bord interactif pour l'analyse de données avec visualisations en temps réel.",
            image: "https://source.unsplash.com/random/800x600/?data,analytics",
            technologies: ["Python", "React", "D3.js", "FastAPI"],
            links: {
                github: "https://github.com/username/analytics-dashboard",
                live: "https://analytics.example.com",
            },
        },
    ];

    return (
        <section className="py-20 bg-background" id="projects">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto space-y-16"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Projets réalisés</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 