'use client';

import { motion } from 'framer-motion';
import { Brain, Cloud, BarChart2, FlaskConical } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-border/60 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="mb-6">
                        <motion.div
                            className="text-3xl font-bold text-foreground inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            Zaid Mayers
                        </motion.div>
                        <p className="mt-2 text-muted-foreground">ML & AI Engineer | Data Scientist</p>
                    </div>

                    <div className="flex justify-center space-x-6 mb-8">
                        {[
                            { icon: Brain, label: "Machine Learning" },
                            { icon: BarChart2, label: "Data Science" },
                            { icon: Cloud, label: "Cloud Deployment" },
                            { icon: FlaskConical, label: "Research" }
                        ].map(({ icon: Icon, label }, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-2 text-muted-foreground"
                                whileHover={{ scale: 1.1, color: `hsl(var(--primary))` }}
                            >
                                <Icon size={18} />
                                <span className="text-sm hidden sm:inline">{label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="border-t border-border/60 pt-8">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Zaid Mayers. <br/> Crafted with ❤️ using Next.js, TypeScript, Shadcn/ui & Framer Motion.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;