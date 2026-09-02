export const personalInfo = {
  name: "Wirakarn Angumnuaychock",
  title: "CREATIVE DEVELOPER",
  tagline: "EDITORIAL DESIGN & FULL-STACK SOFTWARE ENGINEERING",
  bio: "Business operations background — purchasing, executive support, cross-functional coordination — now channeled into Product Management, with a growing interest in Software Development and UX/UI Design.",
  location: "Bangkok, Thailand",
  status: "🟢 AVAILABLE FOR FREELANCE & FULL-TIME",
  email: "wirakarn.ang@gmail.com",
  phone: "+66 96 130 6258",
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/wirakarn-angumnuaychock-576363242/",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    line: "https://line.me"
  }
};

export const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer & Frontend Developer",
    company: "Tech Interactive Studio",
    period: "2024 - PRESENT",
    type: "FULL-TIME",
    location: "BANGKOK",
    badgeColor: "bg-black text-white border-pink-400",
    description: "ออกแบบและพัฒนา Web Application เชิงโต้ตอบ พัฒนาระบบ Frontend สไตล์ Editorial White, Black & Pink พร้อมปรับปรุงประสิทธิภาพเว็บไซต์ให้ทำคะแนน Performance สูงสุด",
    achievements: [
      "พัฒนา Web Application ที่รองรับผู้ใช้งานมากกว่า 100,000 MAU",
      "ลดเวลาโหลดหน้าเว็บลง 45% ด้วยเทคนิค Lazy Loading & Asset Compression",
      "นำกระบวนการพัฒนา Component Library มาใช้งานร่วมกับทีมอย่างมีประสิทธิภาพ"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "GSAP"]
  },
  {
    id: 2,
    role: "Full-Stack Web Developer",
    company: "Pixel Craft Tech",
    period: "2022 - 2024",
    type: "FULL-TIME",
    location: "BANGKOK",
    badgeColor: "bg-pink-400 text-white border-black",
    description: "รับผิดชอบพัฒนา Web Application และ RESTful API ให้ลูกค้าภาคธุรกิจ รวมถึงระบบ E-commerce ที่มีความปลอดภัยสูงและรองรับผู้ใช้พร้อมกันจำนวนมาก",
    achievements: [
      "ออกแบบและพัฒนา Dashboard แบบ Real-time ที่มี WebSockets ภายใน 2 เดือน",
      "บูรณาการ Payment Gateway ประมวลผลธุรกรรมสำเร็จ 99.9%"
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: 3,
    role: "Software Development Intern",
    company: "WonderLab Digital",
    period: "2021 - 2022",
    type: "INTERNSHIP",
    location: "BANGKOK",
    badgeColor: "bg-pink-100 text-black border-black",
    description: "ออกแบบ UI Wireframe, Interactive Prototype ใน Figma และแปลงแบบดีไซน์ให้เป็น Responsive Application พร้อม Animation ที่ลื่นไหล",
    achievements: [
      "คว้ารางวัล Best Creative UI Project ในงานประจำปีของบริษัท",
      "สร้าง Micro-interactions และ Custom Animations เพิ่ม Engagement 30%"
    ],
    techStack: ["Figma", "HTML5/CSS3", "JavaScript", "React"]
  }
];

export const education = [
  {
    id: 1,
    degree: "ปริญญาตรี เทคโนโลยีสารสนเทศ (B.Sc. in Information Technology)",
    institution: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL)",
    period: "2021 - 2025",
    gpa: "HIGH DISTINCTION",
    details: "เชี่ยวชาญด้าน Software Engineering, Web Application Development, Information Technology และ Computer Science ร่วมทำโครงงานพัฒนาเว็บแอปพลิเคชันระดับมืออาชีพ",
    badge: "🎓 KMITL Information Technology",
    badgeColor: "bg-black text-pink-300 border-pink-400"
  },
  {
    id: 2,
    degree: "มัธยมศึกษาตอนปลาย แผนการเรียน วิทย์-คณิต",
    institution: "โรงเรียนมัธยมศึกษาชั้นนำ",
    period: "2018 - 2021",
    gpa: "3.85 / 4.00",
    details: "สำเร็จการศึกษาด้วยผลการเรียนดีเยี่ยม เข้าร่วมกิจกรรมและโครงการแข่งขันด้านเทคโนโลยีและคอมพิวเตอร์อย่างสม่ำเสมอ",
    badge: "📜 Science-Math Program",
    badgeColor: "bg-pink-400 text-white border-black"
  }
];

