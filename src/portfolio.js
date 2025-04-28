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
    "A Senior Software Developer with 4+ years of experience in delivering high-performance software solutions and optimizing infrastructure costs. Expertise in Node.js, TypeScript, DevOps, Azure, Shell Scripting, and cloud technologies. Proven track record in leading cross-functional teams, mentoring junior developers, and deploying scalable Web3 and Web2 solutions. Accomplished in reducing billing costs by 92% through API optimizations and enhancing system performance by 30% using agile methodologies. Adept at streamlining processes and driving efficiency with automated solutions.",
  resumeLink:
    "https://docs.google.com/document/d/1bI1du_KNfonEWy7pKNwxKI6j1BVnf1JCgx6FxcXQh8I/export?format=pdf", // Set to empty to hide the button
  resumeName: "Akshay's Resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.akshay-na.in",
  gitlab: "https://gitlab.akshay-na.in",
  linkedin: "https://linkedin.akshay-na.in",
  gmail: "akshayna04@gmail.com",
  medium: "https://akshay-na.medium.com/",
  npm: "https://npmjs.akshay-na.in",
  instagram: "https://www.instagram.com/akshay.na.dev",
  twitter: "https://twitter.com/akshay_naX",
  discord: "https://discordapp.com/users/973135624179699742",
  cal: "https://cal.com/akshay-na",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡️ Architected resilient, low-latency Web 2 and Web 3 platforms—applying advanced system-design patterns and data-structures-and-algorithms principles to hit mission-critical SLAs and deepen customer trust.",
    "⚡️ Slashed cloud spend, cut Google API charges by 92 % and Azure egress fees by 75 %—through algorithm-driven usage analytics and cost-aware system-design trade-offs, all while safeguarding performance and availability.",
    "⚡️ Elevated team mastery, mentored engineers in NestJS, Node.js, system design, and DSA, shrinking ramp-up time and raising code-quality bars across cross-functional squads.",
    "⚡️ Automated release and ops pipelines with algorithmic orchestration, eradicating repetitive manual steps and shrinking deployment cycles from days to hours."
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
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "Message Queue",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fas fa-project-diagram"
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
      role: "Member Of Technical Staff",
      company: "Truworth Health Technologies Pvt Ltd",
      companylogo: require("./assets/images/truworthLogo.webp"),
      date: "February 2025 - Present",
      desc: "Enhancing developer productivity and system scalability through best practices.",
      background: false,
      descBullets: [
        "Optimizing developer tools to reduce feature turnaround time.",
        "Refactoring code with SOLID principles for maintainability.",
        "Implementing DevOps and CI/CD for streamlined deployments.",
        "Architecting scalable and efficient systems."
      ],
      footerLink: [
        {
          name: "truworthwellness.com",
          url: "https://www.truworthwellness.com/"
        }
      ]
    },
    {
      role: "Senior Software Developer",
      company: "Cyber Infrastructure (P) Ltd",
      companylogo: require("./assets/images/cisLogo.webp"),
      date: "January 2022 - January 2025",
      desc: "Led Web3 & Web2 projects, integrating Blockchain and traditional tech to drive innovation and efficiency.",
      background: false,
      descBullets: [
        "Optimized Google API calls, reducing costs by 92% while maintaining performance.",
        "Cut Azure egress data transfer costs by 75% through strategic optimizations.",
        "Mentored 10+ junior developers in NestJS & Node.js, boosting team proficiency.",
        "Enhanced system efficiency by 30% using TypeScript, Solidity, and MongoDB.",
        "Delivered high-quality, scalable solutions aligned with business objectives."
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
      company: "Hexaware Technologies Limited",
      companylogo: require("./assets/images/hexaLogo.webp"),
      date: "September 2020 - January 2022",
      desc: "Automated core banking processes, reducing manual effort and improving efficiency.",
      background: false,
      descBullets: [
        "Automated banking workflows with shell scripting, cutting manual interventions by 80%.",
        "Optimized customer issue resolution, speeding up response time by 50%.",
        "Integrated alert systems, improving workload automation and reducing operational overhead by 30%."
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
      projectName: "Headless HUB",
      date: "Aug 2023 - Present",
      projectDesc:
        "Leading a team in transitioning from Monolith to microservices architecture for improved scalability. Developing design patterns for smooth project progression and collaborating on a robust cloud infrastructure.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "OET Website",
          url: "https://www.oet.com"
        }
      ]
    },
    {
      image: require("./assets/images/oetLogo.png"),
      projectName: "OET Applications and Data Migration",
      date: "Mar 2023 - May 2024",
      projectDesc:
        "Heading data migration between applications using the strangler approach for a seamless shift from monolithic to microservices. Innovating migration patterns to boost data transfer efficiency.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "OET Website",
          url: "https://www.oet.com"
        }
      ]
    },

    {
      image: require("./assets/images/oetLogo.png"),
      projectName: "OET Operation Streamline",
      date: "Dec 2022 - Mar 2023",
      projectDesc:
        "Led a team to streamline daily operations through essential scripts, and designed a new script for enhanced efficiency. Managed seamless code transition from a previous vendor, ensuring uninterrupted product functionality.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "OET Website",
          url: "https://www.oet.com"
        }
      ]
    },
    {
      image: require("./assets/images/oetLogo.png"),
      projectName: "HUB Decipher",
      date: "Sept 2022 - Dec 2022",
      projectDesc:
        "Led a team to analyze and optimize a complex codebase, enhancing its performance and reliability. Assisted the client in reverse engineering for a seamless development environment setup.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "OET Website",
          url: "https://www.oet.com"
        }
      ]
    },
    {
      image: require("./assets/images/newwealthLogo.png"),
      projectName: "NewWealthColab NFTs & NFT Marketplace",
      date: "May 2022 - Sept 2022",
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
      image: require("./assets/images/commerja-x.jpeg"),
      projectName: "Bitcash-CommerjaX BEP20 Token Collaboration",
      date: "Jan 2022 - May 2022",
      projectDesc:
        "Developed a unique token for Commerja-X with advanced tokenomics. Introduced a 10% tax for enhanced appeal and integrated reflection rewards across three tokens for dynamic value distribution.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "Commerja-X Website",
          url: "https://commerja-x.com/"
        }
      ]
    },
    {
      image: require("./assets/images/patelcoLogo.png"),
      projectName: "Patelco L1 Service Desk Support",
      date: "Mar 2021 - Dec 2021",
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
      date: "Sept 2020 - Feb 2021",
      projectDesc:
        "Full-stack training project using Java and Angular, resulting in a comprehensive training platform for new developers. Built using modern technologies and best practices, the project served as a valuable tool for teaching and learning web development.",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ecommLogo.png"),
      projectName: "E-Commerce Website",
      date: "Sept 2020 - Feb 2021",
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
  achievementSection,
  bigProjects,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  openSource,
  skillsSection,
  socialMediaLinks,
  techStack,
  workExperiences
};
