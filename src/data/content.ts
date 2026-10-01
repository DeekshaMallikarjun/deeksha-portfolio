export const profile = {
  name: 'Deekshitha M',
  title: 'Computer Science and Engineering student at MITM',
  intro:
    'Motivated final-year Computer Science Engineering student with strong skills in programming, problem-solving, and AI technologies. Passionate about building efficient, impactful software solutions.',
  email: 'deekshamallikarjun11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/deekshitha-m-76359839a',
  linkedinLabel: 'linkedin.com/in/deekshitha-m-76359839a',
}

export const about = {
  paragraph:
    'I am a motivated final-year Computer Science Engineering student at Maharaja Institute of Technology, Mysore. With strong foundational skills in programming, problem-solving, and emerging AI technologies, I am passionate about engineering practical software that turns ideas into efficient, scalable applications.',
  education: {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Maharaja Institute of Technology, Mysore',
    years: '2023–2027',
    semester: 'Final Year Student',
  },
}

export type Project = {
  name: string
  description: string
  emphasis: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  category?: string
}

export const projects: Project[] = [
  {
    name: 'Krishiastra',
    description:
      'Intelligent multimodule AI system designed for smart farming and precision agriculture.',
    emphasis:
      'Integrates multi-module AI models to assist farmers with predictive crop health analytics, smart yield optimization, and resource efficiency.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Smart Farming', 'Precision Agriculture', 'Python'],
    githubUrl: undefined,
    demoUrl: undefined,
    category: 'AI & Agriculture',
  },
  {
    name: 'Chatbot using RAG',
    description:
      'Developed an intelligent chatbot that answers questions from uploaded PDFs using Retrieval-Augmented Generation (RAG).',
    emphasis:
      'Combines document chunking, semantic vector embeddings, and LLM techniques to deliver grounded, context-aware answers.',
    tags: ['RAG', 'LLMs', 'Vector Search', 'NLP', 'Python'],
    githubUrl: undefined,
    demoUrl: undefined,
    category: 'GenAI & NLP',
  },
  {
    name: 'Text-to-Speech Converter',
    description:
      'Voice synthesis application that converts written text into natural and articulate speech.',
    emphasis:
      'Implements real-time speech synthesis algorithms with responsive controls and audio feedback.',
    tags: ['Speech Synthesis', 'JavaScript', 'Web Audio', 'Python'],
    githubUrl: undefined,
    demoUrl: undefined,
    category: 'Audio & Speech',
  },
  {
    name: 'Library Management System',
    description:
      'Software for managing books, members, borrowing, returns, cataloguing, and transactions efficiently.',
    emphasis:
      'Reduces manual administrative effort and improves record-keeping accuracy with automated tracking and penalty management.',
    tags: ['DBMS', 'Java / Python', 'SQL Database', 'OOP'],
    githubUrl: undefined,
    demoUrl: undefined,
    category: 'Management Systems',
  },
  {
    name: 'Campus Placement Portal',
    description:
      'A web-based recruitment platform connecting students, college placement cells, and hiring companies.',
    emphasis:
      'Streamlines job postings, eligibility verification, student applications, and recruitment progress tracking in one dashboard.',
    tags: ['Web Application', 'Full Stack', 'Workflow Engine', 'DBMS'],
    githubUrl: undefined,
    demoUrl: undefined,
    category: 'Web Platforms',
  },
]

export const skills = {
  technical: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'HTML'],
  technologies: ['Machine Learning', 'Artificial Intelligence', 'Blockchain', 'RAG / LLMs'],
  competencies: ['Data Structures', 'DBMS', 'OOPS', 'Networking'],
  soft: ['Communication', 'Leadership', 'Time Management', 'Teamwork'],
  // Backward compatibility
  strengths: ['Communication', 'Leadership', 'Time Management', 'Teamwork'],
}

export const certifications = [
  {
    name: 'Introduction to Frontend Development',
    issuer: 'Coursera',
  },
  {
    name: 'Applied Machine Learning in Python',
    issuer: 'Coursera',
  },
  {
    name: 'Blockchain Basics',
    issuer: 'Coursera',
  },
  {
    name: 'Advanced Java',
    issuer: 'Coursera',
  },
  {
    name: 'Cyber Security Technologies',
    issuer: 'Coursera',
  },
  {
    name: 'JDBC Project',
    issuer: 'Coursera',
  },
  {
    name: 'Packet Switching Networks',
    issuer: 'Coursera',
  },
  {
    name: 'Programming with JavaScript',
    issuer: 'Coursera',
  },
]

export type Achievement = {
  title: string
  subtitle?: string
  badge: string
  organizer?: string
  description: string
  year?: string
  highlight?: string
}

export const achievements: Achievement[] = [
  {
    title: 'AI Hackathon (YUGMA 2.0)',
    subtitle: 'AI-Based Solution Development',
    badge: 'AI Hackathon 🤖',
    organizer: 'Jawaharlal Nehru National College of Engineering (JNNCE), Shivamogga',
    description:
      'Collaborated in a competitive national hackathon to architect and prototype AI-driven solutions addressing real-world challenges.',
    year: '2025–2026',
    highlight: 'AI Solution Development',
  },
  {
    title: 'Java Bootcamp',
    subtitle: 'Stack Forge Club',
    badge: 'Bootcamp 💻',
    organizer: 'Stack Forge Club',
    description:
      'Completed an intensive technical bootcamp mastering core and advanced Java principles, object-oriented design, and project-based problem solving.',
    year: '2024–2025',
    highlight: 'Advanced Java Bootcamp',
  },
  {
    title: 'Innovotsava 2026',
    subtitle: 'Technical Project Expo & Symposium',
    badge: 'Technical Expo 🌟',
    organizer: 'Maharaja Institute of Technology, Mysore',
    description:
      'Demonstrated technical capabilities and participated in project exhibition sessions at the annual college innovation symposium.',
    year: '2026',
    highlight: 'Technical Participation',
  },
  {
    title: 'HACKVERSE',
    subtitle: 'Stack Forge Hackathon',
    badge: 'Hackathon ⚡',
    organizer: 'Maharaja Institute of Technology, Mysore',
    description:
      'Competed in a fast-paced sprint to develop collaborative engineering prototypes and problem-solving software under timed constraints.',
    year: '2024',
    highlight: 'Rapid Prototyping',
  },
]

// Backward-compatible alias
export const participation = achievements

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
