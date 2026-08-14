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
    "A Senior Software Engineer with 5+ years building mission-critical, high-traffic \
    backends across FinTech, HealthTech, and SaaS. Deep experience in Node.js, TypeScript, \
    distributed architectures, Kubernetes, and cloud cost optimization - including up to \
    92% API billing reduction and 75% Azure egress savings. Currently at Helpshift \
    delivering enterprise integrations, security (mTLS/OAuth), and developer tooling \
    while mentoring engineers and leading cross-functional delivery.",
  resumeLink:
    "https://docs.google.com/document/d/1bI1du_KNfonEWy7pKNwxKI6j1BVnf1JCgx6FxcXQh8I/export?format=pdf&includes_info_params=true&cros_files=false&nded=false&tab=t.0", // Set to empty to hide the button
  resumeName: "Akshay's Resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.akshay-na.in",
  // gitlab: "https://gitlab.akshay-na.in",
  linkedin: "https://linkedin.akshay-na.in",
  gmail: "akshayna04@gmail.com",
  medium: "https://akshay-na.medium.com/",
  npm: "https://npmjs.akshay-na.in",
  instagram: "https://www.instagram.com/akshay.na.dev",
  twitter: "https://twitter.com/akshay_naX",
  discord: "https://discordapp.com/users/973135624179699742",
  cal: "https://cal.com/akshay-na",
  cursor: "https://cursor.com/@akshay-na",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SENIOR BACKEND & PLATFORM ENGINEER - SAAS · HEALTHTECH · FINTECH",
  skills: [
    "⚡️ Building SaaS backend and integration features at Helpshift - \
    reservation-based auto-assignment, WebSDK rate-limiting fixes, \
    RTO dashboard scale-out without page-performance regression, \
    bulk CSV export, and mTLS/OAuth for secure bot automation.",
    "⚡️ Designing resilient distributed systems on Kubernetes and cloud platforms, \
    with observability and DevOps practices that cut MTTR and shrink deploy/image costs \
    (HealthTech: OpenTelemetry + Grafana; CI/CD image/deploy gains).",
    "⚡️ Driving cloud cost and reliability outcomes - up to 92% vendor API billing \
    reduction and 75% Azure egress savings - without sacrificing performance.",
    "⚡️ Mentoring engineers (NestJS/Node.js) and raising delivery quality across \
    cross-functional Agile squads."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "Shell Script",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "Shell Script",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
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
      subHeader: "Bachelor of Engineering (Electronics & Communications)",
      duration: "August 2016 - June 2020",
      desc: "Took extra courses such as AI, Neural Network, VLSI Design ...",
      descBullets: [
        "Participated in various workshops such as VLSI, Robotics, Marketing ..."
      ]
    },
    {
      schoolName: "Sri Bhuvanendra P.U. College",
      logo: require("./assets/images/sbclogo.png"),
      subHeader: "Pre-University Course",
      duration: "September 2014 - March 2016",
      desc: "Ranked top 10% in the program.",
      descBullets: ["Major: Physics, Chemistry, Mathematics and Biology"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend / Platform",
      progressPercentage: "82%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "78%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer II",
      company: "Helpshift Technologies Pvt Ltd",
      companylogo: require("./assets/images/helpshift.webp"),
      date: "June 2025 - Present",
      desc: "Building scalable backend systems, enterprise integrations, security, and developer tooling for SaaS customers.",
      background: false,
      descBullets: [
        "Designed reservation-based auto-assignment that reduced missed assignments from ~2-5% toward near-zero.",
        "Fixed a critical WebSDK rate-limiting bug affecting customer domains.",
        "Scaled the RTO dashboard with zero page-performance degradation.",
        "Built bulk issue export (CSV) with scalable, fault-tolerant backend design.",
        "Implemented Two-Way SSL (mTLS) and OAuth for secure bot automation and external API integrations.",
        "Improved Gerrit automation / Git workflows, reducing onboarding/setup time by ~30%."
      ],
      footerLink: [
        {
          name: "helpshift.com",
          url: "https://www.helpshift.com"
        }
      ]
    },
    {
      role: "Member of Technical Staff",
      company: "Truworth Health Technologies Pvt Ltd",
      companylogo: require("./assets/images/truworthLogo.webp"),
      date: "February 2025 - May 2025",
      desc: "Improving developer productivity, legacy service scalability, CI/CD, and observability in HealthTech.",
      background: false,
      descBullets: [
        "Improved developer tools and workflows to speed feature turnaround.",
        "Refactored legacy Health Check Service with LLD - ~40% faster vendor integration.",
        "Strengthened DevOps/CI/CD - ~50% smaller images, ~20% faster deploys.",
        "Added OpenTelemetry + Grafana observability - ~25% MTTR reduction."
      ],
      footerLink: [
        {
          name: "truworthwellness.com",
          url: "https://www.truworthwellness.com"
        }
      ]
    },
    {
      role: "Senior Software Developer",
      company: "Cyber Infrastructure (P) Ltd",
      companylogo: require("./assets/images/cisLogo.webp"),
      date: "January 2022 - January 2025",
      desc: "Delivered Web2 and Web3 systems on distributed Kubernetes platforms; mentored engineers; drove cloud cost optimizations.",
      background: false,
      descBullets: [
        "Optimized vendor/Google API usage - up to 92% billing reduction while maintaining performance.",
        "Cut Azure egress costs by ~75% through targeted transfer optimizations.",
        "Mentored 10+ junior developers in NestJS and Node.js.",
        "Built distributed systems on Kubernetes; improved delivery efficiency ~30% with TypeScript/Solidity/MongoDB where applicable.",
        "Partnered across Agile product/engineering to ship scalable production systems."
      ],
      footerLink: [
        {
          name: "cisin.com",
          url: "https://www.cisin.com/"
        }
      ]
    },
    {
      role: "Assoc. Software Engineer",
      company: "Hexaware Technologies Limited",
      companylogo: require("./assets/images/hexaLogo.webp"),
      date: "September 2020 - January 2022",
      desc: "Automated core banking operations and support workflows.",
      background: false,
      descBullets: [
        "Shell automation for core banking — ~80% fewer manual interventions.",
        "Customer-issue automation - ~50% faster resolution.",
        "Alert integrations - ~30% better response times."
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
  subtitle: "SELECTED WORK — IMPACT OVER EXPERIMENTATION",
  projects: [
    {
      image: require("./assets/images/helpshift-logo.jpg"),
      projectName: "Reservation Auto-Assignment & Real-Time Ops",
      date: "Dec 2025 - Present",
      projectDesc:
        "Built reservation-based auto-assignment that drove missed assignments from ~2–5% toward near-zero, remediated WebSDK rate limits for customer domains, and scaled the RTO dashboard with zero page-performance degradation.",
      footerLink: [
        {
          name: "Helpshift Website",
          url: "https://www.helpshift.com/"
        }
      ]
    },
    {
      image: require("./assets/images/helpshift-logo.jpg"),
      projectName: "Developer Tooling & Gerrit Automation",
      date: "June 2025 - Present",
      projectDesc:
        "Built Gerrit automation and Git/dev workflows that reduced onboarding and setup time ~30%.",
      footerLink: [
        {
          name: "Helpshift Website",
          url: "https://www.helpshift.com/"
        }
      ]
    },
    {
      image: require("./assets/images/helpshift-logo.jpg"),
      projectName: "Enterprise Export & Secure Bot Integrations",
      date: "June 2025 - Nov 2025",
      projectDesc:
        "Shipped fault-tolerant bulk issue export (CSV) and Two-Way SSL (mTLS) plus OAuth for secure bot automation and external API integrations.",
      footerLink: [
        {
          name: "Helpshift Website",
          url: "https://www.helpshift.com/"
        }
      ]
    },
    {
      image: require("./assets/images/new-twc_logo.png"),
      projectName: "Health Check Service",
      date: "Feb 2025 - May 2025",
      projectDesc:
        "Refactored the Health Check Service legacy codebase using LLD principles to boost scalability and cut vendor integration time by 40%, while designing an OpenTelemetry-Grafana observability pipeline that reduced MTTR by 25%.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "The Wellness Corner Website",
          url: "https://www.thewellnesscorner.com"
        }
      ]
    },
    {
      image: require("./assets/images/oetLogo.png"),
      projectName: "Headless HUB",
      date: "Aug 2023 - Jan 2025",
      projectDesc:
        "Led a team that transitioned a monolith into a microservices architecture to boost scalability, developed design patterns that kept the project moving smoothly, and collaborated on building a robust cloud infrastructure.",
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
        "Headed data migration between applications using the strangler approach to enable a seamless transition from monolithic to microservices architectures, and innovated migration patterns to enhance data transfer efficiency.",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "OET Website",
          url: "https://www.oet.com"
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
      subtitle: "Professional certification (Blockchain Council).",
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
        "Participated in the AI workshop hosted by IIT Roorkee (March 2019).",
      image: require("./assets/images/AiWorkshop.jpg"),
      footerLink: []
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
