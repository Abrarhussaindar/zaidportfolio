export const skillsData = [
    // ML & AI
    { name: 'Python', level: 92, category: 'ML/AI' },
    { name: 'PyTorch', level: 88, category: 'ML/AI' },
    { name: 'TensorFlow', level: 85, category: 'ML/AI' },
    { name: 'Scikit-Learn', level: 85, category: 'ML/AI' },
    { name: 'YOLOv11', level: 82, category: 'ML/AI' },
    { name: 'ResNet', level: 80, category: 'ML/AI' },
    { name: 'LangChain', level: 80, category: 'ML/AI' },
    { name: 'RAG', level: 80, category: 'ML/AI' },
    { name: 'LLM Inference', level: 80, category: 'ML/AI' },
    { name: 'Ollama', level: 78, category: 'ML/AI' },
    { name: 'pgvector', level: 75, category: 'ML/AI' },
    // Backend & Cloud
    { name: 'FastAPI', level: 82, category: 'Backend & Cloud' },
    { name: 'Flask', level: 80, category: 'Backend & Cloud' },
    { name: 'Pydantic', level: 78, category: 'Backend & Cloud' },
    { name: 'PostgreSQL', level: 78, category: 'Backend & Cloud' },
    { name: 'MySQL', level: 75, category: 'Backend & Cloud' },
    { name: 'AWS', level: 78, category: 'Backend & Cloud' },
    { name: 'GCP', level: 72, category: 'Backend & Cloud' },
    // Languages & Tools
    { name: 'SQL', level: 80, category: 'Languages & Tools' },
    { name: 'Git', level: 85, category: 'Languages & Tools' },
    { name: 'Jupyter', level: 82, category: 'Languages & Tools' },
    { name: 'MATLAB', level: 70, category: 'Languages & Tools' },
    { name: 'C', level: 65, category: 'Languages & Tools' },
    { name: 'PyCharm', level: 78, category: 'Languages & Tools' },
    { name: 'Linux', level: 72, category: 'Languages & Tools' },
    // Data & Annotation
    { name: 'LabelImg', level: 85, category: 'Data & Annotation' },
    { name: 'SAM3', level: 78, category: 'Data & Annotation' },
    { name: 'Label Studio', level: 75, category: 'Data & Annotation' },
    { name: 'Feature Engineering', level: 82, category: 'Data & Annotation' },
    { name: 'Benchmark Dataset Construction', level: 85, category: 'Data & Annotation' },
    { name: 'Ground-Truth Labeling', level: 85, category: 'Data & Annotation' },
    { name: 'Ablation Studies', level: 80, category: 'Data & Annotation' },
    // Domain Knowledge
    { name: 'Healthcare Data Privacy', level: 80, category: 'Domain Knowledge' },
    { name: 'HIPAA-Aware System Design', level: 80, category: 'Domain Knowledge' },
    { name: 'Biomedical Research', level: 78, category: 'Domain Knowledge' },
    { name: 'Academic Research', level: 85, category: 'Domain Knowledge' },
];

