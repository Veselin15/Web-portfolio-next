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
    {name: "Python", category: "Backend"},
    {name: "Django", category: "Backend"},
    {name: "FastAPI", category: "Backend"},
    {name: "PostgreSQL", category: "Database"},
    {name: "React / Next.js", category: "Frontend"},
    {name: "Docker", category: "DevOps"},
    {name: "C++", category: "Embedded"},
    {name: "Arduino", category: "Embedded"},
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

export type ProjectCategory = "Software" | "Hardware";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    longDescription?: string;
    tech: string[];
    image?: string;
    repoUrl?: string;
    liveUrl?: string;
    features?: string[];
    gallery?: string[];
}

export const PROJECTS: Project[] = [
    // --- SOFTWARE PROJECTS ---
    {
        id: "calories-tracker",
        title: "Calories Tracker",
        category: "Software",
        description: "A Django-based web app for tracking daily calorie intake and nutrition goals. Features user authentication and FatSecret API integration.",
        tech: ["Django", "PostgreSQL", "FatSecret API", "Bootstrap"],
        repoUrl: "https://github.com/Veselin15/Calories-Tracker",
        image: "/projects/calories.png"
    },
    {
        id: "face-recognition",
        title: "Celebrity Face Recognition AI",
        category: "Software",
        description: "Web app for celebrity face recognition using FaceNet for feature extraction and SVM for classification.",
        tech: ["Python", "FaceNet", "SVM", "Flask"],
        repoUrl: "https://github.com/Veselin15/Face-Recognition",
        image: "/projects/face-ai.png"
    },
    {
        id: "scheduling-system",
        title: "School Class Scheduling",
        category: "Software",
        description: "Desktop application that auto-generates conflict-free timetables based on session counts and teacher availability.",
        tech: ["Python", "PyQt5", "Algorithms"],
        repoUrl: "https://github.com/Veselin15/School-Scheduler",
        image: "/projects/scheduler.png"
    },

    // --- HARDWARE PROJECTS ---
    {
        id: "homelab-server",
        title: "Home Lab Server & Portfolio",
        category: "Hardware",
        description: "Transforming old hardware into a powerful home Linux server hosted via Cloudflare Tunnels.",
        // Note: Using template literals (backticks) for multi-line strings
        longDescription: `
### 1. The Idea: New Life for Old Hardware
Instead of throwing away my old laptop, I decided to turn it into the heart of my **home lab**. The goal was to create a fully functional web server accessible from anywhere in the world, without paying for expensive cloud hosting (VPS) and without compromising my home network security. On this server, I built and hosted my personal portfolio – the very site you are looking at right now.

### 2. Hardware and Server Architecture
The first step was installing **Ubuntu Server** on the machine. I chose an architecture based entirely on microservices (Containers) for ease of management and scalability.

- **Docker & Docker Compose:** Everything runs in isolated containers. This ensures that the software (databases, site, cache) does not depend on the operating system and can be migrated to another machine in seconds.
- **Nginx Proxy Manager:** I use this as a "gatekeeper". It distributes traffic to the correct containers (e.g., the portfolio on port 8000, the chatbot on 8001) and manages SSL certificates.
- **Cloudflare Zero Trust Tunnel:** This was the "icing on the cake". Instead of opening ports on the router (which is a security risk) or paying for a static IP, I created an encrypted tunnel directly to Cloudflare. This keeps the site protected from DDoS attacks and accessible via HTTPS.

### 3. The Software: Modern Django Stack
The portfolio itself is not just a static HTML page, but a complex web system:

- **Backend:** Python & Django – a powerful framework providing the core logic and administration panel.
- **Frontend:** I utilized Tailwind CSS and DaisyUI for a modern, dark-themed design.
- **Database:** PostgreSQL – a professional database for storing projects and configuration settings.
- **AI Chatbot:** I integrated Google Gemini AI. When you ask a question in the chat, Django sends the request to Celery (an asynchronous queue), which is managed by Redis.

### 4. Challenges & Troubleshooting
- **MTU (Maximum Transmission Unit):** The connection to the Google API was timing out due to the double encapsulation of packets. I configured the Docker network to use a smaller packet size (MTU 1280), which stabilized the connection.
- **Caching & Mobile Menu:** Resolved display issues on specific screens through precise tuning of Tailwind classes and Cloudflare cache management.
`,
        tech: ["Ubuntu Server", "Docker", "Nginx Proxy Manager", "Cloudflare Tunnel", "Django", "PostgreSQL", "Redis", "Celery"],
        features: [
            "Self-Hosted on Old Hardware",
            "Cloudflare Zero Trust Security",
            "Dockerized Microservices",
            "AI Chatbot Integration (Gemini)",
            "Nginx Reverse Proxy"
        ],
        // FIXED PATHS: Added leading slash "/"
        image: "/images/projects/homelab-server/homelab.jpg",
        gallery: [
            "/images/projects/homelab-server/front_panel.jpg",
            "/images/projects/homelab-server/homelab.jpg",
            "/images/projects/homelab-server/code.png"
        ]
    },
    {
        id: "arduino-robot",
        title: "Autonomous Line Follower",
        category: "Hardware",
        description: "A high-speed line following robot using PID control and an array of IR sensors. Designed for competitive robotics.",
        longDescription: "A high-speed line following robot using PID control and an array of IR sensors. Designed for competitive robotics.",
        tech: ["C++", "Arduino", "PCB Design", "PID Control"],
        image: "/projects/robot.png"
    },
    {
        id: "iot-weather",
        title: "IoT Weather Station",
        category: "Hardware",
        description: "Solar-powered weather station transmitting temperature, humidity, and pressure data to a cloud dashboard via ESP8266.",
        tech: ["Embedded C", "ESP8266", "MQTT", "Grafana"],
        image: "/projects/weather.png"
    },
];