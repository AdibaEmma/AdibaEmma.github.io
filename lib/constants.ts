export const siteConfig = {
  name: 'Emmanuel Adiba',
  title: 'Fullstack Engineer & ML/AI Enthusiast',
  description:
    'Senior Fullstack Engineer with 4+ years building scalable applications and microservices. Passionate about ML/AI and Psychology, with a proven track record of delivering high-impact solutions that drive business growth.',
  url: 'https://emmanuel-adiba.vercel.app',
  email: 'eabaagah@gmail.com',
  phone: ['+233556137400', '+233200011489'],
  location: 'Bolgatanga, Upper East, Ghana',
  social: {
    twitter: 'https://www.twitter.com/emmanuel_adiba',
    linkedin: 'https://www.linkedin.com/in/adiba-emmanuel/',
    facebook: 'https://www.facebook.com/adiba.emmanuel.5',
    github: 'https://www.github.com/AdibaEmma',
  },
}

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'ML/AI', href: '/ml-ai' },
  { name: 'Contact', href: '/contact' },
]

export const skills = {
  frontend: [
    { name: 'React', icon: 'devicon-react-plain' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    { name: 'Sass', icon: 'devicon-sass-original' },
    { name: 'Angular', icon: 'devicon-angularjs-plain' },
  ],
  backend: [
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'NestJS', icon: 'devicon-nestjs-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Laravel', icon: 'devicon-laravel-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain' },
    { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
  ],
  database: [
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'Redis', icon: 'devicon-redis-plain' },
  ],
  tools: [
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'GitLab', icon: 'devicon-gitlab-plain' },
    { name: 'Jira', icon: 'devicon-jira-plain' },
    { name: 'Heroku', icon: 'devicon-heroku-plain' },
  ],
  mlai: [
    { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
    { name: 'PyTorch', icon: 'devicon-pytorch-plain' },
    { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain' },
    { name: 'Pandas', icon: 'devicon-pandas-plain' },
    { name: 'NumPy', icon: 'devicon-numpy-plain' },
  ],
}

export const projects = [
  {
    id: 'sendafrika-platform',
    title: 'SendAfrika Payment Platform',
    description:
      "Contributed to developing SendAfrika's flagship fintech product with authentication functionalities and KYC modules, resulting in 40% increase in user onboarding efficiency.",
    technologies: ['NestJS', 'MongoDB', 'TypeScript', 'JWT', 'KYC APIs'],
    category: 'fullstack',
    githubUrl: 'https://github.com/AdibaEmma/sendafrika',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
    featured: true,
    impact: '40% increase in user onboarding efficiency',
  },
  {
    id: 'news-aggregator',
    title: 'Tech News Aggregator',
    description:
      'Pioneered development of a cutting-edge news aggregator app serving 15,000+ users with real-time tech news using advanced microservices architecture.',
    technologies: ['Kotlin', 'Spring Boot', 'PostgreSQL', 'Microservices'],
    category: 'backend',
    githubUrl: 'https://github.com/AdibaEmma/news-aggregator',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop',
    featured: true,
    impact: 'Serving 15,000+ active users',
  },
  {
    id: 'trading-engine',
    title: 'Microservice Trading Engine',
    description:
      'Engineered high-performing microservice trading engine using Java, Spring Boot, and Redis, resulting in 20% monthly revenue boost through scalable architecture.',
    technologies: [
      'Java',
      'Spring Boot',
      'Redis',
      'Microservices',
      'WebSockets',
    ],
    category: 'backend',
    githubUrl: 'https://github.com/AdibaEmma/trading-engine',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
    featured: true,
    impact: '20% monthly revenue increase',
  },
  {
    id: 'blockchain-wallet',
    title: 'Blockchain Wallet System',
    description:
      'Created secure blockchain wallet using Bitcore API with transaction endpoints for Bitcoin operations, implementing critical computations to ensure zero latency.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Bitcore API'],
    category: 'blockchain',
    githubUrl: 'https://github.com/AdibaEmma/blockchain-wallet',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
    featured: true,
    impact: 'Zero-latency transactions',
  },
  {
    id: 'green-square-platform',
    title: 'Green Square HR Platform',
    description:
      'Built comprehensive HR platform with admin monitoring, candidate management, and file upload to Cloudinary, achieving 45% improvement in server response time.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Docker',
      'Cloudinary',
    ],
    category: 'fullstack',
    githubUrl: 'https://github.com/AdibaEmma/green-square',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    featured: true,
    impact: '45% server response improvement',
  },
  {
    id: 'exam-management-system',
    title: 'Exam Management System',
    description:
      'Developed automated exam timetable generation system with QR code registration, increasing registration efficiency by 40%.',
    technologies: ['Node.js', 'Vue.js', 'MongoDB', 'QR Code API'],
    category: 'fullstack',
    githubUrl: 'https://github.com/AdibaEmma/exam-management',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
    featured: false,
    impact: '40% registration efficiency increase',
  },
]

