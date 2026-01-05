import communityForumImg from '../assets/MyCommunityForum1.PNG';
import heroIoImg from '../assets/HeroIo1.PNG';
import goptsImg from '../assets/GOPTS1.PNG';
import profileImg from '../assets/Al-Roman.jpg';

export const personalInfo = {
  name: "Al-Roman",
  designation: "CS Student & Full Stack Developer",
  email: "alromanmolla@gmail.com",
  phone: "01319694957",
  whatsapp: "01319694957",
  location: "Bangladesh",
  profileImg: profileImg,
  about: `I am Al-Roman, a 21-year-old Computer Science student from Bangladesh, driven by a passion for technology and problem-solving.
  
  My journey is split between the rigorous logic of Competitive Programming and the creative world of Full Stack Development. I have solved over 250+ problems on top online judges, sharpening my understanding of Data Structures, Algorithms, and OOP in C, C++, Java, and Python.

  Simultaneously, I love building applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and modern frameworks like Next.js. I have built and deployed multiple small-to-medium scale projects, focusing on clean code, performance, and user experience.`,
  socials: {
    github: "https://github.com/Al-Roman23/",
    linkedin: "https://www.linkedin.com/in/al-roman/",
  }
};

export const skills = [
  // Programming & DSA
  { name: "C / C++", percentage: 90, category: "Languages & DSA" },
  { name: "Java", percentage: 85, category: "Languages & DSA" },
  { name: "Python", percentage: 80, category: "Languages & DSA" },
  { name: "Data Structures", percentage: 85, category: "Languages & DSA" },
  { name: "Algorithms", percentage: 80, category: "Languages & DSA" },
  { name: "OOP", percentage: 90, category: "Languages & DSA" },

  // Full Stack Technologies
  { name: "JavaScript (ES6+)", percentage: 90, category: "Web Technologies" },
  { name: "React.js", percentage: 90, category: "Web Technologies" },
  { name: "Next.js", percentage: 80, category: "Web Technologies" },
  { name: "HTML5 & CSS3", percentage: 95, category: "Web Technologies" },
  { name: "Tailwind CSS", percentage: 95, category: "Web Technologies" },
  { name: "Node.js", percentage: 75, category: "Web Technologies" },
  { name: "Express.js", percentage: 75, category: "Web Technologies" },
  { name: "Firebase", percentage: 85, category: "Web Technologies" },
  { name: "MongoDB", percentage: 80, category: "Web Technologies" },
];

export const projects = [
  {
    id: 1,
    title: "My_Community_Forum",
    image: communityForumImg,
    description: "A modern, community-focused event management platform designed to connect people through meaningful social service initiatives! Users can create, join, and monitor local events such as road cleanups, tree plantations, donation campaigns, and awareness programs! The platform transforms online interaction into real-world community impact!",
    techStack: ["React.js", "Vite", "Tailwind CSS", "DaisyUI", "Firebase Auth", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://mycommunityforum.web.app/",
    repoLink: "https://github.com/Al-Roman23/My_Community_Forum_Frontend",
    challenges: "Implementing role-based dashboards and ensuring secure authentication workflows.",
    improvements: "Adding real-time chat functionality for event participants.",
    features: [
        "Event Management System",
        "Authentication & Security",
        "Role-Based Dashboards",
        "User Experience & Accessibility"
    ]
  },
  {
    id: 2,
    title: "Hero-Io",
    image: heroIoImg,
    description: "Hero Apps is a modern web application that provides a centralized platform for discovering, installing, and managing productivity apps. Users can explore trending and all available applications, track installations, view app details, rates, and reviews.",
    techStack: ["React.js", "React Router", "JavaScript", "CSS Modules"],
    liveLink: "https://heroio23.netlify.app/",
    repoLink: "https://github.com/Al-Roman23/Hero-Io",
    challenges: "Managing local storage effectively to simulate app installation and uninstallation.",
    improvements: "Integrating a real backend for user accounts and cross-device sync.",
    features: [
        "Browse trending apps",
        "Install/Uninstall simulation (Local Storage)",
        "Search and sort functionality",
        "Interactive analytics charts"
    ]
  },
  {
    id: 3,
    title: "My_GOPTS",
    image: goptsImg,
    description: "The Garments Order & Production Tracker System (GOPTS) is a full-stack web application designed to help small and medium-sized garment factories efficiently manage orders, production workflows, inventory, and delivery tracking! The system supports role-based access control for Admin, Manager, and Buyer.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Firebase"],
    liveLink: "https://mygopts.web.app/",
    repoLink: "https://github.com/Al-Roman23/My_GOPTS_ClienT",
    challenges: "Orchestrating complex role-based access control (RBAC) and ensuring data consistency across multiple production stages.",
    improvements: "Adding an inventory management module for raw materials.",
    features: [
        "Authentication & Authorization (JWT/Firebase)",
        "Product & Order System",
        "Role-Based Dashboards (Admin/Manager/Buyer)",
        "Production Timeline Tracking"
    ]
  }
];
