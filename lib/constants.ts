export const siteConfig = {
  name: "Emmanuel Adiba",
  title: "Fullstack Engineer & ML/AI Enthusiast",
  description: "Fullstack developer with expertise in web development and a passion for Machine Learning and AI",
  url: "https://emmanuel-adiba.vercel.app",
  email: "eabaagah@gmail.com",
  phone: ["+233556137400", "+233200011489"],
  location: "Bolgatanga, Upper East, Ghana",
  social: {
    twitter: "https://www.twitter.com/emmanuel_adiba",
    linkedin: "https://www.linkedin.com/in/adiba-emmanuel/",
    facebook: "https://www.facebook.com/adiba.emmanuel.5",
    github: "https://www.github.com/AdibaEmma"
  }
}

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "ML/AI", href: "/ml-ai" },
  { name: "Contact", href: "/contact" }
]

export const skills = {
  frontend: [
    { name: "React", icon: "devicon-react-plain", level: 90 },
    { name: "Next.js", icon: "devicon-nextjs-plain", level: 85 },
    { name: "TypeScript", icon: "devicon-typescript-plain", level: 85 },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: 95 },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", level: 90 },
    { name: "Sass", icon: "devicon-sass-original", level: 85 },
    { name: "Angular", icon: "devicon-angularjs-plain", level: 75 }
  ],
  backend: [
    { name: "Node.js", icon: "devicon-nodejs-plain", level: 90 },
    { name: "Express", icon: "devicon-express-original", level: 90 },
    { name: "Python", icon: "devicon-python-plain", level: 85 },
    { name: "Java", icon: "devicon-java-plain", level: 80 },
    { name: "Spring Boot", icon: "devicon-spring-plain", level: 75 },
    { name: "Kotlin", icon: "devicon-kotlin-plain", level: 70 }
  ],
  database: [
    { name: "MongoDB", icon: "devicon-mongodb-plain", level: 85 },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: 85 },
    { name: "MySQL", icon: "devicon-mysql-plain", level: 80 },
    { name: "Redis", icon: "devicon-redis-plain", level: 75 }
  ],
  tools: [
    { name: "Git", icon: "devicon-git-plain", level: 95 },
    { name: "Docker", icon: "devicon-docker-plain", level: 80 },
    { name: "GitHub", icon: "devicon-github-original", level: 95 },
    { name: "GitLab", icon: "devicon-gitlab-plain", level: 85 },
    { name: "Jira", icon: "devicon-jira-plain", level: 80 },
    { name: "Heroku", icon: "devicon-heroku-plain", level: 75 }
  ],
  mlai: [
    { name: "TensorFlow", icon: "devicon-tensorflow-original", level: 70 },
    { name: "PyTorch", icon: "devicon-pytorch-plain", level: 65 },
    { name: "Scikit-learn", icon: "devicon-scikitlearn-plain", level: 75 },
    { name: "Pandas", icon: "devicon-pandas-plain", level: 80 },
    { name: "NumPy", icon: "devicon-numpy-plain", level: 80 }
  ]
}

export const projects = [
  {
    id: "memories-app",
    title: "Memories App",
    description: "A Node.js and React project crafted for writing down memories of events you encountered or activities you participated in.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    liveUrl: "https://memsmile.netlify.app",
    githubUrl: "https://github.com/AdibaEmma/memories-app",
    image: "/images/project-1.jpg",
    featured: true
  },
  {
    id: "trice-stock-management",
    title: "Trice Stock Management System",
    description: "A Java desktop application for a client to manage stocks, sales agents and print records for daily sales.",
    technologies: ["Java", "JavaFX", "MySQL"],
    category: "desktop",
    githubUrl: "https://github.com/AdibaEmma/trice-stock-management",
    image: "/images/type-1.png",
    featured: true
  },
  {
    id: "order-processing-service",
    title: "Order Processing Service",
    description: "A backend microservice using Spring Boot, Redis, RabbitMQ to communicate with market data microservice for receiving market data.",
    technologies: ["Spring Boot", "Redis", "RabbitMQ", "Java"],
    category: "backend",
    githubUrl: "https://github.com/AdibaEmma/order-processing-service-g12",
    image: "/images/type-2.png",
    featured: true
  }
]

export const roles = [
  "Fullstack Developer",
  "Backend Engineer",
  "Frontend Developer",
  "ML/AI Enthusiast",
  "Software Engineer"
]

export const aboutContent = {
  intro: "I'm Emmanuel, a passionate fullstack developer",
  description: `focused on crafting great web experiences. I enjoy creating beautifully designed, intuitive and functional websites for a living and love what I do as everyday there is something new and exciting to learn.
  
  When I'm not working, I usually spend a lot of time learning new techniques and best practices in web development and helping others learn web development. Besides programming, I love to cook and play games.
  
  I graduated from the University of Energy and Natural Resources where I studied Computer Engineering. While I was at the university, I worked on some web projects for my mates and collaborated with a friend to work on a web application as a final year project. In my spare time, the web development community is a big part of my life. I keep myself involved and researching which helps me stay up to date.`,
  resumePath: "/files/Emmanuel_Adiba_CV.pdf"
}