export const skills = {
  frontend: [
    { name: "React.js & Next.js", level: 95, color: "#EC4899" },
    { name: "TypeScript", level: 90, color: "#000000" },
    { name: "Tailwind CSS", level: 95, color: "#F472B6" },
    { name: "JavaScript (ES6+)", level: 92, color: "#000000" },
    { name: "HTML5 / CSS3", level: 95, color: "#EC4899" },
    { name: "Framer Motion", level: 88, color: "#000000" }
  ],
  backend: [
    { name: "Node.js & Express", level: 85, color: "#000000" },
    { name: "PostgreSQL & SQL", level: 80, color: "#EC4899" },
    { name: "RESTful APIs", level: 88, color: "#000000" },
    { name: "Git & Version Control", level: 92, color: "#F472B6" }
  ],
  creative: [
    { name: "UI/UX Design (Figma)", level: 90, color: "#EC4899" },
    { name: "Editorial Y2K Layouts", level: 95, color: "#000000" },
    { name: "Responsive Web Design", level: 95, color: "#F472B6" }
  ],
  tools: [
    { name: "Git & GitHub", level: 92, color: "#000000" },
    { name: "Vite / Webpack", level: 90, color: "#EC4899" },
    { name: "Vercel / Netlify", level: 92, color: "#000000" }
  ],
  soft: [
    { name: "Cross-Functional Collaboration", level: 95, color: "#EC4899" },
    { name: "Problem Solving & Critical Thinking", level: 92, color: "#000000" },
    { name: "Agile & Scrum Delivery", level: 94, color: "#F472B6" },
    { name: "Active Listening & Empathy", level: 92, color: "#000000" },
    { name: "Adaptability & Fast Learning", level: 95, color: "#EC4899" },
    { name: "Time & Priority Management", level: 90, color: "#000000" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Editorial ID Badge Portfolio",
    category: "Web App",
    summary: "เว็บไซต์พอร์ทโฟลิโอสไตล์ Editorial Lanyard ID Badge ดีไซน์โทนสีขาว ดำ ชมพู พร้อมการ์ดนำเสนอและแอนิเมชันสุดโฉบเฉี่ยว",
    description: "โปรเจกต์พัฒนาเว็บไซต์นำเสนอผลงานด้วยสไตล์ Editorial Magazine & ID Card Lanyard มีการ์ดแขวนสายคล้องคอ และการจัดวางโทนสีขาว ดำ ชมพู",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/example/editorial-portfolio",
    featured: true,
    stats: { views: "14.2K", stars: "480" }
  },
  {
    id: 2,
    title: "Full-Stack E-Commerce & Dashboard",
    category: "Fullstack",
    summary: "ระบบตะกร้าสินค้าและแดชบอร์ดบริหารจัดการข้อมูลแบบ Real-time พร้อมฟีเจอร์ชำระเงินและวิเคราะห์ข้อมูล",
    description: "แอปพลิเคชันจัดการร้านค้าออนไลน์ รองรับการชำระเงิน ประมวลผลคำสั่งซื้อ และแสดงผลกราฟแดชบอร์ดสรุปยอดขาย",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/example/fullstack-ecommerce",
    featured: true,
    stats: { views: "9.8K", stars: "320" }
  },
  {
    id: 3,
    title: "Black & Pink Dispatch UI",
    category: "Design",
    summary: "ดีไซน์แคนวาสย้อนยุค Y2K High Fashion Interactive UI พร้อมระบบเปลี่ยนธีม White, Black & Pink",
    description: "แกลเลอรีนำเสนอผลงานในรูปแบบของ Editorial Dispatch Card มีสติ๊กเกอร์ สายคล้องบัตรประจำตัว และภาพถ่ายขาวดำตัดชมพู",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Figma"],
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/example/editorial-ui",
    featured: false,
    stats: { views: "6.1K", stars: "210" }
  }
];

export const certificates = [
  {
    id: 1,
    title: "FULL-STACK SOFTWARE DEVELOPMENT",
    subtitle: "Junior Software Developer Bootcamp",
    issuer: "Generation Thailand",
    date: "2024",
    credentialId: "GEN-TH-2024-JSD-8812",
    category: "Development",
    iconType: "code",
    description: "Intensive 14-week immersive full-stack software development curriculum covering React, Node.js, Express, PostgreSQL, REST APIs, Git workflows, and Agile delivery.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    skills: ["React.js", "Node.js", "Express", "PostgreSQL", "REST APIs", "Agile / Scrum"],
    verifyUrl: "https://thailand.generation.org/",
    featured: true,
  },
  {
    id: 2,
    title: "RESPONSIVE WEB DESIGN & FRONTEND",
    subtitle: "freeCodeCamp Developer Certification",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-RWD-771920",
    category: "Frontend",
    iconType: "layout",
    description: "Modern HTML5 semantic architecture, CSS3, Flexbox, CSS Grid, Responsive Design Systems, media queries, and Web Accessibility (WCAG / a11y) standards.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    skills: ["HTML5", "CSS3 / Modern CSS", "Responsive UI", "Web Accessibility", "Flexbox & Grid"],
    verifyUrl: "https://www.freecodecamp.org/certification/wirakarn/responsive-web-design",
    featured: true,
  },
  {
    id: 3,
    title: "UI/UX DESIGN PROFESSIONAL",
    subtitle: "Google Career Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    credentialId: "GOOGLE-UX-498211",
    category: "Design",
    iconType: "palette",
    description: "End-to-end design thinking lifecycle: user research, wireframing, high-fidelity interactive prototyping in Figma, design tokens, and usability testing.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    skills: ["Figma", "Design Systems", "Wireframing", "Usability Testing", "Interaction Design"],
    verifyUrl: "https://coursera.org/verify/professional-cert/google-ux",
    featured: true,
  },
  {
    id: 4,
    title: "CLOUD & DEVOPS ESSENTIALS",
    subtitle: "AWS Academy Cloud Architecture",
    issuer: "Amazon Web Services (AWS)",
    date: "2023",
    credentialId: "AWS-ACAD-338104",
    category: "Cloud",
    iconType: "cloud",
    description: "Cloud computing fundamentals, serverless architectures, AWS EC2, S3, IAM security, Lambda, container workflows, and CI/CD deployment pipelines.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    skills: ["AWS Cloud", "Serverless", "S3 & EC2", "IAM Security", "CI/CD Deployment"],
    verifyUrl: "https://aws.amazon.com/training/",
    featured: true,
  },
];

export const additionalCertificates = [
  {
    id: 5,
    title: "JAVASCRIPT ALGORITHMS & DATA STRUCTURES",
    subtitle: "Algorithms & Functional Programming",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-JS-991204",
    category: "Development",
    iconType: "code",
    description: "Comprehensive JavaScript ES6+ algorithms, Object-Oriented Programming (OOP), functional programming paradigms, regex, and complex data structures.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    skills: ["JavaScript ES6+", "Algorithms", "Data Structures", "OOP", "Functional Programming"],
    verifyUrl: "https://www.freecodecamp.org/certification/wirakarn/javascript-algorithms-and-data-structures",
  },
  {
    id: 6,
    title: "MODERN REACT & NEXT.JS MASTERCLASS",
    subtitle: "Vercel & React Modern Ecosystem",
    issuer: "Vercel & Community Workshop",
    date: "2024",
    credentialId: "NEXTJS-ADV-10294",
    category: "Frontend",
    iconType: "layers",
    description: "Advanced React 19 features, Server Components, Next.js App Router, SSR/SSG caching, performance optimization, and TypeScript integration.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    skills: ["React 19", "Next.js App Router", "Server Components", "Tailwind CSS", "TypeScript"],
    verifyUrl: "https://nextjs.org/learn",
  },
  {
    id: 7,
    title: "POSTGRESQL DATABASE DESIGN & OPTIMIZATION",
    subtitle: "Meta Database Engineering Specialization",
    issuer: "Meta / Coursera",
    date: "2023",
    credentialId: "META-DB-884102",
    category: "Database",
    iconType: "database",
    description: "Relational database schema modeling, SQL query optimization, indexes, normalization, ACID compliance, and stored procedures.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    skills: ["PostgreSQL", "SQL Queries", "Schema Normalization", "Indexing", "Performance Tuning"],
    verifyUrl: "https://coursera.org/verify/meta-database-engineer",
  },
  {
    id: 8,
    title: "GIT & GITHUB COLLABORATIVE WORKFLOWS",
    subtitle: "GitHub Professional Certificate",
    issuer: "GitHub Education",
    date: "2023",
    credentialId: "GH-PRO-442119",
    category: "Tools",
    iconType: "git",
    description: "Git branching strategies, Trunk-based development, GitHub Actions CI/CD workflows, pull request reviews, and open-source contribution patterns.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    skills: ["Git Version Control", "GitHub Actions", "CI/CD", "Code Review", "Branching Strategy"],
    verifyUrl: "https://github.com/education",
  },
  {
    id: 9,
    title: "CREATIVE 3D WEB & THREE.JS GRAPHICS",
    subtitle: "Interactive WebGL & 3D Web Workshop",
    issuer: "Creative Dev Guild",
    date: "2024",
    credentialId: "THREEJS-CW-51208",
    category: "Design",
    iconType: "sparkles",
    description: "3D scene composition with Three.js & React Three Fiber, WebGL shaders, camera lighting, interactive 3D canvas, and Framer Motion integration.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    skills: ["Three.js", "React Three Fiber", "WebGL", "3D Canvas", "Creative Animation"],
    verifyUrl: "https://threejs.org/",
  },
];

