// =========================================================================
// Lady Fahmeh - Portfolio Data Configuration (Realistic & Clean)
// =========================================================================

// 1. PROFILE DATA
export const profileData = {
  name: "Lady Fahmeh",
  role: "Software Engineer | Backend Development", // اللقب المعتمد والدقيق لديكِ
  summary:
    "Software Engineer and Backend Developer with 2+ years of experience specializing in the Laravel ecosystem. Grounded in system analysis and product thinking, I am deeply passionate about mastering all aspects of management and business process analysis. I possess a proven track record of stabilizing features, optimizing database architectures, and delivering well-structured applications. As an adaptable team player, I excel at transforming complex business requirements into scalable, strategic technical solutions through Agile methodologies.",
  imageUrl: "",
  contactEmail: "lady.fah.172@gmail.com",
 // phone: "+963-951232258",
  linkedIn: "https://linkedin.com/in/lady-fahmeh",
  education: [
    {
      degree:
        "Bachelor in Information Technology Majoring in Software Engineering",
      school: "Damascus University, Syria, Damascus",
      years: "Aug 2019 – Aug 2024",
      status: "Graduated",
    },
    {
      degree: "Bachelor in Business Administration",
      school: "University of the People (Online), Pasadena, CA, USA",
      years: "June 2025 – June 2029",
      status: "Current Student",
    },
  ],
  certifications: [
    {
      title: "AI Innovator Pathway 2025",
      link: "https://www.linkedin.com/in/lady-fahmeh/overlay/1771941065657/single-media-viewer/?profileId=ACoAAD3Yh-sB8IvjpkO8rl1UWuX9ingRMI1AE_M",
      organization: "Subul Impact Outsourcing",
      organizationUrl: "https://subul.org/",
      period: "Oct 2025 – Feb 2026",
      details: [
        "Advanced AI & DevOps: Developing AI solutions (LLMs, LangChain, LangGraph) and mastering DevOps practices for Azure, including Docker and CI/CD pipelines, alongside AI-assisted coding.",
        "Product & Process Skills: Applying Design Thinking and Agile methodologies for product development, coupled with training in Professional English Communication for global tech environments.",
        "AI Capstone Project (Talent Job Matching): Developed an AI system utilizing Advanced RAG to accurately match and rank candidates based on job descriptions using a hybrid search architecture.",
      ],
    },
    {
      title: "Career Counseling Program",
      link: "https://www.linkedin.com/in/lady-fahmeh/details/certifications/1771448369253/single-media-viewer/?profileId=ACoAAD3Yh-sB8IvjpkO8rl1UWuX9ingRMI1AE_M",
      organization: "Humans In The Loop Foundation",
      organizationUrl: "https://humansintheloop.org/impact/foundation/",
      period: "Feb 2026",
      details: [
        "Professional Development: Completed an intensive Career Counseling Program focusing on Career Strategy, Professional Growth, and Market Navigation.",
      ],
    },
  ],
  footer: "© 2026 Lady Fahmeh. All Rights Reserved.",
};

// 2. EXPERIENCE DATA (مرتبة زمنياً من الأحدث للأقدم)
export const experienceData = [
  {
    title: "Backend Developer (Freelance)",
    meta: "BAREEQ CAR WASH | Feb 2026 – Present",
    duties: [
      "Developed the backend infrastructure for a real-time mobile car wash service application.",
      "Configuring and optimizing the Docker development environment and setting up automated CI/CD pipelines.",
      "Implementing broadcasting systems (Laravel Reverb) and practicing Agile Sprint management via Jira to enable real-time location tracking.",
    ],
  },
  {
    title: "Laravel Full-Stack Developer (Full-Time)",
    meta: "Al Gate, Syria, Damascus-Free zone | Oct 2024 – Oct 2025",
    duties: [
      "Dadoush (Chat & E-commerce): Optimized high-volume chat platform with MySQL replication and critical feature integrations (payments, notifications, multi-status orders).",
      "Alia Taxi: Resolved order-matching issues and implemented driver compensation logic to stabilize operations.",
      "Izone: Built task scheduling and compliance workflows, enhancing field operations and reporting.",
      "Damascus Marathon / Syrian Medicare: Developed Laravel Filament dashboards and integrated real-time notifications, supporting multiple platforms with ongoing maintenance.",
    ],
  },
  {
    title: "System Analyst | Laravel Full-Stack Developer (Freelance)",
    meta: "AL-Arabi Medical Clinics | June 2025 – Sep 2025",
    duties: [
      "Built a secure medical records system with RBAC and real-time departmental tracking, integrating biometric and document-capture devices.",
    ],
  },
  {
    title: "System Analyst | Backend Developer (Volunteer / Freelance)",
    meta: "Quran Institution System | Oct 2023 – March 2024",
    duties: [
      "Built an academic tracking backend integrated with mobile app for managing students, classes, and course progress.",
    ],
  },
  {
    title: "Project Manager  & Backend Developer (Freelance)",
    meta: "Mneen Charity Management System | April 2023 – Nov 2023",
    duties: [
      "Developed backend for charity operations with scalable architecture and automated workflows ensuring data accuracy.",
      "Managed backlogs using Jira tools to prioritize features and ensure delivery matched foundation expectations.",
    ],
  },
];

