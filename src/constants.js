// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import figmaLogo from './assets/tech_logo/figma.png';
import canvaLogo from './assets/tech_logo/Canva.png';
import responsiveLogo from './assets/tech_logo/responsive.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import flaskLogo from './assets/tech_logo/flask.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressLogo from './assets/tech_logo/expressjs.jpg';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import stripeLogo from './assets/tech_logo/Stripe.png';
import clerkLogo from './assets/tech_logo/clerk.png';
import socketioLogo from './assets/tech_logo/socket.jpg';
import jwtLogo from './assets/tech_logo/jwt.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import razorpayLogo from './assets/tech_logo/razorpay.svg';

// Experience Section Logo's
// Education Section Logo's
import rgiptLogo from './assets/education_logo/rgipt.png';
import menonLogo from './assets/education_logo/Menon.png';
import tenthLogo from './assets/education_logo/tenth.png';

// Project Section Logo's
import todoLogo from './assets/work_logo/todo.png';
import pfLogo from './assets/work_logo/pf.png';
import qickTicketsLogo from './assets/work_logo/qicktickets_project.svg';
import haloChatLogo from './assets/work_logo/halochat.png';
import virtualAssistantLogo from './assets/work_logo/virtualAssistantLogo.png';
import workflowLogo from './assets/work_logo/workflow_project.svg';
import vidyaCounsilLogo from './assets/work_logo/vidya_counsil.svg';
import resumeBuilderLogo from './assets/work_logo/resume_builder.svg';
import medibookMobileLogo from './assets/work_logo/medibook_mobile.svg';
import auroraHealthLogo from './assets/work_logo/aurora_health.svg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'React Native', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Responsive Design', logo: responsiveLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'Java', logo: javaLogo },
    ],
  },
  {
    title: "Backend & Full-Stack",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Flask", logo: flaskLogo },
      { name: "Clerk Auth", logo: clerkLogo },
      { name: "Socket.IO", logo: socketioLogo },
      { name: "JWT", logo: jwtLogo },
    ],
  },

  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Canva', logo: canvaLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Stripe API', logo: stripeLogo },
      { name: 'Razorpay Integration', logo: razorpayLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "MERN Developer Intern",
    company: "WorkElate Business Apps",
    date: "March 2026 – May 2026",
    location: "Remote",
    desc: "Developed AI-native SaaS products across the WorkElate application ecosystem, contributing production-ready full-stack features, shared platform capabilities, and reliable release workflows.",
    achievements: [
      "Developed AI-native SaaS applications using React.js, Node.js, Express.js, MongoDB, and REST APIs.",
      "Built AI-powered document generation, review, collaboration, sharing, and version management features for the Docs application.",
      "Developed Presentation modules covering templates, slide workflows, sharing, and download or export functionality.",
      "Contributed full-stack features and API integrations across the Data, Task, Board, and Hub applications.",
      "Implemented authentication, hierarchy management, and role-based access for Super Admin, Admin, and User roles.",
      "Built reusable SDK components, including a common sharing system adopted across multiple applications.",
      "Worked with feature branches, pull requests, code reviews, staging deployments, and production releases through GitHub workflows.",
      "Used Claude Code and Codex extensively to accelerate feature implementation, debugging, and development workflows.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "JavaScript",
      "REST APIs",
      "Git",
      "GitHub",
      "Claude Code",
      "Codex",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: rgiptLogo,
    school: "Rajiv Gandhi Institute of Petroleum Technology, Amethi",
    date: "October 2022 – April 2026",
    grade: "6.8 CGPA",
    desc: "Secured admission to RGIPT through JEE Advanced and completed a B.Tech in Computer Science and Design Engineering, specializing in Full-Stack Development, Software Engineering, Backend Systems, Database Management, and modern web technologies, with hands-on experience building scalable end-to-end applications.",
    degree: "Bachelors of Technology - B.Tech",
    achievement: "Qualified JEE Advanced immediately after Class XII and secured admission to RGIPT based on my rank.",
  },
  {
    id: 1,
    img: menonLogo,
    school: "P.A. Menon Junior College of Commerce and Science, Mumbai",
    date: "July 2020 – March 2022",
    grade: "63.33%",
    desc: "Completed higher secondary education with a focus on Physics, Chemistry, Mathematics and Biology. Built a strong foundation in analytical thinking and problem-solving, which supports current pursuits in engineering and technology.",
  },
  {
    id: 2,
    img: tenthLogo,
    school: "Mahatma Gandhi Hindi High School, Navi Mumbai",
    date: "Apr 2019 - March 2020",
    grade: "86.00%",
    desc: "Completed secondary education with a strong academic record, focusing on subjects like Mathematics, Science, History, and Geography. Developed foundational skills in analytical thinking, problem-solving, and understanding of the natural and social world.",
  },
];

