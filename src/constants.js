// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import figmaLogo from './assets/tech_logo/figma.png';
import canvaLogo from './assets/tech_logo/Canva.png';
import responsiveLogo from './assets/tech_logo/responsive.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import flaskLogo from './assets/tech_logo/flask.png';
import sqliteLogo from './assets/tech_logo/sqlite.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import unityLogo from './assets/tech_logo/unity.png';
import pythonLogo from './assets/tech_logo/python.png';
import sldLogo from './assets/work_logo/sld.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import autocadLogo from './assets/tech_logo/autocad.png';
import MayaLogo from './assets/tech_logo/maya.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import rgiptLogo from './assets/education_logo/rgipt.png';
import menonLogo from './assets/education_logo/Menon.png';
import tenthLogo from './assets/education_logo/tenth.png';

// Project Section Logo's
import ndLogo from './assets/work_logo/nd.png';
import fdLogo from './assets/work_logo/face.jpg';
import movierecLogo from './assets/work_logo/movie_rec.png';
import todoLogo from './assets/work_logo/todo.png';
import pfLogo from './assets/work_logo/pf.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Canva', logo: canvaLogo },
      { name: 'Responsive Design', logo: responsiveLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'sqlite', logo: sqliteLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Unity', logo: unityLogo },
      { name: 'Autocad', logo: autocadLogo },
      { name: 'Maya', logo: MayaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rgiptLogo,
      school: "Rajiv Gandhi Institute of Petroleum Technology, Amethi",
      date: "october 2022 - July 2026",
      grade: "6.8 CGPA",
      desc: "Pursuing an interdisciplinary B.Tech degree combining core computer science with design thinking, focusing on areas like Computer Vision, Machine Learning, Artificial Intelligence, and Full-Stack Development. Engaged in multiple hands-on projects integrating technology with user-centered design.",
      degree: "Bachelors of Technology - B.Tech",
    },
    {
      id: 1,
      img: menonLogo,
      school: "P.A. Menon Junior College of Commerce and Science, Mumbai",
      date: "july 2020 - march 2022",
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
      id: 0,
      title: "Sign Language Detection",
      description:
        "A real-time system that recognizes and translates sign language gestures into text with high accuracy using a deep learning model.",
      image: sldLogo,
      tags: ["Python", "TensorFlow", "OpenCV", "CNN", "NumPy", "Matplotlib"],
      github: "https://github.com/Satyam5016/Sign_Language_Detection",
    },
    {
      id: 1,
      title: "Attendance_System_Face_detection",
      description:
        "A face recognition-based attendance system that identifies and logs student presence automatically using a webcam.",
      image: fdLogo,
      tags: ["Python", "OpenCV", "Face Recognition", "NumPy"],
      github: "https://github.com/Satyam5016/Attendance_Sys_Face_detection",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A Streamlit-based app that recommends movies using similarity scores and TMDB API for fetching posters and metadata.",
      image: movierecLogo,
      tags: ["Python", "Streamlit", "Pandas", "Pickle", "API"],
      github: "https://github.com/Satyam5016/mrs",
    },
    {
      id: 3,
      title: "Photo-Filter-Application",
      description:
        "A desktop application that allows users to apply real-time filters such as grayscale, sepia, edge detection, and more using OpenCV.",
      image: pfLogo,
      tags: ["Python", "OpenCV", "Tkinter", "PIL", "NumPy"],
      github: "https://github.com/Satyam5016/Simple-Photo-Filter-Application",
    },
    {
      id: 4,
      title: "Flask_todo_app",
      description:
        "A full-stack to-do list web app with a responsive UI, RESTful APIs, and dynamic task management using Flask and SQLite.",
      image: todoLogo,
      tags: ["Flask", "SQLite", "Jinja2", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyam5016/Flask_todo_app",
    },
    {
      id: 5,
      title: "Pneumonia Detection",
      description:
        "A CNN-based deep learning model that classifies chest X-ray images into Normal or Pneumonia, improving diagnostic accuracy.",
      image: ndLogo,
      tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Matplotlib"],
      github: "https://github.com/Satyam5016/Pneumonia_dtection",
    },
    
  ];  