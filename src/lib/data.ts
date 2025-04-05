import { ProjectCardProps } from "@/components/ProjectCard";
import { SkillsIcon } from "@/components/Skills";

//#####################################################################################################
//#######################################   EXPERIENCE    #############################################
//#####################################################################################################
interface Experience {
    date: string;
    title: string;
    company: string;
    description: string[];
    skills: SkillsIcon[];
    flexDirectionSkills: string;
}

export const experienceData: Experience[] = [
    {
        date: "Feb 2025 - Present",
        title: "Frontend Lead | Software Engineer",
        company: "Siemens",
        description: [
            "Establishing technical standards for all frontend applications",
            "Guiding a team of 10+ developers in implementing best practices and modern frameworks",
            "Leading architecture decisions and ensuring code quality across projects"
        ],
        skills: [
            { iconLocation: "/angular-icon.svg", name: "Angular" },
            { iconLocation: "/ngxs.png", name: "NGXS" },
            { iconLocation: "/nestjs.svg", name: "Nest.js" },
            { iconLocation: "/serverless.svg", name: "Serverless" },
            { iconLocation: "/aws.svg", name: "AWS" },
            { iconLocation: "/postgresql.svg", name: "PosgreSQL" },
        ],
        flexDirectionSkills: "flex-start",
    },
    {
        date: "Oct 2024 - Feb 2025",
        title: "Technical Project Manager",
        company: "World Food Programme",
        description: [
            "Project management for the new release of the WFP HungerMap platform in collaboration with CSEE.",
            "Managing 3 Teams of 15 Developers.",
            "Responsible for the technical implementation and the business outcome.",
            "Complete redesign of the UI with focus on accessibility and exceptional UX.",
            "Extended it with AI RAG Chatbot, AI-based prediction model integrated with a custom email service for early-warning alerts."
        ],
        skills: [
            { iconLocation: "/nextjs-icon.svg", name: "Next.js" },
            { iconLocation: "/python.webp", name: "Python" },
            { iconLocation: "/openai.svg", name: "OpenAI" },
            { iconLocation: "/mongodb.svg", name: "MongoDB" },
            { iconLocation: "/tailwindcss.png", name: "TailwindCSS" },
        ],
        flexDirectionSkills: "flex-end",
    },
    {
        date: "April 2024 - January 2025",
        title: "Associate Fullstack Software Developer",
        company: "Siemens",
        description: [
            "Working on a variety of cloud-based web applications by either developing and delivering them from scratch or extending existing ones.",
            "Refactoring of old, outdated applications to modern, design and code, style standart.",
        ],
        skills: [
            { iconLocation: "/angular-icon.svg", name: "Angular" },
            { iconLocation: "/ngxs.png", name: "NGXS" },
            { iconLocation: "/nestjs.svg", name: "Nest.js" },
            { iconLocation: "/serverless.svg", name: "Serverless" },
            { iconLocation: "/aws.svg", name: "AWS" },
            { iconLocation: "/postgresql.svg", name: "PosgreSQL" },
        ],
        flexDirectionSkills: "flex-start",
    },
    {
        date: "March 2023 - March 2024",
        title: "Fullstack Software Developer Intern",
        company: "Siemens",
        description: [
            "Introduced new feature for saving and applying custom table filters for multiple tenants by integrating DynamoDB for data-flexibility.",
            "Being involved of refactoring Angular 8 application to Angular 15, by using modern approaches such as state management, type-safety and generic components, whilst improving the UI/UX.",
            "Development of an external AWS lambda function for a complex accounting process.",
            "Working across different teams from different locations, whilst always being in touch with Sales."
        ],
        skills: [
            { iconLocation: "/angular-icon.svg", name: "Angular" },
            { iconLocation: "/ngxs.png", name: "NGXS" },
            { iconLocation: "/nestjs.svg", name: "Nest.js" },
            { iconLocation: "/serverless.svg", name: "Serverless" },
            { iconLocation: "/aws.svg", name: "AWS" },
            { iconLocation: "/postgresql.svg", name: "PosgreSQL" },
        ],
        flexDirectionSkills: "flex-end",
    },
    {
        date: "Octomber 2022 - Present",
        title: "Open Source Software Developer",
        company: "Freelance",
        description: [
            "Contributed to a grand-scale bulgarian charity web-platform, by developing user donations page.",
            "Ownership of cutting-edge Next.js based static website, which elegantly showcases the daily menus for a selection of esteemed student canteens in the city of Munich.",
            "Development of a static website for a bulgarian brand with focus on modern, but elegant design.",
            "Development of a personal projec using the MEAN stack."
        ],
        skills: [
            { iconLocation: "/nextjs-icon.svg", name: "Next.js" },
            { iconLocation: "/nestjs.svg", name: "Nest.js" },
            {
                iconLocation: "/prisma.svg",
                name: "Prisma",
            },
            { iconLocation: "/material-ui.svg", name: "Material UI" },
            { iconLocation: "/figma.svg", name: "Figma" },
        ],
        flexDirectionSkills: "flex-start",
    },
    {
        date: "September 2022 - December 2022",
        title: "React Software Developer (external)",
        company: "Mercedes-Benz AG",
        description: [
            "Developed a React-based application that would revolutionize the way users configure their future vehicles.",
            "Utilizing cutting-edge technology, the application was able to understand and respond to user requests, resulting in an effortless and seamless configuration experience."
        ],
        skills: [
            { iconLocation: "/react.svg", name: "React" },
            { iconLocation: "/redux.svg", name: "Redux" },
            { iconLocation: "/css-3.svg", name: "CSS3" },
            { iconLocation: "/figma.svg", name: "Figma" },
        ],
        flexDirectionSkills: "flex-end",
    },
];

