import ecommerceRails from "../assets/images/ecommerce.png";
import inStock from "../assets/images/InStock.png";
import brainFlix from "../assets/images/brainflix.png";
import bandsite from "../assets/images/bandsite.png";
import travelSite from "../assets/images/Travelsite.png";
import coffeeShop from "../assets/images/coffeeshop.png";
import ocpLogo from "../assets/images/ocp-logo.png";
import seneca from "../assets/images/seneca.png";
import ttc from "../assets/images/ttc.svg";
import spotifyRails from "../assets/images/spotifyRails.png";

export const PROJECTS = [
  {
    title: "Spotify-Rails",
    image: spotifyRails,
    description: "Spotify-Rails is a streaming music platform enabling artist payments via Stripe.",
    technologies: ["Ruby on Rails", "Stimulus ", "Minitest", "Cron Jobs", "Postgresql", "Tailwind", "AWS"],
    link: "https://spotify-rails-5858064d71c3.herokuapp.com",
    githubLink: "https://github.com/JuanDavidDV/spotify-rails"
  },
  {
    title: "E-Commerce",
    image: ecommerceRails,
    description: "A fully functional e-commerce website with features like product listing, users authentication, shopping cart, and real time purchase through Stripe.",
    technologies: ["Ruby on Rails", "Stimulus ", "Postgresql", "Tailwind", "AWS"],
    link: "https://vast-forest-11849-c1796dfd8a1e.herokuapp.com",
    githubLink: "https://github.com/JuanDavidDV/ecommerce"
  },
  {
    title: "InStock",
    image: inStock,
    description: "InStock is a warehouse and inventory management full-stack application with RESTful API. Collaboratively developed utilizing Agile for project management, through Jira",
    technologies: ["React", "Node.js", "Express.js", "mySQL", "Sass"],
    link: "https://juandavid-instock.netlify.app/",
    githubLink: "https://github.com/JuanDavidDV/instock"
  },
  {
    title: "BrainFlix",
    image: brainFlix,
    description: "A SPA full-stack (single page application) for streaming videos, similar to YouTube. Includes features such as commenting, liking, file upload, validation, and dynamic routing",
    technologies: ["React", "Node.js", "Express.js", "Axios", "Sass"],
    link: "https://brainflix-juandavid.netlify.app/",
    githubLink: "https://github.com/JuanDavidDV/JuanDavid-DazaVelosa-brainflix"
  },
  {
    title: "BandSite",
    image: bandsite,
    description: "A responsive website developed for a musician band. This project includes DOM manipulation, APIs calls, and BEM principles.",
    technologies: ["JavaScript", "HTML", "Axios", "Sass"],
    link: "https://juandavid-bandsite.netlify.app/",
    githubLink: "https://github.com/JuanDavidDV/JuanDavid-DazaVelosa-bandsite"
  },
  {
    title: "Travel Site",
    image: travelSite,
    description: "A responsive travel website used to demonstrate comprehension of Flexbox, SASS, BEM principles, responsive design, and HTML. This was the second website I built.",
    technologies: ["HTML", "Sass"],
    link: "https://travel-site-juan-david.netlify.app/",
    githubLink: "https://github.com/JuanDavidDV/travel_site"
  },
  {
    title: "Coffee Shop",
    image: coffeeShop,
    description: "A coffee shop website used to demonstrate comprehension of animations, Flexbox, SASS, BEM principles and HTML. This was the first website I built.",
    technologies: ["HTML", "Sass"],
    link: "https://coffee-shop-juan-david.netlify.app/",
    githubLink: "https://github.com/JuanDavidDV/coffee_shop"
  }
]

export const EXPERIENCE = [
  {
    year: "May 2023 - Present",
    image: ocpLogo,
    role: "Data Developer",
    company: "Ontario College of Pharmacists",
    description: [
      "Developed SQL scripts to facilitate data extraction for the Government of Ontario upon request, reducing processing time by 70%.",
      "Validated extracted data applying business analysis, data visualization, and QA to ensure accuracy and reliability before submission.",
      "Accelerated CRM deployment by 30% by assisting in data migration between two systems, comparing values from SSMS databases and Microsoft Power Platform.",
      "Built analytical tools within Excel to improve operational efficiency by 60% through actionable insights into KPIs."
    ]
  },
  {
    year: "November 2021 - May 2023",
    image: ocpLogo,
    role: "Software Trainer and Technical Support Analyst",
    company: "Ontario College of Pharmacists",
    description: [
      "Provisioned employee workstations utilizing PowerShell, MS Azure, Endpoint and Intune.",
      "Developed technical guides that exponentially increased user troubleshooting efficiency by 70% in O365 apps.",
      "Managed Active Directory by creating and deleting employee accounts based on job roles and requirements."
    ]
  },
  {
    year: "November 2021 - May 2023",
    image: ocpLogo,
    role: "Information Technology Processes (Internship)",
    company: "Ontario College of Pharmacists",
    description: [
      "Led a project to upgrade and deploy over 140 computers to college staff across the province of Ontario.",
      "Inspected and troubleshoot technical and end-user problems related to workstations and desktop applications.",
      "Customized new-hire trainings to address individual learning styles, covering company best practices for the current role."
    ]
  },
  {
    year: "January 2020 - April 2020",
    image: ttc,
    role: "TTC Communications Engineering Department: One Call Coordinator (Internship)",
    company: "Toronto Transit Commission (TTC)",
    description: [
      "Managed “ON1Call”, approving excavations in Toronto and assessing contractor submissions to mitigate risks and protect TTC Communications underground infrastructure.",
      "Analyzed and determined possible damage to the communications cables due to excavations done in the City of Toronto.",
      "Organized, labeled, and updated electronics cabinet data for the Inglis building in DC Track Sunbird DCIM, improving device location and storage efficiency by 80%."  
    ]
  },
  {
    year: "May 2019 - September 2020",
    image: seneca,
    role: "Student Ambassador Seneca International (Part Time)",
    company: "Seneca College",
    description: [
      "Developed an application database in Excel to evaluate applicants based on their educational background, reducing processing time by 60%, improving college admissions department satisfaction, and increasing enrollment numbers.",
      "Assisted international applicants via phone, email, and in person by providing information to support informed decision-making of the programs that Seneca College offers."  
    ]
  }  
]
