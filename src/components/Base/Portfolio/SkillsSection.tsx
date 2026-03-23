import { motion } from 'framer-motion';
import { skillsData } from '@/data/portfolioData';

// Official technology icons/logos as SVG
const techIcons: Record<string, string> = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'Scikit-Learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'MATLAB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
};

// Get proficiency label
const getProficiencyLabel = (level: number) => {
  if (level >= 85) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 50) return 'Intermediate';
  return 'Beginner';
};

// Get proficiency color
const getProficiencyColor = (level: number) => {
  if (level >= 85) return 'bg-green-500/20 text-green-700 dark:text-green-400';
  if (level >= 70) return 'bg-blue-500/20 text-blue-700 dark:text-blue-400';
  if (level >= 50) return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400';
  return 'bg-gray-500/20 text-gray-700 dark:text-gray-400';
};

// Technology descriptions
const techDescriptions: Record<string, string> = {
  'Python': 'Primary language for ML research, data science, and backend pipeline development',
  'TensorFlow': 'End-to-end open-source platform for building and deploying ML models at scale',
  'PyTorch': 'Deep learning framework used for computer vision and research-grade model training',
  'Scikit-Learn': 'Machine learning library for classification, regression, clustering, and evaluation',
  'AWS': 'Cloud platform used for deploying ML applications including AWS Beanstalk deployments',
  'GCP': 'Google Cloud Platform for scalable compute and cloud-based ML infrastructure',
  'Docker': 'Containerization tool for reproducible, portable ML and application environments',
  'MySQL': 'Relational database for structured data storage in ML and data science projects',
  'MATLAB': 'Numerical computing environment used for signal processing and engineering tasks',
  'C': 'Systems programming language for low-level performance-critical implementations',
};

const SkillCard = ({ skill, index }: any) => {
  const proficiency = getProficiencyLabel(skill.level);
  const proficiencyColor = getProficiencyColor(skill.level);
  const description = techDescriptions[skill.name] || 'Professional technology skill';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Official Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-xl flex-shrink-0 border border-primary/10"
        >
          <img 
            src={techIcons[skill.name]} 
            alt={skill.name}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>
        
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg text-foreground truncate">
              {skill.name}
            </h3>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${proficiencyColor}`}>
              {proficiency}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {description}
          </p>
          
          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
              {skill.category}
            </span>
            
            {/* Skill Level Dots */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.05 + i * 0.05,
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                  viewport={{ once: true }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < Math.round(skill.level / 20) 
                      ? 'bg-primary shadow-sm' 
                      : 'bg-muted-foreground/20'
                  }`}
                />
              ))}
              <span className="text-xs font-semibold text-primary ml-2">
                {skill.level}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  // Group skills by category
  const categories = ['ML/AI', 'Programming', 'Cloud', 'Database'];
  const groupedSkills = categories.map(cat => ({
    category: cat,
    skills: skillsData.filter(skill => skill.category === cat)
  })).filter(group => group.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative z-10 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Tech Stack
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across machine learning, AI, cloud platforms, and data science tools
          </p>
        </motion.div>
        
        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {groupedSkills.map((group, groupIndex) => (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"
              >
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                {group.category}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.skills.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={groupIndex * 10 + index} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