export const projects = [
    {
        title: "RAG-Based Clinical Summary System",
        subtitle: "ML Developer — Altabeeb Healthcare",
        period: "",
        description:
            "Production RAG microservice for HIPAA-compliant clinical summary generation using fully on-premise LLMs, reducing summary generation time by ~70%.",
        features: [
            "Architected FastAPI + Ollama microservice cutting summary generation time by ~70%",
            "Engineered 768-dim vector embeddings via nomic-embed-text across 5 REST endpoints",
            "Deployed pgvector with IVFFlat on PostgreSQL for sub-second cosine similarity search",
            "llama3 fully on-premise for 100% HIPAA-compliant data privacy with zero external data transmission",
        ],
        link: "https://tabeeb.co.in/",
        tech: ["Python", "FastAPI", "Ollama", "PostgreSQL", "pgvector", "RAG", "llama3"],
        metrics: { speedup: "~70% faster", compliance: "100% HIPAA", endpoints: "5 REST" },
    },
    {
        title: "LISTO — Barber Booking Platform",
        subtitle: "Full-Stack Developer",
        period: "",
        description:
            "Multi-role barber booking platform with LLM-powered assistant and video-based skill development, projected to serve 50+ barbers at launch.",
        features: [
            "Leading full-stack architecture for 50+ barbers and customers",
            "Designed RESTful APIs with normalized multi-role database schema",
            "Integrated LLM-powered assistant automating customer Q&A and onboarding",
            "Built video content delivery and lesson management system for on-platform skill development",
        ],
        link: "https://github.com/DevMatrix-IT/listoo",
        tech: ["Full-Stack", "REST API", "LLM", "PostgreSQL", "RBAC"],
        metrics: { users: "50+ barbers", roles: "Multi-role", assistant: "LLM-powered" },
    },
    {
        title: "World Education — Student Consultancy ERP",
        subtitle: "Full-Stack Developer",
        period: "",
        description:
            "Full-stack ERP streamlining international student application workflows for 100+ students with LLM automation and RBAC across multiple roles.",
        features: [
            "Architecting workflows for 100+ international students across multiple countries",
            "Integrated LLM reasoning layer automating student Q&A, reducing advisor turnaround time",
            "Built admin portal for real-time management of student records and application pipelines",
            "Implemented RBAC supporting students, advisors, and admins on a unified platform",
        ],
        link: "https://github.com/zaidmayers/World-Education-ERP-Portal",
        tech: ["Full-Stack", "LLM", "RBAC", "ERP", "PostgreSQL"],
        metrics: { students: "100+", roles: "3-tier RBAC", automation: "LLM-driven" },
    },
    {
        title: "Customer Churn Prediction",
        subtitle: "Independent ML Engineer",
        period: "",
        description:
            "Analyzed 7,000+ telecom customer records to predict churn using ML models, deployed via Flask on AWS Elastic Beanstalk achieving 80% accuracy.",
        features: [
            "Performed EDA and feature selection on customer demographics, usage, and service data",
            "Evaluated Logistic Regression, Random Forest, and XGBoost via cross-validation",
            "Tuned decision threshold to maximize recall on churners, reducing false negative rate",
            "Deployed final model via Flask on AWS Elastic Beanstalk serving live predictions",
        ],
        link: "https://github.com/zaidmayers/dsproject",
        tech: ["Python", "Flask", "AWS", "XGBoost", "Scikit-Learn"],
        metrics: { records: "7K+", accuracy: "80%", deployment: "AWS" },
    },
    {
        title: "Mitotic Event Classifier",
        subtitle: "ML Engineer — Drexel University | PI: Dr. Andrew Cohen",
        period: "",
        description:
            "Temporal-spatial mitotic event classifier for HeLa cell datasets achieving 97.9% accuracy with a 20% reduction in computational requirements.",
        features: [
            "Developed temporal-spatial classifier for HeLa cell datasets against ground truth",
            "97.9% accuracy validated via statistical evaluations and multivariate analyses",
            "Engineered compute-efficient detection pipeline cutting resource requirements by 20%",
            "Presented to lab members and faculty, improving over all baseline detection methods",
        ],
        link: "https://github.com/zaidmayers/Mitotic-Event-Classifier",
        tech: ["Python", "PyTorch", "Computer Vision", "Biomedical ML"],
        metrics: { accuracy: "97.9%", compute: "−20%", validation: "Multivariate" },
    },
];

export const experiences = [
    {
        title: "Research Assistant (Drexel Co-op)",
        company: "iMaple | Drexel University",
        location: "Philadelphia, PA",
        period: "03/2025 – Present",
        project: "Long Range Drone Detection Project | PI: Dr. David Han",
        link: "https://research.coe.drexel.edu/ece/imaple/",
        responsibilities: [
            "Co-authored LRDDv3: 102K-image 4K drone dataset with thermal pairs and range metadata, accepted to ICRA 2026",
            "Captured and annotated 100K+ drone images with bounding boxes in LabelImg, anchoring the LRDDv3 benchmark",
            "Benchmarked YOLOv11m on LRDDv3 vs. DUT Anti-UAV and others on Det-Fly, achieving top mAP@50 of 0.485",
            "Ran multi-resolution benchmarks (640×640 vs. 1920×1920), boosting mAP@50 from 0.543 → 0.822 — a gain of 0.279",
            "Engineered DroneDAR regression model (ResNet18 + bbox feature gate), reducing distance MAE by 3.56 ft",
            "Annotated husky drone frames via SAM3 on lab server, enabling sensor fusion training on unlabeled data",
            "Designed official graphical abstract for LRDDv3, selected for presentation at ICRA 2026 in Vienna, Austria",
        ],
    },
];

export const publications = [
    {
        title: "LRDDv3: High-Res Long-Range Drone Detection Dataset w/ Range Info & Thermal Data",
        authors: "K. Peterson, Z. Mayers, A. Yousuf, P. Chowdhury, A. Zaczepinski, S. Arezoomandan, R. Maarefdoust, D. Han",
        venue: "IEEE ICRA",
        location: "Vienna, Austria",
        year: "2026",
        description:
            "102K-image 4K drone detection benchmark with range metadata and thermal pairs, accepted to ICRA 2026.",
        link: "https://arxiv.org/abs/2605.25942",
    },
    {
        title: "DroneDAR: Long-Range Drone Distance Estimation Using Monocular Vision and Bounding-Box Features",
        authors: "K. Peterson, Z. Mayers, D. Han",
        venue: "IEEE AVSS",
        location: "",
        year: "2026",
        description:
            "Monocular distance regression model (ResNet18 + bbox feature gate) cutting distance estimation MAE by 3.56 ft.",
        link: "https://arxiv.org/abs/2606.07756",
    },
];

export const achievements = [
    {
        title: "Dean's List for Academic Excellence",
        detail: "Fall 2023, Winter 2023, Spring 2023, Fall 2024",
        link: "https://drive.google.com/drive/folders/1wB3hf6uCpVBIFxek_9huT4jU0eIhQl3S",
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
        location: "Bengaluru, India",
        gpa: "3.3",
        period: "Nov 2024",
        awards: [],
    },
];

export const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];
