import { ProjectCardProps } from "@/components/ProjectCard";
import { SkillsIcon } from "@/components/Skills";

//#####################################################################################################
//#######################################   EXPERIENCE    #############################################
//#####################################################################################################
interface Experience {
    date: string;
    title: string;
    company: string;
    description: string;
    skills: SkillsIcon[];
    flexDirectionSkills: string;
}

export const experienceData: Experience[] = [
    {
        date: "March 2023 - Present",
        title: "Fullstack developer Intern",
        company: "Siemens",
        description:
            "As a fullstack developer intern, I am gaining valuable experience working on a variety of cloud-based web applications. I am proficient in both front-end and back-end development, and have contributed to numerous projects during my time as an intern.",
        skills: [
            { iconLocation: "/angular-icon.svg", name: "Angular" },
            { iconLocation: "/nestjs.svg", name: "Nest.js" },
            { iconLocation: "/serverless.svg", name: "Serverless" },
            { iconLocation: "/aws.svg", name: "AWS" },
            { iconLocation: "/postgresql.svg", name: "PosgreSQL" },
        ],
        flexDirectionSkills: "flex-start",
    },
    {
        date: "Octomber 2022 - Present",
        title: "Open-source developer",
        company: "Freelance",
        description:
            "As an open source developer, I have had the privilege of contributing to a diverse range of highly impactful projects. One such project was a grand-scale bulgarian charity platform. Additionally, I have also been engaged in the development of a cutting-edge Next.js based static website, which elegantly showcases the daily menus for a selection of esteemed student canteens in the city of Munich and many more.",
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
        flexDirectionSkills: "flex-end",
    },
    {
        date: "September 2022 - December 2022",
        title: "React developer (external)",
        company: "Mercedes-Benz AG",
        description:
            "The project, a collaboration between TUM, Mercedes-Benz, and Salesforce, aimed to develop a React-based application that would revolutionize the way users configure their future vehicles. Utilizing cutting-edge technology, the application was able to understand and respond to user requests, resulting in an effortless and seamless configuration experience. As a member of the team, I was responsible for working on the car configuration aspect of the project.",
        skills: [
            { iconLocation: "/react.svg", name: "React" },
            { iconLocation: "/redux.svg", name: "Redux" },
            { iconLocation: "/css-3.svg", name: "CSS3" },
            { iconLocation: "/figma.svg", name: "Figma" },
        ],
        flexDirectionSkills: "flex-start",
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
        title: "Auctify",
        description:
            "Auctify is a hackaTUM project. We had less than 48 hours to build the product, working in a team of 4. The webapp is build with React, MUI, Node.js and MongoDB",
        imgSrc: "/Auctify.png",
        githubLink: "https://github.com/marinovl7/hackaTUM-2022-auctify",
    },
    {
        title: "This website",
        description:
            "It's build with Next.js and MUI and of course I wanted to make it as creative as possible. If you like it, it is open-source so feel free to get inspiration and ofc star it.",
        imgSrc: "/portfolio.png",
        githubLink: "https://github.com/marinovl7/portfolio",
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
    { iconLocation: "/nodejs.svg", name: "Node.js" },
    { iconLocation: "/nestjs.svg", name: "Nest.js" },
    { iconLocation: "/serverless.svg", name: "Serverless" },
    { iconLocation: "/spring-icon.svg", name: "Spring Boot" },
];

const libraries: SkillsIcon[] = [
    { iconLocation: "/material-ui.svg", name: "Material UI" },
    { iconLocation: "/redux.svg", name: "Redux" },
    { iconLocation: "/reactivex.svg", name: "RxJs" },
    { iconLocation: "/badge.svg", name: "NgRx" },
];

const design: SkillsIcon[] = [{ iconLocation: "/figma.svg", name: "Figma" }];

const technical: SkillsIcon[] = [
    { iconLocation: "/aws.svg", name: "AWS" },
    { iconLocation: "/git-icon.svg", name: "Git" },
    { iconLocation: "/linux-tux.svg", name: "Linux" },
];

const dataManagement: SkillsIcon[] = [
    { iconLocation: "/postgresql.svg", name: "PosgreSQL" },
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
