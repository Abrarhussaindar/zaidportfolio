// components/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="About Me" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-primary">
                            ML & AI Engineer | Data Scientist
                        </h3>
                        <p className="mb-6 leading-relaxed text-muted-foreground">
                            Based in Philadelphia, PA, I'm a Machine Learning and AI Engineer with an MS in Machine Learning Engineering from Drexel University (GPA 4.0). I specialize in computer vision, predictive analytics, and end-to-end ML pipeline development.
                        </p>
                        <p className="mb-6 leading-relaxed text-muted-foreground">
                            From training ResNet classifiers for drone detection to building biomedical cell classifiers, I bring research rigor and engineering discipline to every project — always focused on measurable performance gains.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <Card className="text-center">
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold mb-2 text-primary">4.0</div>
                                    <div className="text-muted-foreground">MS GPA</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold mb-2 text-primary">20+</div>
                                    <div className="text-muted-foreground">Papers Reviewed</div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-center">
                                    <MapPin className="mr-3 text-primary" size={20} />
                                    <span className="text-muted-foreground">Philadelphia, PA</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="mr-3 text-primary" size={20} />
                                    <span className="text-muted-foreground">zaidmayers2@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="mr-3 text-primary" size={20} />
                                    <span className="text-muted-foreground">+1 206 930 0523</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Education</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 space-y-4">
                                <div className="flex items-start">
                                    <GraduationCap className="mr-3 mt-1 text-primary flex-shrink-0" size={18} />
                                    <div>
                                        <p className="font-medium text-foreground">MS in Machine Learning Engineering</p>
                                        <p className="text-sm text-muted-foreground">Drexel University, Philadelphia, PA — GPA 4.0 (Dec 2025)</p>
                                        <p className="text-xs text-primary mt-1">Dean's List: Fall 2023, Winter 2023, Spring 2023, Fall 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <GraduationCap className="mr-3 mt-1 text-primary flex-shrink-0" size={18} />
                                    <div>
                                        <p className="font-medium text-foreground">B.Tech in Computer Science Engineering</p>
                                        <p className="text-sm text-muted-foreground">Presidency University, India — GPA 3.3 (Nov 2024)</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;