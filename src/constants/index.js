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




const navLinks = [
    { id: "home", title: "HOME" },
    { id: "portfolio", title: "PORTFOLIO" },
    { id: "about", title: "ABOUT" },
    { id: "contact", title: "CONTACT" }
];

const services = [
    { title: "Front-end Developer", icon: front_end },
    { title: "MERN-Stack Developer", icon: mern_stack },
    { title: "Backend Developer", icon: server },
    { title: "React Native Developer", icon: react_native }
];

const options = [
    { label: "Select", value: "Select" },
    { label: "HTML5", value: "HTML5" },
    { label: "CSS3", value: "CSS3" },
    { label: "JavaScript(ES6)", value: "JavaScript(ES6)" },
    { label: "TypeScript", value: "TypeScript" },
    { label: "ReactJS", value: "ReactJS" },
    { label: "React-Native", value: "React-Native" },
    { label: "NextJS", value: "NextJS" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "Mongoose(ODM)", value: "Mongoose(ODM)" },
    { label: "NodeJS", value: "NodeJS" },
    { label: "Firebase", value: "Firebase" },
    { label: "ExpressJS", value: "ExpressJS" },
    { label: "TailwindCSS", value: "TailwindCSS" },
    { label: "Styled-components", value: "Styled-components" },
    { label: "Redux", value: "Redux" },
    { label: "Redux-toolkit", value: "Redux-toolkit" },
    { label: "Async-Thunk", value: "Async-Thunk" },
    { label: "Redux-RTK-Query", value: "Redux-RTK-Query" },
    { label: "Axios", value: "Axios" },
    { label: "React-router-dom", value: "React-router-dom" },
    { label: "React-firebase-hooks", value: "React-firebase-hooks" },
    { label: "JWT(JSON Web Token)", value: "JWT(JSON Web Token)" },
    { label: "React-hooks-form", value: "React-hooks-form" },
    { label: "React-Toastify", value: "React-Toastify" },
    { label: "React-hot-toast", value: "React-hot-toast" },
    { label: "React-slick-slider", value: "React-slick-slider" },
    { label: "DaisyUI", value: "DaisyUI" },
    { label: "NextUI", value: "NextUI" },
    { label: "MUI", value: "MUI" },
    { label: "ChakraUI", value: "ChakraUI" },
    { label: "HeadlessUI", value: "HeadlessUI" },
    { label: "Bootstrap5", value: "Bootstrap5" },
];

const socialLinks = [
    {
        label: "Github",
        href: "https://github.com/MdMuzahid07",
        _id: "github",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/md-muzahid-840347220/",
        _id: "linkedIn",
    },
    {
        label: "Twitter",
        href: "https://twitter.com/md_muzahid_dev",
        _id: "twitter",
    },
    {
        label: "Reddit",
        href: "https://www.reddit.com/user/mdmuzahid_dev",
        _id: "reddit",
    },
];


export { navLinks, services, options, socialLinks };