export const projects = [
  {
    id: 8,
    category: "mobile",
    title: "MediBook – Doctor Appointments & Patient Care",
    description:
      "A complete React Native healthcare app with patient authentication, doctor discovery, advanced search, appointment booking and rescheduling, favorites, medical records, reminders, reviews, support chat, and Firebase-ready services.",
    image: medibookMobileLogo,
    tags: ["React Native", "Expo", "Firebase", "AsyncStorage", "Expo Notifications", "React Navigation"],
    github: "https://github.com/Satyam5016/Doctor-appointment-booking-mob",
    webapp: "https://expo.dev/artifacts/eas/osG4nNZ3VO4lu88RHmalgDrnfLV34ZjYhBKtAKxENm4.apk",
    actionLabel: "Download APK",
  },
  {
    id: 9,
    category: "mobile",
    title: "Aurora – AI Health & Wellness Companion",
    description:
      "A polished mobile-first health companion for tracking hydration, sleep, habits, nutrition, and wellness streaks. Includes local-first data persistence and a voice-to-voice assistant that turns natural-language requests into health actions.",
    image: auroraHealthLogo,
    tags: ["React Native", "Expo Router", "TypeScript", "Zustand", "AsyncStorage", "Expo Speech"],
    github: "https://github.com/Satyam5016/health-companion",
    webapp: "https://expo.dev/accounts/satyam5016/projects/project-aurora/builds/7f0e4202-97ee-4a2c-acc7-f19a5c468946",
    actionLabel: "View Build",
  },
  {
    id: 6,
    category: "web",
    title: "Vidya Counsil – Student Counselling Platform",
    description:
      "A production-ready MERN platform for students preparing for JEE, NEET, and MHT-CET. It combines rank and college prediction, counselling roadmaps, college comparison, an AI assistant, secure JWT authentication, and Razorpay-powered premium plans.",
    image: vidyaCounsilLogo,
    tags: ["MERN", "React.js", "Tailwind CSS", "Node.js", "MongoDB", "JWT", "Razorpay"],
    github: "https://github.com/Satyam5016/VidyaCounsil",
    webapp: "https://vidya-counsil.vercel.app/",
  },
  {
    id: 7,
    category: "web",
    title: "ResumeBoost AI – Resume Bullet Generator",
    description:
      "A private, local-first resume writing tool that turns simple work descriptions into polished professional bullet points. Built with Next.js, React, TypeScript, and Tailwind CSS, with ATS scoring, saved history, dark mode, and no sign-up or paid API required.",
    image: resumeBuilderLogo,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Local-first", "ATS"],
    github: "https://github.com/Satyam5016/resume_builder",
    webapp: "https://resume-builder-self-chi.vercel.app/",
  },
  {
    id: 0,
    category: "web",
    title: "Workflow – Project and task management system",
    description:
      "Full-stack workflow management platform to manage organizations, projects, and tasks with role-based access. Built using React.js and Redux Toolkit for scalable state management, and PostgreSQL with Prisma for efficient data handling. Features event-driven notifications using Inngest, real-time collaboration with chat, and secure authentication via Clerk.",
    image: workflowLogo,
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "Prisma", "Clerk Auth", "Inngest"],
    github: "https://github.com/Satyam5016/workflow",
    webapp: "https://workflow-c7ix.vercel.app/",
  },
  {
    id: 1,
    category: "web",
    title: "QickTickets – Movie Ticket Booking Website",
    description:
      "Full-stack movie ticket booking app with role-based access (users/admins). Built with React.js and Tailwind for dynamic UI and Stripe API for secure real-time payments. Includes an admin dashboard to manage shows, bookings, and platform activity, with Clerk authentication for seamless user sessions.",
    image: qickTicketsLogo,
    tags: ["MERN", "React.js", "Tailwind CSS", "Stripe API", "Clerk Auth", "Node.js", "Express"],
    github: "https://github.com/Satyam5016/QickTickets",
    webapp: "https://qicktickets.vercel.app/",
  },
  {
    id: 2,
    category: "web",
    title: "AI Virtual Assistant – Voice Enabled Smart Automation App",
    description:
      "Voice-enabled AI assistant web application that listens to user commands and performs intelligent actions in real time. Built with React.js and Node.js, integrated with Gemini API for AI-powered responses. Uses Web Speech API for speech-to-text and text-to-speech, supports browser automation like opening YouTube and playing songs, and stores conversation history securely with MongoDB and Clerk authentication.",
    image: virtualAssistantLogo,
    tags: ["MERN", "React.js", "Node.js", "Express", "MongoDB", "Gemini API", "Web Speech API", "Clerk Auth"],
    github: "https://github.com/Satyam5016/virtual_assistant",
    webapp: "https://virtualassistant-oigr.onrender.com/signup/",
  },
  {
    id: 3,
    category: "web",
    title: "HaloChat – Real-Time Chat Application",
    description:
      "MERN-based real-time chat app with secure user-to-user messaging. Features Clerk Authentication for login/signup, Socket.IO for instant messaging, online status, and read receipts. Responsive UI built with React + Tailwind and deployed on Vercel (frontend) and Render/Heroku (backend).",
    image: haloChatLogo,
    tags: ["MERN", "React.js", "Tailwind CSS", "Socket.IO", "Clerk Auth", "Node.js", "Express"],
    github: "https://github.com/Satyam5016/HaloChat",
    webapp: "https://halochat.vercel.app/",
  },
  {
    id: 4,
    category: "web",
    title: "Photo-Filter-Application",
    description:
      "A desktop application that allows users to apply real-time filters such as grayscale, sepia, edge detection, and more using OpenCV.",
    image: pfLogo,
    tags: ["Python", "OpenCV", "Tkinter", "PIL", "NumPy"],
    github: "https://github.com/Satyam5016/Simple-Photo-Filter-Application",
  },
  {
    id: 5,
    category: "web",
    title: "Flask_todo_app",
    description:
      "A full-stack to-do list web app with a responsive UI, RESTful APIs, and dynamic task management using Flask and SQLite.",
    image: todoLogo,
    tags: ["Flask", "SQLite", "Jinja2", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Satyam5016/Flask_todo_app",
  },
  // {
  //   id: 1,
  //   title: "Attendance_System_Face_detection",
  //   description:
  //     "A face recognition-based attendance system that identifies and logs student presence automatically using a webcam.",
  //   image: fdLogo,
  //   tags: ["Python", "OpenCV", "Face Recognition", "NumPy"],
  //   github: "https://github.com/Satyam5016/Attendance_Sys_Face_detection",
  // },
  // {
  //   id: 2,
  //   title: "Movie Recommendation App",
  //   description:
  //     "A Streamlit-based app that recommends movies using similarity scores and TMDB API for fetching posters and metadata.",
  //   image: movierecLogo,
  //   tags: ["Python", "Streamlit", "Pandas", "Pickle", "API"],
  //   github: "https://github.com/Satyam5016/mrs",
  // },
  // {
  //   id: 5,
  //   title: "Pneumonia Detection",
  //   description:
  //     "A CNN-based deep learning model that classifies chest X-ray images into Normal or Pneumonia, improving diagnostic accuracy.",
  //   image: ndLogo,
  //   tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Matplotlib"],
  //   github: "https://github.com/Satyam5016/Pneumonia_dtection",
  // },


];
