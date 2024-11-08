import ecommerceRails from "../assets/images/ecommerce.png";
import inStock from "../assets/images/InStock.png";
import brainFlix from "../assets/images/brainflix.png";
import bandsite from "../assets/images/bandsite.png";
import travelSite from "../assets/images/Travelsite.png";
import coffeeShop from "../assets/images/coffeeshop.png";
import ocpLogo from "../assets/images/ocp-logo.png";
import seneca from "../assets/images/seneca.png";
import ttc from "../assets/images/ttc.svg"

export const PROJECTS = [
  {
    title: "E-Commerce Rails",
    image: ecommerceRails,
    description: "A fully functional e-commerce website with features like product listing, users authentication, shopping cart, and real time purchase through Stripe.",
    technologies: ["Ruby on Rails", "JavaScript", "Postgresql", "Tailwind"],
    link: "#",
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
    description: "A Travel website used to demonstrate comprehension of Flexbox, SASS, BEM principles and HTML. This was the second website I built.",
    technologies: ["HTML", "Sass"],
    link: "https://travel-site-juan-david.netlify.app/",
    githubLink: "https://github.com/JuanDavidDV/travel_site"
  },
  {
    title: "Coffee Shop",
    image: coffeeShop,
    description: "A functional coffeshop website used to demonstrate comprehension of animations, Flexbox, SASS, BEM principles and HTML. This was the first website I built.",
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
      "Developed SQL scripts to facilitate data extraction upon request, reducing processing time by 70%.",
      "Critical thinking in Data Analysis, Data Visualization, QA, and user-testing of data extracted before submitting.",
      "Built analytical tools that improved operational efficiency by 60% through actionable insights into KPIs."
    ]
  },
  {
    year: "November 2021 - May 2023",
    image: ocpLogo,
    role: "Software Trainer and Technical Support Analyst",
    company: "Ontario College of Pharmacists",
    description: [
      "Provisioned employee workstations utilizing PowerShell, MS Azure, Endpoint and Intune.",
      "Developed technical guides that exponentially increased user troubleshooting efficiency by 70%.",
      "Accountable for technical support, with extensive troubleshooting skills in Microsoft Office 365."
    ]
  },
  {
    year: "November 2021 - May 2023",
    image: ocpLogo,
    role: "Information Technology Processes (Internship)",
    company: "Ontario College of Pharmacists",
    description: [
      "Developed and improve guides to define the process in order to setup brand new computers and workstations for the company, which increased exponentially the efficiency at the moment of generating more equipment by 70%.",
      "Led a project to upgrade and deploy over 140 computers to college staff across the province of Ontario.",
      "Configured laptops and/or workstations to meet the College’s hardware and software standards; install and upgrade Windows 10 Pro, to new and old AIO (All in One) computer’s versions. "  
    ]
  },
  {
    year: "May 2019 - September 2020",
    image: seneca,
    role: "Student Ambassador Seneca International (Part Time)",
    company: "Seneca College",
    description: [
      "Developed an application database using Excel, by evaluating applicants according to their background in education, this significantly reduced processing time by 60% and increased the college admission department’s satisfaction.",
      "Led and supported a new project for Latin American applicants to address their inquiries related to the application process at Seneca, resulting in increased enrollment numbers.",
      "Responsible to assist international applicants over the phone, by emails, and in person, by providing information to help them make informed decisions."  
    ]
  },
  {
    year: "January 2020 - April 2020",
    image: ttc,
    role: "TTC Communications Engineering Department: One Call Coordinator (Internship)",
    company: "Toronto Transit Commission (TTC)",
    description: [
      "Managed “ON1Call” by authorizing excavations in Toronto, and evaluating contractors submission to assess risks and protect TTC Communications underground infrastructure.",
      "Organized, designed, and labeled information from all the electronics cabinets of 'Inglis Building', and then update the information to DC Track Sunbird DCIM. This increased efficiency by 80% at the moment to locate and store a device in a cabinet",
      "Experienced providing interdisciplinary engineering counsel to support engineering projects."  
    ]
  }
]