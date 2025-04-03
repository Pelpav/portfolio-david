import { motion } from 'framer-motion';
import { useState } from 'react';

type Education = {
    degree: string;
    school: string;
    period: string;
    description: string;
    courses: string[];
    skills: string[];
};

const EducationCard = ({ education, isActive, onClick }: {
    education: Education;
    isActive: boolean;
    onClick: () => void;
}) => (
    <motion.div
        layout
        onClick={onClick}
        className={`relative p-6 bg-card rounded-lg shadow-lg border border-border cursor-pointer transition-all
            ${isActive ? 'md:col-span-2 shadow-xl' : 'md:col-span-1'}`}
    >
        <motion.div layout="position" className="space-y-4">
            <div>
                <motion.h3 layout="position" className="text-xl font-semibold">{education.degree}</motion.h3>
                <motion.p layout="position" className="text-primary font-medium">{education.school}</motion.p>
                <motion.p layout="position" className="text-sm text-muted-foreground">{education.period}</motion.p>
            </div>

            <motion.p
                layout="position"
                className="text-muted-foreground"
            >
                {education.description}
            </motion.p>

            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                >
                    <div className="space-y-2">
                        <h4 className="font-medium">Cours principaux :</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {education.courses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-2">Compétences acquises :</h4>
                        <div className="flex flex-wrap gap-2">
                            {education.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    </motion.div>
);

export const Education = () => {
    const [activeEducation, setActiveEducation] = useState<number | null>(null);

    const educations: Education[] = [
        {
            degree: "Master en Data Science",
            school: "UIE",
            period: "Janvier 2024 - en cours",
            description: "Formation approfondie en science des données et intelligence artificielle.",
            courses: [
                "Machine Learning avancé",
                "Deep Learning et réseaux de neurones",
                "Big Data et systèmes distribués",
                "Statistiques et probabilités",
            ],
            skills: [
                "Python",
                "TensorFlow",
                "Spark",
                "Hadoop",
                "SQL avancé",
            ],
        },
        {
            degree: "Licence en Génie Logiciel",
            school: "Technolab-ISTA",
            period: "Août 2024",
            description: "Formation complète en développement logiciel et méthodologies agiles.",
            courses: [
                "Architecture logicielle",
                "Développement web avancé",
                "Base de données",
                "Sécurité informatique",
            ],
            skills: [
                "Java",
                "Spring Boot",
                "React",
                "DevOps",
                "Agile",
            ],
        },
        {
            degree: "DUT en Analyse-Programmation",
            school: "Technolab-ISTA",
            period: "Juillet 2023",
            description: "Formation aux fondamentaux de la programmation et de l'analyse système.",
            courses: [
                "Algorithmes et structures de données",
                "Programmation orientée objet",
                "Développement web",
                "Analyse des besoins",
            ],
            skills: [
                "C++",
                "JavaScript",
                "HTML/CSS",
                "UML",
                "Git",
            ],
        },
    ];

    return (
        <section className="py-20 bg-background/50" id="education">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto space-y-16"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Formation</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Cliquez sur une formation pour découvrir les cours suivis et les compétences acquises.
                        </p>
                    </div>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {educations.map((education, index) => (
                            <EducationCard
                                key={education.degree}
                                education={education}
                                isActive={activeEducation === index}
                                onClick={() => setActiveEducation(activeEducation === index ? null : index)}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}; 