/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Akshay N A",
  title: "Hi all, I'm Akshay",
  subTitle:
    "A highly skilled Software Developer 🚀 with a solid foundation in Blockchain and Smart Contracts, able to quickly learn and implement new technologies. A team player with a proven ability in problem-solving, analysis and the ability to work well in a team environment.",
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
  npm: "https://www.npmjs.com/~akshay-na",
  instagram: "",
  twitter: "https://twitter.com/akshaynal",
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
    "⚡️ Develop Backend and APIs for your Web Application",
    "⚡️ Develop Optimized Smart-Contracts on Ethereum Blockchain",
    "⚡️ Develop Decentralized Application and Integrating the Blockchain",
    "⚡️ Integration of third party services such as AWS / Digital Ocean"
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
      desc: "Led and developed multiple Web3 and Web2 solutions, utilizing both Blockchain and Web2 technology to achieve project goals.",
      background: false, // set it true to use image background as card background
      descBullets: [
        "Proven track record of building and deploying smart contracts that meet rigorous audit requirements and support the overall blockchain infrastructure",
        "Collaborated with management and product teams to define and implement successful crypto strategies and roadmaps",
        "Strong ability to mentor and train team members and friends on best practices in software and blockchain development",
        "Demonstrated ability to quickly learn new technologies and deliver high-quality code that exceeds client expectations."
      ],
      footerLink: [
        {
          name: "cisin.com",
          url: "https://www.cisin.com/"
        }
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Hexaware Technologies",
      companylogo: require("./assets/images/hexaLogo.webp"),
      date: "September 2020 - January 2022",
      desc: "Successfully automated core banking processes and improved maintenance through the use of shell scripting.",
      background: false, // set it true to use image background as card background
      descBullets: [
        "Implemented shell script based solutions to automate core banking processes, resulting in improved maintenance and decreased manual work by 80%.",
        "Innovatively addressed customer issues through automation, resulting in a more efficient and effective resolution process.",
        "Experienced in integrating alerts with various platforms to enhance workload automation.",
        "Acquired expertise in utilizing tools such as Jira Service Management and UC4 Workload automation to optimize processes.",
        "Proven ability to effectively automate core banking processes and improve maintenance through the use of shell scripting."
      ],
      footerLink: [
        {
          name: "hexaware.com",
          url: "https://hexaware.com/"
        }
      ]
    }
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
      image: require("./assets/images/oetLogo.png"),
      projectName: "HUB-Decipher OET",
      projectDesc:
        "Led the maintenance and updates of a production codebase the platform, ensuring optimal performance and stability. Developed and integrated new features to the existing hub, resulting in improved user experience.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "OET Website",
          url: "https://www.occupationalenglishtest.org/"
        }
      ]
    },
    {
      image: require("./assets/images/newwealthLogo.png"),
      projectName: "NewWealthColab NFTs & NFT Marketplace",
      projectDesc:
        "Developed Unique Builder NFTs to provide special access to realtors. Created marketplace to trade and auction NFTs, resulting in increased liquidity and value for the assets.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "NewWealthColab Website",
          url: "https://www.newwealthcolab.com/"
        }
      ]
    },
    {
      image: require("./assets/images/patelcoLogo.png"),
      projectName: "Patelco L1 Service Desk Support",
      projectDesc:
        "Provided technical support for core banking systems, ensuring smooth operation and high availability of critical banking services.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "Patelco Credit Union Website",
          url: "https://www.patelco.org/"
        }
      ]
    },
    {
      image: require("./assets/images/lmsLogo.png"),
      projectName: "Leave Management System",
      projectDesc:
        "Full-stack training project using Java and Angular, resulting in a comprehensive training platform for new developers. Built using modern technologies and best practices, the project served as a valuable tool for teaching and learning web development.",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ecommLogo.png"),
      projectName: "E-Commerce Website",
      projectDesc:
        "Full-stack training project using .NET and Angular, resulting in a comprehensive training platform for new developers. Built using modern technologies and best practices, the project served as a valuable tool for teaching and learning web development.",
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
  title: "Achievements And Certifications 🏆 ",
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
  title: "Contact Me ☎️",
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
