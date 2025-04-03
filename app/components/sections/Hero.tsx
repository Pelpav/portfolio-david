import { AnimatedText } from '@/components/ui/ui/animated-text';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Fond animé */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
                <div className="absolute inset-0 backdrop-blur-3xl" />
            </motion.div>

            {/* Contenu principal */}
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Texte */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                <AnimatedText text="David Sabéré Dembélé" delay={0.2} />
                            </h1>
                            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">
                                <AnimatedText text="Développeur Web & Mobile" delay={0.4} />
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                <AnimatedText text="Passionné de Big Data et Data Science" delay={0.6} />
                            </p>
                        </div>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"
                        >
                            Créant des solutions innovantes à l'intersection du développement web,
                            du mobile et de la data science.
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
                                Voir mon travail
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Image/Illustration */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10" />
                        <Image
                            src="https://source.unsplash.com/random/800x800/?developer,programming"
                            alt="David Sabéré Dembélé"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Éléments décoratifs */}
            <motion.div
                className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />
            <motion.div
                className="absolute -top-32 -left-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />
        </section>
    );
}; 