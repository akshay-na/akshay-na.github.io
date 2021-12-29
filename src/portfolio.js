/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {Icon} from "@iconify/react";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Akshay N A",
  title: "Hi all, I'm Akshay",
  subTitle: emoji(
    "Am A Software Developer 🚀 with a strong foundation in programming. A quick learner and a team player with a proven ability in problem solving and analysis."
  ),
  resumeLink: "Resume.pdf", // Set to empty to hide the button
  resumeName: "Akshay's Resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/akshay-na",
  linkedin: "www.linkedin.com/in/akshay-na",
  gmail: "akshayna04@gmail.com",
  medium: "https://medium.com/@short_saga",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop interactive Front end / User Interfaces for your web"),
    emoji("⚡ Develop optimized Smart-Contracts on Ethereum Blockchain"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as AWS / Digital Ocean")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS-3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dr. Ambedkar Institute Of Technology",
      logo: require("./assets/images/AIT_logo.jpg"),
      subHeader: "Bachelor of Engineering in Electronics & Communication",
      duration: "August 2016 - June 2020",
      desc: "Took extra courses about AI, Neural Network, VLSI front-end designing, ...",
      descBullets: [
        "CGPA: 8.02",
        "Participated in various workshops such as VLSI, Robotics, Marketing, ..."
      ]
    },
    {
      schoolName: "Sri Bhuvanendra College",
      logo: require("./assets/images/sbclogo.png"),
      subHeader: "Pre-University Course",
      duration: "September 2014 - March 2016",
      desc: "Ranked top 10% in the program.",
      descBullets: [
        "Percentage: 93%",
        "Major: Physics, Chemistry, Mathematics and Biology"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "88%"
    },
    {
      Stack: "Backend",
      progressPercentage: "79%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "72%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer",
      company: "Hexaware Technology",
      companylogo: require("./assets/images/hexaLogo.png"),
      date: "September 2020 – Present",
      desc: "Developer to automate some of the Core Banking processes.",
      descBullets: [
        "Came up with my initiatives & automation to solve customer issues and reduced 80% of the manual work related to it.",
        "Worked on the alert integrations with Outlook and other platforms to maintain Core workload automation.",
        "Familiar with tools like Jira & UC4 Workload automation tool."
      ]
    },
    {
      role: "",
      company: "",
      // companylogo: require(''),
      date: "",
      desc: ""
    },
    {
      role: "",
      company: "",
      // companylogo: require(''),
      date: "",
      desc: ""
    }
    // {
    // 	role: 'Front-End Developer',
    // 	company: 'Quora',
    // 	companylogo: require('./assets/images/quoraLogo.png'),
    // 	date: 'May 2017 – May 2018',
    // 	desc:
    // 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    // },
    // {
    // 	role: 'Software Engineer Intern',
    // 	company: 'Airbnb',
    // 	companylogo: require('./assets/images/airbnbLogo.png'),
    // 	date: 'Jan 2015 – Sep 2015',
    // 	desc:
    // 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/patelcoLogo.png"),
      projectName: "Patelco L1 Service Desk Support",
      projectDesc:
        "Provided Core Banking Support, Developed UNIX scripts & built RPA bot to automate some of the core banking processes",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lmsLogo.png"),
      projectName: "Leave Management System",
      projectDesc:
        "A training full-stack development project built using Java and Angular",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ecommLogo.png"),
      projectName: "E-Commerce Website",
      projectDesc:
        "A training full-stack development project built using .NET Framework and Angular",
      footerLink: [
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified BlockChain Developer by Blockchain Council",
      subtitle: "Certification Course.",
      image: require("./assets/images/CBD.PNG"),
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Machine Learning and AI workshop",
      subtitle:
        "Participated on the Ai workshop that was hosted by the IIT Roorkee on March 2019",
      image: require("./assets/images/AiWorkshop.jpg"),
      footerLink: [
        {
          name: "Participation",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "akshayna04@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo
};
