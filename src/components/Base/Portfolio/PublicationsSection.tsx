// components/PublicationsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Award } from 'lucide-react';
import { publications, achievements } from '@/data/portfolioData';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PublicationsSection = () => {
    return (
        <section id="publications" className="py-20 relative z-10 bg-muted">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="Publications & Achievements" />
                <div className="grid grid-cols-1 gap-6 mb-8">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={pub.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <Card className="hover:border-primary transition-colors">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                                                <BookOpen className="text-primary" size={20} />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg leading-snug">{pub.title}</CardTitle>
                                                <p className="text-sm text-muted-foreground mt-2">{pub.authors}</p>
                                            </div>
                                        </div>
                                        {pub.link && (
                                            <a
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:text-primary/80 transition-colors p-2 hover:bg-primary/10 rounded-lg flex-shrink-0"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{pub.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline" className="bg-primary/5">
                                            {pub.venue}{pub.location ? ` · ${pub.location}` : ''}
                                        </Badge>
                                        <Badge variant="outline" className="bg-primary/5">{pub.year}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {achievements.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: publications.length * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                {achievements.map((ach) => (
                                    <a
                                        key={ach.title}
                                        href={ach.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                            <Award className="text-primary" size={20} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                                {ach.title}
                                            </p>
                                            <p className="text-sm text-muted-foreground">{ach.detail}</p>
                                        </div>
                                    </a>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default PublicationsSection;
