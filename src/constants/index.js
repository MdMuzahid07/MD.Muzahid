import {
    css,
    expressjs,
    front_end,
    html,
    javascript,
    mern_stack,
    mongodb,
    mongoose,
    nextjs,
    nodejs,
    react_native,
    reactjs,
    redux,
    server,
    tailwindcss,
    typescript
} from "../assets";




const navlinks = [
    { id: "about", title: "ABOUT" },
    { id: "work", title: "WORK" },
    { id: "contact", title: "CONTACT" }
];

const services = [
    { title: "Front-end Developer", icon: front_end },
    { title: "MERN-Stack Developer", icon: mern_stack },
    { title: "Backend Developer", icon: server },
    { title: "React Native Developer", icon: react_native }
];

const techSkills = [
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "ReactJS", icon: reactjs },
    { name: "NextJS", icon: nextjs },
    { name: "Redux", icon: redux },
    { name: "TailwindCSS", icon: tailwindcss },
    { name: "NodeJS", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "ExpressJS", icon: expressjs },
    { name: "Mongoose", icon: mongoose },
];


export { navlinks, services, techSkills };