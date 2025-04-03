import { motion } from 'framer-motion';

type Skill = {
    name: string;
    icon: string;
    category: string;
};

const SkillCard = ({ skill }: { skill: Skill; }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-card rounded-lg shadow-lg border border-border"
    >
        <div className="text-4xl mb-3">{skill.icon}</div>
        <h3 className="font-medium text-lg">{skill.name}</h3>
    </motion.div>
);

export const Skills = () => {
    const skills: Skill[] = [
        // Développement Web & Mobile
        { name: "Next.js", icon: "⚡", category: "web" },
        { name: "React", icon: "⚛️", category: "web" },
        { name: "Node.js", icon: "🟢", category: "web" },
        { name: "TypeScript", icon: "📘", category: "web" },
        { name: "React Native", icon: "📱", category: "mobile" },
        { name: "Flutter", icon: "💙", category: "mobile" },

        // Big Data & Data Science
        { name: "Python", icon: "🐍", category: "data" },
        { name: "TensorFlow", icon: "🧠", category: "data" },
        { name: "Pandas", icon: "🐼", category: "data" },
        { name: "SQL", icon: "📊", category: "data" },

        // Déploiement & Sécurité
        { name: "Docker", icon: "🐳", category: "devops" },
        { name: "AWS", icon: "☁️", category: "devops" },
        { name: "Git", icon: "📦", category: "devops" },
        { name: "Cybersécurité", icon: "🔒", category: "devops" },
    ];

    const categories = [
        { id: "web", name: "Développement Web & Mobile" },
        { id: "data", name: "Big Data & Data Science" },
        { id: "devops", name: "Déploiement & Sécurité" },
    ];

    return (
        <section className="py-20 bg-background/50" id="skills">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto space-y-16"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Compétences</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="space-y-12">
                        {categories.map((category) => (
                            <div key={category.id} className="space-y-6">
                                <h3 className="text-2xl font-semibold">{category.name}</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {skills
                                        .filter((skill) => skill.category === category.id)
                                        .map((skill) => (
                                            <SkillCard key={skill.name} skill={skill} />
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 