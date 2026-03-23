// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
            <motion.div
                className="text-center max-w-4xl mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-6">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                        <motion.div
                            className="w-full h-full rounded-full flex items-center justify-center text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 text-primary-foreground"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <img src="/me.png" className="rounded-full" alt="Abrar Hussain Dar" />
                        </motion.div>
                        <motion.div
                            className="absolute -inset-1 rounded-full blur-xl opacity-50"
                            style={{ background: 'hsl(var(--primary))' }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                    Zaid Mayers
                </motion.h1>
                <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
                    ML & AI Engineer | Data Scientist
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-muted-foreground">
                    Building intelligent systems at the intersection of machine learning and real-world impact. Specializing in computer vision, predictive analytics, and cloud-deployed ML pipelines.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                        <motion.a href="/Zaid_Mayers_Resume.pdf" download="Zaid_Mayers_Resume.pdf" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                        </motion.a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                        <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Mail className="mr-2 h-5 w-5" />
                            Get In Touch
                        </motion.a>
                    </Button>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-center space-x-6 mt-8">
                    {[
                        { icon: Linkedin, href: "https://linkedin.com/in/zaid-mayers-b1ba7121a/" },
                        { icon: Mail, href: "mailto:zaidmayers2@gmail.com" }
                    ].map(({ icon: Icon, href }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown size={32} className="text-primary" />
            </motion.div>
        </section>
    );
};

export default HeroSection;