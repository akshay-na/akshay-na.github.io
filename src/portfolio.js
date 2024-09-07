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
  instagram: "",
  twitter: "https://twitter.com/akshaynal",
  facebook: "",

  kaggle: "",
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
    "⚡️ Expertise in leading and delivering both Web2 and Web3 solutions, leveraging blockchain and traditional technologies for optimal performance.",
    "⚡️ Skilled in cost optimization strategies, reducing Google API billing by 92% and Azure egress data transfer costs by 75%.",
    "⚡️ Proficient in mentoring and upskilling teams, improving proficiency in frameworks like NestJS and Node.js.",
    "⚡️ Strong ability to streamline processes through automation, achieving significant reductions in manual interventions and operational overhead."
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
      role: "Senior Software Developer",
      company: "Cyber Infrastructure",
      companylogo: require("./assets/images/cisLogo.webp"),
      date: "January 2022 - Present",
      desc: "Led and developed multiple Web3 and Web2 solutions, utilizing both Blockchain and Web2 technology to achieve project goals.",
      background: false, // set it true to use image background as card background
      descBullets: [
        "Led and developed multiple Web3 and Web2 solutions, leveraging blockchain and traditional technologies to meet project objectives.",
        "Collaborated with management and product teams to define and implement comprehensive crypto strategies and roadmaps, aligning with business goals.",
        "Mentored and trained 10+ junior developers on the NestJS framework and Node.js, improving team proficiency and productivity.",
        "Optimized Google API calls, implementing efficient request strategies that resulted in a 92% reduction in billing costs while maintaining performance and functionality.",
        "Achieved a 75% reduction in Azure egress data transfer costs through strategic optimizations, significantly lowering operational expenses.",
        "Led a cross-functional team of developers to deliver a comprehensive software solution, improving system efficiency by 30%, utilizing Agile methodologies and technologies such as TypeScript, Solidity, and MongoDB.",
        "Demonstrated adaptability and a quick learning curve, consistently delivering high-quality code that met or exceeded client expectations."
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
        "Streamlined core banking processes through shell script automation, leading to an 80% reduction in manual interventions and significantly enhanced system maintenance efficiency.",
        "Addressed customer issues through automation, resulting in a more efficient and effective resolution process.",
        "Developed and deployed automated solutions to address customer issues, resulting in a 50% faster resolution process and increased customer satisfaction.",
        "Integrated alerts with various platforms to optimize workload automation, improving response times by 30% and reducing operational overhead."
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
