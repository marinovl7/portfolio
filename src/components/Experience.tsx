import * as React from "react";
import { useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import SingleExperienceItem from "./SingleExperienceItem";
import { experienceData } from "@/lib/data";

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
          {experienceData.map((item) => (
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
