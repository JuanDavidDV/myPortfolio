import ecommerceRails from "../assets/images/ecommerce.png";
import inStock from "../assets/images/InStock.png";
import brainFlix from "../assets/images/brainflix.png";
import bandsite from "../assets/images/bandsite.png";
import travelSite from "../assets/images/Travelsite.png";
import coffeeShop from "../assets/images/coffeeshop.png";

export const PROJECTS = [
  {
    title: "E-Commerce Rails",
    image: ecommerceRails,
    description: "A fully functional e-commerce website with features like product listing, user authentication, shopping cart, and real time purchase through Stripe.",
    technologies: ["Ruby on Rails", "JavaScript", "Postgresql", "Tailwind", "Stripe"]
  },
  {
    title: "InStock",
    image: inStock,
    description: "InStock is a warehouse and inventory management full-stack application with RESTful API, collaboratively developed utilizing Agile for project management, through Jira",
    technologies: ["React", "Node.js", "Express.js", "mySQL", "Sass"]
  },
  {
    title: "BrainFlix",
    image: brainFlix,
    description: "A SPA full-stack (single page application) for streaming videos, similar to YouTube. Includes features such as commenting, liking, file upload, validation, and dynamic routing",
    technologies: ["React", "Node.js", "Express.js", "Axios", "Sass"]
  },
  {
    title: "BandSite",
    image: bandsite,
    description: "A responsive website developed for a musician band. This project includes DOM manipulation, APIs calls, and BEM principles.",
    technologies: ["JavaScript", "HTML", "Axios", "Sass"]
  },
  {
    title: "Travel Site",
    image: travelSite,
    description: "A Travel website used to show comprehension of Flexbox, SASS, BEM principles and HTML. This was the second website I built.",
    technologies: ["HTML", "Sass"]
  },
  {
    title: "Coffee Shop",
    image: coffeeShop,
    description: "A functional coffeshop website used to demonstrate comprehension of animations, Flexbox, SASS, BEM principles and HTML. This was the first website I built.",
    technologies: ["HTML", "Sass"]
  }
]