// 3. PROJECTS DATA
export const projectData = [
  {
    title: "Bareeq Car Wash",
    description:
      "Backend Architect | Building a real-time mobile car wash application. Solved complex operational workflow challenges, containerized the development environment using Docker, and migrated live tracking from MySQL polling to Redis caching to enable real-time updates with minimal database overhead.",
    technologies: [
      "Laravel",
      "Docker",
      "Redis Caching",
      "Real-time Broadcasting",
    ],
  },
  {
    title: "Unified Health Records System",
    description:
      "System Analyst & Backend Developer (Graduation Project) | Designed and developed a Unified Health Records system, integrating multi-source patient data into a centralized, API-driven architecture. Conducted requirements engineering and stakeholder interviews to address lost records and scheduling failures.",
    technologies: [
      "System Analysis",
      "Requirements Engineering",
      "Data Modeling (ERD)",
      "Laravel",
      "MySQL",
      "RBAC",
    ],
  },
  {
    title: "Talent Job Matching (AI Capstone)",
    description:
      "Technical Lead & AI Developer | Developed an AI system utilizing Advanced RAG to accurately match and rank candidates based on job descriptions using a hybrid search architecture during the AI Subul program. Contributed to technical decisions on Multi-Query Expansion and Faithfulness metrics.",
    technologies: [
      "AI Research",
      "Advanced RAG",
      "Hybrid Search",
      "Multi-Query Expansion",
      "LLM Integration",
      "Agile",
    ],
    presentationUrl:
      "C:\\Users\\User\\Desktop\\protfolio\\AI-Talent-Job-Matching.pdf", // ضعي رابط الجوجل درايف الفعلي هنا
  },
  {
    title: "Mneen Charity Management System",
    description:
      "System Analyst & Developer | Collaborated with development team to analyze requirements for the Ain Mneen Charity Foundation. Contributed to mapping complex beneficiary and provider scenarios, designing a dynamic form system and a structured data model that fully automates charity workflows.",
    technologies: [
      "Requirements Analysis",
      "Scenario Mapping",
      "Data Modeling",
      "Jira",
      "Agile/Scrum",
      "Laravel",
    ],
  },

  {
    title: "Wafed – Al-Arabi Medical Clinics System", // دمج الأسماء بشكل احترافي
    description:
      "System Analyst & Backend Developer | Contributed to a product-oriented digital service initiative under 'Wafed' to transition manual clinic processes into a secure digital environment. Collaborated with clients to analyze medical workflow requirements, implement Role-Based Access Control (RBAC), and integrate biometric and document-capture devices, ensuring backend stability and optimized user workflows.",
    technologies: [
      "Product Thinking",
      "System Analysis",
      "Laravel",
      "Filament PHP",
      "MySQL",
      "RBAC",
      "Biometric Integration",
    ],
  },
];

// 4. SKILLS DATA
export const skillsData = [
  {
    title: "Analysis & Management",
    skills: [
      "System Analysis & Requirements Engineering (Stakeholder Interviews, Use Cases, UML, ERD)",
      "Product Thinking & Project Management (Agile/Scrum, Roadmap Planning, Jira, Notion)",
      "Design Thinking & Process Optimization",
    ],
  },
  {
    title: "Backend & DevOps",
    skills: [
      "Backend Development (Laravel, PHP, REST APIs, Modular Architecture, Repository-Service Pattern, Swagger/OpenAPI)",
      "Database Architecture (MySQL, SQL Optimization, Replication, Data Modeling ERD, Redis Caching)",
      "DevOps & Deployment (Docker, Linux Server Management, CI/CD pipelines)",
      "Third-Party Integrations (Payment Gateways, Firebase FCM, WhatsApp API)",
    ],
  },
  {
    title: "Emerging Tech & Languages",
    skills: [
      "AI Technologies (Advanced RAG, Hybrid Search, Multi-Query Expansion, LLM Integration, LangChain, LangGraph)",
      "Frontend Foundations (Blade, Filament PHP)",
      "Languages (Arabic - Native, English - Upper Intermediate)",
    ],
  },
];