export const roles = [
  'Fullstack Engineer',
  'Software Engineer',
  'Backend Engineer',
  'Frontend Engineer',
  'ML/AI Enthusiast',
  'Psychology Enthusiast',
  'Stoic',
  'Lifelong Learner',
  'Husband',
  'Father',
]

export const workExperience = [
  {
    id: 'global-tech-network',
    company: 'Global Tech Network',
    position: 'Software Developer',
    location: 'Orlando, Florida, United States',
    period: 'February 2024 - Present',
    type: 'Remote',
    achievements: [
      'Spearheaded OITs Web project development using ReactJs, NestJS, MySQL, and WebSockets',
      'Achieved 40% increase in deadline efficiency through strategic implementation',
      'Created structured documentation process and standardized testing methods',
      'Increased team productivity by 30% and minimized development time by 25%',
    ],
    technologies: ['React', 'NestJS', 'MySQL', 'WebSockets', 'TypeScript'],
  },
  {
    id: 'sendafrika',
    company: 'SendAfrika LTD',
    position: 'Software Developer (Contract)',
    location: 'Accra, Ghana',
    period: 'Sep 2023 - Jan 2024',
    type: 'Contract',
    achievements: [
      'Developed authentication functionalities and KYC modules for flagship product',
      'Achieved 40% increase in user onboarding efficiency',
      'Created structured documentation and testing standards',
      'Improved team productivity by 30%',
    ],
    technologies: ['NestJS', 'MongoDB', 'TypeScript', 'JWT', 'KYC APIs'],
  },
  {
    id: 'turntabl',
    company: 'Turntabl Ghana Limited',
    position: 'Software Engineer',
    location: 'Accra, Ghana',
    period: 'Sep 2021 - Aug 2023',
    type: 'Full-time',
    achievements: [
      'Pioneered news aggregator app serving 15,000+ users with real-time tech news',
      'Designed ORM diagrams and orchestrated database migration using Flyway',
      'Engineered microservice trading engine resulting in 20% monthly revenue boost',
      'Built scalable and resilient solutions driving financial success',
    ],
    technologies: [
      'Kotlin',
      'Spring Boot',
      'PostgreSQL',
      'Redis',
      'Java',
      'Flyway',
    ],
  },
  {
    id: 'softmelon',
    company: 'Softmelon Engineering',
    position: 'Software Developer',
    location: 'Accra, Ghana',
    period: 'Oct 2021 - Aug 2022',
    type: 'Full-time',
    achievements: [
      'Orchestrated timely development of CRM software by coordinating cross-functional teams',
      'Achieved project completion ahead of schedule through effective leadership',
      'Pioneered product features resulting in 40% surge in user engagement',
      'Streamlined documentation, reducing required meetings by 70%',
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Engineering',
  institution: 'University of Energy and Natural Resources',
  location: 'Sunyani, Ghana',
  period: '2016 - 2020',
  achievements: [
    'Specialized in software engineering and system design',
    'Worked on web projects for fellow students',
    'Collaborated on web application as final year project',
    'Maintained strong academic performance throughout',
  ],
}

export const aboutContent = {
  intro: "I'm Emmanuel, a passionate fullstack engineer",
  description: `with over 4 years of professional experience building scalable web applications and microservices. I specialize in modern JavaScript/TypeScript ecosystems, backend architectures, and have a proven track record of delivering high-impact solutions that drive business growth.
  
  My expertise spans from frontend frameworks like React and Vue.js to robust backend systems using Node.js, NestJS, Java Spring Boot, and various databases. I'm passionate about clean code, system design, and creating solutions that make a real difference.
  
  Beyond technology, I'm deeply interested in ML/AI and Psychology - fascinated by how these fields intersect with human behavior and decision-making. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, mentoring fellow developers, and spending quality time with my family. I believe in continuous learning and staying at the forefront of technological innovation.`,
  resumePath: '/files/Emmanuel_Adiba_CV.pdf',
}
