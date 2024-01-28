import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import NeuIcon from '../assets/icons/neu.png';
  import LseIcon from '../assets/icons/lse.png';
  import HarvardIcon from '../assets/icons/harvard.png';
  import CambridgeIcon from '../assets/icons/cambridge.png';
  import SudokuIcon from '../assets/icons/sudoku.png';
  import ReversiIcon from '../assets/icons/reversi.png';
  import StudyIcon from '../assets/icons/study-link.png';

  import Java from '../assets/icons/java.png';
  import Python from '../assets/icons/python.png';
  import HTML from '../assets/icons/html.png';
  import MySQL from '../assets/icons/mysql.png';
  import CSS from '../assets/icons/css.png';


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java",
      icon: Java
    },

    {
      title: "Python",
      icon: Python,
    },

    {
      title: "HTML",
      icon: html,
    },

    {
      title: "CSS",
      icon: css,
    },

    {
      title: "MySQL",
      icon: MySQL,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Northeastern Univeristy",
      company_name: "B.Sc. Computer Science and Mathematics",
      icon: NeuIcon,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Present",
      points: [
        "Dean's List (2023-2024)",
        "Coursework: NLP, Theory of Computation, Algorithms & Data, Object-Oriented Programming, " + 
        "Group Theory, Probability & Statistics, Number Theory, Intro to Cryptography",
        "Mathematics Peer Tutor at Northeastern College of Engineering since September 2023" +
        " providing personalized tutoring in Calculus, Differential Equations, and Linear Algebra, and creating custom learning materials.",
      ],
    },
    {
      title: "London School of Economics",
      company_name: "Summer Abroad Program",
      icon: LseIcon,
      iconBg: "#E6DEDD",
      date: "July 2023 - Aug 2023",
      points: [
        "Studied Real Analysis and Marketing Strategies at the London School of Economics " +
       "enhancing analytical skills and understanding of market dynamics.",
        "Gained a solid foundation in complex mathematical concepts and practical marketing " +
        "approaches, contributing to a well-rounded academic profile."
      ],
    },
    {
      title: "Harvard University",
      company_name: "Summer Program",
      icon: HarvardIcon,
      iconBg: "#383E56",
      date: "June 2022 - Aug 2022",
      points: [
        "Completed courses in Econometrics and Quantitative Economics at Harvard University, "+
        "acquiring advanced skills in data analysis and economic modeling during the COVID-19 period.",
        "Developed proficiency in statistical methods and economic theory applicable to " + 
        "real-world issues, heightened by the pandemic's global impact."
      ],
    },
    {
      title: "Cambridge International Foundation School",
      company_name: "International Baccalaureate (IB)",
      icon: CambridgeIcon,
      iconBg: "#E6DEDD",
      date: "April 2020 - May 2022",
      points: [
        "The demanding coursework of the IB Diploma fostered a strong work ethic and dedication, " +
        "particularly in challenging subjects like math and computer science, guiding my career choice in these fields",
        "Through volunteer work, I gained valuable insights into community needs, " + 
        "fostering a strong commitment to social wellness and the betterment of society."
      ],
    },
  ];
  
  const projects = [
    {
      name: "3D Sudoku",
      description:
        "Each side of the cube acts as an individual Sudoku grid, offering a multi-dimensional puzzle-solving experience. " +
        " Features dynamic grid reloading with each website refresh, ensuring a new challenge for the player every time. " +
        " Integrated Three.js to render 3D graphics in the web browser and implemented a backtracking algorithm in Python to generate valid Sudoku puzzles efficiently.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: SudokuIcon,
      source_code_link: "https://github.com/riyagupta-23/3D-SUDOKU.git",
    },
    {
      name: "Study Link",
      description:
       "Launched a web app for students to effortlessly form and find study groups, " +
       "mapped across the university for quick identification. " +
       "Simplified study group creation and joining processes, aligning students with shared academic goals and compatible timetables. ",
      tags: [
        {
          name: "javaScript",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: StudyIcon,
      source_code_link: "https://github.com/riyagupta-23/study-link",
    },
    {
      name: "Reversi Game",
      description:
       "Developed an advanced Java-based Reversi (Othello) game with a skilled AI opponent, " +
        "presenting scalable challenges for players across different proficiency levels. " +
       "Innovatively expanded gameplay options by incorporating both traditional square and a " +
       "novel hexagonal board, devised through mathematical algorithms for a fresh take on the classic. ",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
      ],
      image: ReversiIcon,
      source_code_link: "https://github.com/riyagupta-23/Hex-Reversi",
    },
  ];
  
  export { services, technologies, experiences, projects };