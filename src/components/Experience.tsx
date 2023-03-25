import * as React from "react";
import { useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { SkillsIcon } from "./Skills";
import SingleExperienceItem from "./SingleExperienceItem";

interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  skills: SkillsIcon[];
  flexDirectionSkills: string;
}

const experience: Experience[] = [
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

export default function Experience() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `0 ${theme.spacing(6)} ${theme.spacing(6)}`,
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
        <Typography variant="h2" sx={{ color: theme.palette.primary.light }}>
          Experience
        </Typography>
        <Timeline
          position={matches ? "alternate" : "right"}
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {experience.map((item) => (
            <TimelineItem key={item.date}>
              {matches && (
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{
                    fontWeight: 700,
                    fontSize: theme.spacing(2.5),
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: `${
                      item.flexDirectionSkills === "flex-start"
                        ? "flex-end"
                        : "flex-start"
                    }`,
                  }}
                >
                  {item.date}
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  sx={{ backgroundColor: theme.palette.primary.main }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <SingleExperienceItem
                  title={item.title}
                  company={item.company}
                  description={item.description}
                  skills={item.skills}
                  flexDirectionSkills={item.flexDirectionSkills}
                />
                {!matches && (
                  <Typography
                    component="p"
                    sx={{
                      fontWeight: 700,
                      fontSize: theme.spacing(2.5),
                      color: "text.secondary",
                      mt: theme.spacing(0.5),
                    }}
                  >
                    {item.date}
                  </Typography>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
}