//#####################################################################################################
//#######################################   Projects    ##############################################
//#####################################################################################################
export const projectsData: ProjectCardProps[] = [
    {
        title: "TUMenu",
        description:
            "Next.js static website for daily meals in some student places around Munich, which I build and designed myself. The website is available in german and english.",
        imgSrc: "/TUMenu.png",
        githubLink: "https://github.com/TUM-Dev/TUMenu",
        websiteLink: "https://tum-dev.github.io/TUMenu",
    },
    {
        title: "Podkrepi.bg",
        description:
            "Bulgarian online charity platform, build with Next.js, Nest.js, Prisma and MUI. I contributed both on the back and frontend on several features and issues",
        imgSrc: "/Podkrepibg.png",
        githubLink: "https://github.com/podkrepi-bg",
        websiteLink: "https://podkrepi.bg/en",
    },
    {
        title: "Kitsby Project",
        description:
            "Angular, Node.js MongoDB CRUD Webapplication with many features like admin panel, also JWT tokens login and signup. I build this for experience.",
        imgSrc: "/KitsbyProject.png",
        githubLink: "https://github.com/marinovl7/Kitsby-Project-front-end",
    },
    {
        title: "RozaX5",
        description:
            "This is my first project. A static website for a bulgarian brand build with the bare basics HTML,CSS,JS and jQuery. I also designed the website myself",
        imgSrc: "/rozax5.png",
        githubLink: "https://github.com/marinovl7/roza_x5_static_website",
        websiteLink: "https://rozax5.com/",
    },
    {
        title: "This website",
        description:
            "It's build with Next.js and MUI and of course I wanted to make it as creative as possible. If you like it, it is open-source so feel free to get inspiration and ofc star it.",
        imgSrc: "/portfolio.png",
        githubLink: "https://github.com/marinovl7/portfolio",
    },
    {
        title: "ProteomicsDB",
        description:
            "Extended the user-interface by providing researches with further data-analysis possibilities, based on interactive data-visualization with D3.js and Vue.js for my Bachelor Thesis.",
        imgSrc: "/CellLineScatterPlot.png",
        websiteLink: "https://www.proteomicsdb.org/",
        githubLink: "https://github.com/wilhelm-lab/proteomicsdb-vue",
    },
];

//#####################################################################################################
//#######################################   Skills    ################################################
//#####################################################################################################
interface TechStack {
    name: string;
    skills: SkillsIcon[];
}

const programmingLanguages: SkillsIcon[] = [
    { iconLocation: "/typescript-icon.svg", name: "Typescript" },
    { iconLocation: "/javascript.svg", name: "Javascript" },
    { iconLocation: "/java.svg", name: "Java" },
    { iconLocation: "/html-5.svg", name: "HTML5" },
    { iconLocation: "/css-3.svg", name: "CSS3" },
];

const frameworks: SkillsIcon[] = [
    { iconLocation: "/react.svg", name: "React" },
    { iconLocation: "/angular-icon.svg", name: "Angular" },
    { iconLocation: "/nextjs-icon.svg", name: "Next.js" },
    { iconLocation: "/vue.png", name: "Vue.js" },
    { iconLocation: "/nodejs.svg", name: "Node.js" },
    { iconLocation: "/nestjs.svg", name: "Nest.js" },
    { iconLocation: "/serverless.svg", name: "Serverless" },
    { iconLocation: "/spring-icon.svg", name: "Spring Boot" },
    { iconLocation: "/tailwindcss.png", name: "TailwindCSS" },
];

const libraries: SkillsIcon[] = [
    { iconLocation: "/material-ui.svg", name: "Material UI" },
    { iconLocation: "/redux.svg", name: "Redux" },
    { iconLocation: "/reactivex.svg", name: "RxJs" },
    { iconLocation: "/badge.svg", name: "NgRx" },
    { iconLocation: "/ngxs.png", name: "NGXS" },
    { iconLocation: "/d3.png", name: "D3.js" },
];

const design: SkillsIcon[] = [{ iconLocation: "/figma.svg", name: "Figma" }];

const technical: SkillsIcon[] = [
    { iconLocation: "/aws.svg", name: "AWS" },
    { iconLocation: "/git-icon.svg", name: "Git" },
    { iconLocation: "/linux-tux.svg", name: "Linux" },
];

const dataManagement: SkillsIcon[] = [
    { iconLocation: "/postgresql.svg", name: "PosgreSQL" },
    { iconLocation: "/mongodb.svg", name: "MongoDB" },
    {
        iconLocation: "/Logo-Prisma.png",
        name: "Prisma",
        size: { height: 64, width: 108 },
    },
];

export const techStackData: TechStack[] = [
    { name: "Languages", skills: programmingLanguages },
    { name: "Frameworks", skills: frameworks },
    { name: "Libraries", skills: libraries },
    { name: "Technical", skills: technical },
    { name: "Databases", skills: dataManagement },
    { name: "Design", skills: design },
];
