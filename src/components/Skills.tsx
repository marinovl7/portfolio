import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export interface SkillsIcon {
  iconLocation: string;
  name: string;
  size?: { height: number; width: number };
}

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

const techStack: TechStack[] = [
  { name: "Languages", skills: programmingLanguages },
  { name: "Frameworks", skills: frameworks },
  { name: "Libraries", skills: libraries },
  { name: "Technical", skills: technical },
  { name: "Databases", skills: dataManagement },
  { name: "Design", skills: design },
];

export default function Skills() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `0 ${theme.spacing(6)} ${theme.spacing(6)}`,
        marginTop: `${theme.spacing(12)}`,
        backgroundImage: "url(/background_about.svg)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: { xs: theme.spacing(5), md: theme.spacing(4) },
          flexDirection: "column",
          padding: `${theme.spacing(8)} 0`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: theme.spacing(1.5),
          }}
        >
          <Typography variant="h2" sx={{ color: theme.palette.primary.light }}>
            What I do
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.primary.main,
              overflowWrap: "break-word",
              textAlign: "center",
            }}
          >
            Full-stack web developer who wants to explore every stack
          </Typography>
        </Box>

        {techStack.map((stack) => (
          <Box
            key={stack.name}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: { xs: theme.spacing(1.5), md: theme.spacing(5) },
              width: "100%",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                width: theme.spacing(14),
                textAlign: { xs: "center", md: "left" },
                fontWeight: 700,
              }}
            >
              {stack.name}:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: theme.spacing(2),
                flexWrap: "wrap",
              }}
            >
              {stack.skills.map((item) => (
                <Tooltip title={item.name} key={item.name}>
                  <Image
                    src={item.iconLocation}
                    width={item.size ? item.size.width : 64}
                    height={item.size ? item.size.height : 64}
                    alt={item.name}
                  />
                </Tooltip>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
