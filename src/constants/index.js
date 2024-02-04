import {
  clg,
  site,
  nathan,
  mobile,
  backend,
  creator,
  web,
  javascript,
  vue,
  nuxt,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  scss,
  storybook,
  repairdesk,
  softsquare,
  repairdeskApp,
  coreDirection,
  deskDesignSystem,
  portfoilio,
  soutvilleSite,
  threejs,
  typescript,
  mongo,
  next,
  jira
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
    title: "Js Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Vue Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Nuxt Js",
    icon: nuxt,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Scss",
    icon: scss,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
];

const experiences = [
  {
    title: "Associate Frontend Engineer",
    company_name: "Softsquare",
    icon: softsquare,
    iconBg: "#383E56",
    date: "June 2020 - Nov 2020",
    points: [
      "Developing and maintaining web applications using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in  scrums, code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Repairdesk",
    icon: repairdesk,
    iconBg: "#383E56",
    date: "Nov 2020 - October",
    points: [
      "Developing and maintaining web applications using js, Vue.js and React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in scrum, User Feedback analysis.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Nathan & Nathan",
    icon: nathan,
    iconBg: "#383E56",
    date: "Oct 2023 - present",
    points: [
      "Developing and maintaining web applications using js, Vue.js (vue 2 and vue 3), Nuxt.js and React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Converting old version code to new standards.",
      "Participating in scrum, Distributing task among the developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Nathan & Nathan",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "Repairdesk",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Softsquare",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Club-lab-golf",
    description:
      "A CRM system that manage the user activity provide analysis using charts and calendars to boot productivity.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "Nuxt",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Adobe-photo-shop",
        color: "orange-text-gradient",
      },
      {
        name: "Typescript",
        color: "white-text-gradient",
      },
    ],
    image: clg,
    source_code_link: "",
  },
  {
    name: "Club-lab-golf-website",
    description:
      "A Golf website for Golf lovers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      }
    ],
    image: site,
    source_code_link: "",
  },
  {
    name: "Repairdesk.com",
    description:
      "A Pos system that had allowed more than 3000+ store across the world for management of the each and every thing related to their business.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nest",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "desk-design-system",
        color: "pink-text-gradient",
      },
    ],
    image: repairdeskApp,
    source_code_link: "",
  },
  {
    name: "core-direction",
    description:
      "Web application that enables users to search for health related actitvites and it also allow coorporate for manage event for the organization and it's successfull accross united arab emirated.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "web-socket",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
    ],
    image: coreDirection,
    source_code_link: "",
  },
  {
    name: "desk-design-system",
    description:
      "A comprehensive npm User Interface package that is used accross the repairdesk oldeer and newer verion made with vuejs and tailwind. each and every component for web are developed in it.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "storybook",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: deskDesignSystem,
    source_code_link: "https://github.com/desk-design-system/d2s",
  },
  {
    name: "Southville Solution Site",
    description:
      "Web application that is used for customer support for southville solutions and this let know the client about the project completed and achievement made by the company.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: soutvilleSite,
    source_code_link: "",
  },
  {
    name: "Personal Portfolio",
    description: "Web application that my own project works and achievement.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfoilio,
    source_code_link: "https://github.com/hbghaffar01/React-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
