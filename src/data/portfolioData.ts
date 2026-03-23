export const skillsData = [
    { name: 'Python', level: 92, category: 'Programming' },
    { name: 'TensorFlow', level: 85, category: 'ML/AI' },
    { name: 'PyTorch', level: 85, category: 'ML/AI' },
    { name: 'Scikit-Learn', level: 82, category: 'ML/AI' },
    { name: 'AWS', level: 78, category: 'Cloud' },
    { name: 'GCP', level: 72, category: 'Cloud' },
    { name: 'Docker', level: 75, category: 'Cloud' },
    { name: 'MySQL', level: 70, category: 'Database' },
    { name: 'MATLAB', level: 70, category: 'Programming' },
    { name: 'C', level: 65, category: 'Programming' },
];

export const projects = [
    {
        title: "Customer Churn Prediction",
        subtitle: "Independent Data Science Project",
        period: "08/2025 – 09/2025",
        description:
            "Analyzed over 7,000 telecom customer records to predict churn and deployed a Flask application on AWS Beanstalk for real-time churn prediction.",
        features: [
            "Analyzed 7,000+ telecom customer records to identify churn patterns",
            "Deployed Flask application on AWS Beanstalk for churn prediction",
            "Achieved 80% accuracy detecting churners, reducing potential revenue loss",
        ],
        link: "#",
        tech: ["Python", "Flask", "AWS Beanstalk", "Scikit-Learn", "MySQL"],
        metrics: { records: "7K+", accuracy: "80%", deployment: "AWS" },
    },
    {
        title: "Dog Breed Classification",
        subtitle: "Computer Vision Project",
        period: "01/2024 – 05/2024",
        description:
            "Implemented a deep ResNet architecture for dog breed classification, achieving 98.9% accuracy on curated image datasets.",
        features: [
            "Deep ResNet architecture for multi-class breed classification",
            "Led dataset creation, labeling, and performance metric visualization",
            "Achieved 98.9% accuracy with refined model robustness",
        ],
        link: "#",
        tech: ["Python", "PyTorch", "ResNet", "Computer Vision"],
        metrics: { accuracy: "98.9%", dataset: "Custom", model: "ResNet" },
    },
];

export const experiences = [
    {
        title: "Research Assistant",
        company: "iMaple Laboratory, Drexel University",
        location: "Philadelphia, PA",
        period: "03/2025 – Present",
        project: "Long Range Drone Detection Project | PI: Dr. David Han",
        responsibilities: [
            "Captured 100K+ drone images using DJI drones across Philadelphia for LRDD V3 dataset with PhD researchers",
            "Trained ResNet classifiers for drone distance estimation, achieving ~8% lower MAE and ~3% lower RMSE than DroneRanger",
            "Collaborated with PhD students labeling 100K+ drone images using LabelImg, building LRDD V3 dataset for detection benchmarking",
            "Reviewed 20+ research papers and presented key findings in weekly lab meetings, supporting peer PhD students' research progress",
            "Completed benchmarking of Anti-UAV dataset using YOLOv11, documenting training results in research submission",
            "Streamlined data labeling and benchmarking workflows to improve dataset preparation and team collaboration",
        ],
    },
    {
        title: "Independent Researcher",
        company: "Drexel University",
        location: "Philadelphia, PA",
        period: "09/2024 – 12/2024",
        project: "Pattern Recognition Project | PI: Dr. Andrew R. Cohen",
        responsibilities: [
            "Developed a highly accurate mitotic event classifier for HeLa cell datasets using temporal and spatial rules",
            "Validated model accuracy at 97.9% consistently through statistical evaluations and multivariate analyses against ground truth data",
            "Implemented a resource-efficient detection pipeline, reducing computational requirements by 20% for biomedical research tasks",
            "Presented research findings to lab members and faculty, demonstrating improved methods for accurate cell event detection",
            "Contributed to enhancing biomedical research efficiency, supporting reproducible workflows and accelerating data analysis",
        ],
    },
    {
        title: "Cloud Infrastructure Developer",
        company: "Drexel University",
        location: "Philadelphia, PA",
        period: "09/2023 – 06/2024",
        project: "Senior Design Project | PI: Joshua Agar",
        responsibilities: [
            "Deployed bare-metal Kubernetes clusters for CloudLab testing, validating core infrastructure functionality across multiple scenarios",
            "Configured small-scale NFS storage across clusters for team demonstration, ensuring system readiness for final showcase",
            "Integrated Gitea and ArgoCD version control systems, streamlining CI/CD pipelines and reducing deployment time by 40%",
            "Optimized Kubernetes cluster management processes, cutting manual setup effort and improving operational efficiency",
            "Supported continuous delivery and infrastructure automation, enhancing system reliability and accelerating development workflows",
        ],
    },
];

export const education = [
    {
        degree: "Master of Science in Machine Learning Engineering",
        institution: "Drexel University",
        location: "Philadelphia, PA",
        gpa: "3.8",
        period: "Dec 2025",
        awards: ["Dean's List – Fall 2023, Winter 2023, Spring 2023, Fall 2024"],
    },
    {
        degree: "Bachelor of Technology in Computer Science Engineering",
        institution: "Presidency University",
        location: "India",
        gpa: "3.3",
        period: "Nov 2024",
        awards: [],
    },
];

export const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];
