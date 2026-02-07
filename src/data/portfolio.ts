// src/data/portfolio.ts

export const PROFILE = {
  name: "Veselin Veselinov",
  role: "Junior Python Developer",
  subRole: "Django Specialist & Hardware Enthusiast",
  location: "Dobrich/Varna, Bulgaria",
  bio: "A dedicated and fast-learning junior developer specializing in Python, C++, and SQL. Through personal projects, I have gained practical experience in building software and solving real-world problems. I am passionate about the intersection of software and the physical world.",
  email: "your-email@gmail.com", // Add your real email here
  socials: {
    github: "https://github.com/Veselin15",
    linkedin: "https://www.linkedin.com/in/veselin-veselinov-a7bb9930a",
    fiverr: "https://www.fiverr.com/veselin_06/"
  },
};

export const SKILLS = [
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "React / Next.js", category: "Frontend" },
  { name: "Docker", category: "DevOps" },
  { name: "C++", category: "Embedded" },
  { name: "Arduino", category: "Embedded" },
];

export const EDUCATION = [
  {
    school: "Technical University Varna",
    degree: "Information and Communication Technology",
    year: "2025 - 2029",
    icon: "university",
    description: "One of the best Universities in Bulgaria."
  },
  {
    school: "Software University (SoftUni)",
    degree: "Software Engineer with Python",
    year: "2022 - 2025",
    icon: "code",
    description: "Python Basics, Fundamentals, Advanced, OOP, ORM, PostgreSQL, and Django Web."
  },
  {
    school: "Language Learning High School 'Geo Milev'",
    degree: "Primary Language: German; Secondary: English",
    year: "2020 - 2025",
    icon: "school",
    description: "Elite Language Learning High School in Dobrich, Bulgaria."
  }
];

export const CERTIFICATES = [
  {
    title: "DSD II German Diploma",
    issuer: "Der Kultusministerkonferenz",
    year: "2025",
    url: "https://drive.google.com/file/d/1nS3441KSGVEEvuNpMnQNFw2sIZGJR0Om/view?usp=sharing"
  },
  {
    title: "Django Advanced",
    issuer: "SoftUni",
    year: "2025",
    url: "https://softuni.bg/certificates/details/248897/5cb379ca"
  },
  {
    title: "Django Basics",
    issuer: "SoftUni",
    year: "2025",
    url: "https://softuni.bg/certificates/details/246234/caf6a2c4"
  },
  {
    title: "PostgreSQL",
    issuer: "SoftUni",
    year: "2025",
    url: "https://softuni.bg/certificates/details/241385/21b4f6c5"
  },
  {
    title: "Python OOP",
    issuer: "SoftUni",
    year: "2024",
    url: "https://softuni.bg/certificates/details/231822/70cd1167"
  },
  {
    title: "Python Advanced",
    issuer: "SoftUni",
    year: "2024",
    url: "https://softuni.bg/certificates/details/227651/e1ebd439"
  }
];

export const PROJECTS = [
  {
    id: "calories-tracker",
    title: "Calories Tracker",
    description: "A Django-based web app for tracking daily calorie intake and nutrition goals. Features user authentication and FatSecret API integration.",
    tech: ["Django", "PostgreSQL", "FatSecret API", "Bootstrap"],
    link: "https://caloriestracker-yy3h.onrender.com",
    github: "https://github.com/Veselin15/Calories-Tracker",
    image: "/projects/calories-tracker.png",
    category: "Software"
  },
  {
    id: "face-recognition",
    title: "Celebrity Face Recognition AI",
    description: "Web app for celebrity face recognition using FaceNet for feature extraction and SVM for classification.",
    tech: ["Python", "FaceNet", "SVM", "Flask/Django"],
    github: "https://github.com/Veselin15/Face-Recognition",
    image: "/projects/face-ai.png",
    category: "AI"
  },
  {
    id: "class-scheduling",
    title: "School Class Scheduling System",
    description: "Desktop application that auto-generates conflict-free timetables based on session counts and teacher availability.",
    tech: ["Python", "PyQt5", "Algorithms"],
    github: "https://github.com/Veselin15",
    image: "/projects/scheduling.png",
    category: "Software"
  }
];