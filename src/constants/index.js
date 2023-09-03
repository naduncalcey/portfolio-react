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
  tailwind,
  git,
  figma,
  meta,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  svelte,
} from "../assets";

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
    title: "UI Engineering",
    icon: web,
  },
  {
    title: "UX Design",
    icon: mobile,
  },
  {
    title: "Web Development",
    icon: backend,
  },
  {
    title: "3D Modeling",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "svelte",
    icon: svelte,
  }
];

const experiences = [
  {
    title: "UI Engineer",
    company_name: "Calcey",
    icon: starbucks,
    iconBg: "#FFF",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate UI Engineer",
    company_name: "Calcey",
    icon: starbucks,
    iconBg: "#FFF",
    date: "May 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate  UI/UX Engineer",
    company_name: "Xinfint GmbH",
    icon: shopify,
    iconBg: "#0081FB",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern UI/UX Engineer",
    company_name: "GTN Technologies",
    icon: meta,
    iconBg: "#FFF",
    date: "Sep 2019 - Sep 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nadun is a brilliant UI engineer whom I had the pleasure of working with at Calcey. Nadun consistently impressed me with his expertise in UI concepts, design, and coding.",
    name: "Hasaru D",
    designation: "UI Technical Lead",
    company: "Calcey",
    image: "https://media.licdn.com/dms/image/D5603AQG433qRWe9o5Q/profile-displayphoto-shrink_100_100/0/1688101847861?e=1699488000&v=beta&t=J0m7NlX8kD1tnxFOCYx8WFD_TQ8j8CDan6ZcNk0mvXk",
  },
  {
    testimonial:
      "Nadun is a very talented person. He is one of the best interns that I had under my leadership. Nadun has a strong conceptualization, planning and execution qualities.",
    name: "Amila M",
    designation: "Head of Engineering",
    company: "GTN",
    image: "https://media.licdn.com/dms/image/C5603AQEiIh8Pldplhw/profile-displayphoto-shrink_100_100/0/1592057504767?e=1699488000&v=beta&t=zBqw81gW_26eMxOM1ddEIF2NwYjjH7QuCOQK16ztU4s",
  },
  {
    testimonial:
      "As an Intern UI/ UX Engineer at Global Market Technologies, Nadun closely worked with the business analysts, developers, and other stakeholders to solve the problems and achieving the targets.",
    name: "Chamil R",
    designation: "Tech Lead",
    company: "GTN",
    image: "https://media.licdn.com/dms/image/C4D03AQF0M9RJY5PIpw/profile-displayphoto-shrink_100_100/0/1656941787910?e=1699488000&v=beta&t=JanK5BA__OVKs9KywKmlGPzXIJqDW4vs4htEc_uHJLs",
  },
];

const projects = [
  {
    name: "Advice Generator",
    description:
      "Frontend Mentor's advice generator app. This project demonstrates understanding of the Js and using 3rd party api's with Js.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/naduncalcey/fm-advice-app",
    website: "https://naduncalcey.github.io/fm-advice-app"
  },
  {
    name: "Pokemon TCG Search",
    description:
      "Pokemon TCG Search Version 01 is a web application that brings the world of Pokémon trading cards to your fingertips. With a user-friendly interface and a plethora of features, it's the ultimate destination for Pokémon enthusiasts to explore, discover, and interact with their favorite cards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "react-style-components",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/naduncalcey/pokemon-tcg-app",
    website: "https://pokemon-tcg-v1.netlify.app/"
  },
  {
    name: "Velaris Dashboard",
    description:
      "This is a dashboard I have built for an Interview assessment. I have design the user interface with figma and converted it to code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ant-design",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/naduncalcey/velaris-dashboard",
    website: "https://naduncalcey.github.io/velaris-dashboard"
  },
];

export { services, technologies, experiences, testimonials, projects };
