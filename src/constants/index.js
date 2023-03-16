import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  casantey,
  carrent,
  jobit,
  tripguide,
  amazonClone,
  flint,
  threejs,
  nextjs,
  python,
  springboot,
  flutter,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Casantey Business Solutions Group",
    icon: casantey,
    iconBg: "#383E56",
    date: "October 2022 - December 2022",
    points: [
      "I worked on developing mobile applications using the Flutter framework. My responsibilities included designing and developing user interfaces and implementing new features",
      "I conducted load testing for the company's web services using JMeter. I designed and executed test plans to measure the performance and scalability of the web services.",
      "I used Kibana to monitor and analyze service logs. I designed and created custom dashboards to visualize and analyze the logs, helping to identify potential issues and improve the overall performance of the services.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "A mobile application that was designed to replicate the functionality of the Amazon online marketplace. This app allows users to browse and purchase products, create and manage their accounts, and track their orders in a convenient and easy-to-use interface",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "typeScript",
        color: "green-text-gradient",
      },
      {
        name: "AWS amplify",
        color: "pink-text-gradient",
      },
    ],
    image: amazonClone,
    source_code_link: "https://github.com/rmartey/Amazon-clone",
  },
  {
    name: "Flint",
    description:
      "A mobile application designed to provide a convenient and reliable transportation solution for users. This app allows users to request a ride, track the driver's location, and pay for the ride, all within a user-friendly interface.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "google maps",
        color: "green-text-gradient",
      },
      {
        name: "google places autocomplete",
        color: "pink-text-gradient",
      },
    ],
    image: flint,
    source_code_link: "https://github.com/flint-dev/flint-mobile",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/richmond-martey-278419214/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/rmartey",
  },
  {
    id: 4,
    name: "Resume",
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

export { services, technologies, experiences, testimonials, projects, socials };
