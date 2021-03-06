/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Akshay N A",
  title: "Hi all, I'm Akshay",
  subTitle: emoji(
    "Am A Blockchain Developer 🚀 with a strong foundation in blockchain and smart contracts. A quick learner and a team player with a proven ability in problem solving and analysis."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1T41XnCj7vWGVN3PMCz8yApdmnFMAxpjP_8K3Z-e3Gtk/export?format=pdf", // Set to empty to hide the button
  resumeName: "Akshay's Resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/akshay-na",
  linkedin: "https://www.linkedin.com/in/akshay-na",
  gmail: "akshayna04@gmail.com",
  medium: "https://medium.com/@short_saga",
  instagram: "",
  twitter: "",
  facebook: "",
  kaggle: "",
  gitlab: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop Backend and APIs for your Web Application"),
    emoji("⚡ Develop Optimized Smart-Contracts on Ethereum Blockchain"),
    emoji(
      "⚡ Develop Decentralized Application and Integrating the Blockchain"
    ),
    emoji("⚡ Integration of third party services such as AWS / Digital Ocean")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Mango DB",
      fontAwesomeClassname: "fab fa-envira"
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
      desc: "Took extra courses such as AI, Neural Network, VLSI front-end designing, ...",
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

// Your top 3 proficient stacks/tech experienc

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "88%"
    },
    {
      Stack: "Backend",
      progressPercentage: "69%"
    },
    {
      Stack: "Blockchain", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Cyber Infrastructure",
      companylogo: require("./assets/images/cisLogo.webp"),
      date: "January 2022 - Present",
      desc: "Developed various ERC20, ERC721 and some non standard smart contracts in various blockchains.",
      background: false, // set it true to use image background as card background
      descBullets: [
        "Built and deployed smart contracts that meet rigorous audit requirements",
        "Plan for and support blockchain infrastructure",
        "Worked closely with management and Product to define crypto strategies and roadmaps",
        "Mentor and trained other team members and friends on smart contract and blockchain best practices"
      ],
      footerLink: [
        {
          name: "Website",
          url: "https://www.cisin.com/"
        }
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Hexaware Technologies",
      companylogo: require("./assets/images/hexaLogo.webp"),
      date: "September 2020 - January 2022",
      desc: "Developed scripts to automate some of the Core Banking processes.",
      background: false, // set it true to use image background as card background
      descBullets: [
        "Came up with my initiatives & automation to solve customer issues and reduced 80% of the manual work related to it.",
        "Worked on the alert integrations with Outlook and other platforms to maintain Core workload automation.",
        "Familiar with tools like Jira & UC4 Workload automation tool."
      ],
      footerLink: [
        {
          name: "Website",
          url: "https://hexaware.com/"
        }
      ]
    }

    // Modify the following template to add more companies.

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
      image: require("./assets/images/CBD.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.blockchain-council.org/certifications/certified-blockchain-developer/"
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
          name: "Certification",
          url: ""
        },
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
