import { Box, Typography, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function ProjectsGrid() {
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
      id="projects"
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
            Projects
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.primary.main,
              overflowWrap: "break-word",
              textAlign: "center",
            }}
          >
            Overview of some of the projects I worked on
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: theme.spacing(6),
            flexWrap: "wrap",
          }}
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
