import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });
  const [ref5, inView5] = useInView({ threshold: 0.2 });
  const [ref6, inView6] = useInView({ threshold: 0.2 });

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6];

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const controls = [controls1, controls2, controls3, controls4, controls5, controls6];

  const [viewedElements, setViewedElements] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    const animations = [inView1, inView2, inView3, inView4, inView5, inView6];

    animations.forEach((inView, index) => {
      if (inView && !viewedElements[index]) {
        controls[index].start({
          x: 0,
          transition: { duration: 1, bounce: 0.1 },
        });
        setViewedElements((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      } else if (!viewedElements[index]) {
        controls[index].start({
          x: matches
            ? index % 2 === 0
              ? "100vw"
              : "-100vw"
            : "100vw",
        });
      }
    });
  }, [inView1, inView2, inView3, inView4, inView5, inView6, matches]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `0 ${theme.spacing(6)} ${theme.spacing(6)}`,
      }}
      id="experience"
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
          {experienceData.map((item, index) => (
            <TimelineItem key={item.date}>
              {matches && (
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{
                    fontWeight: 700,
                    fontSize: theme.spacing(2.5),
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent:
                      item.flexDirectionSkills === "flex-start"
                        ? "flex-end"
                        : "flex-start",
                  }}
                  ref={refs[index]}
                >
                  {item.date}
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: theme.palette.primary.main }} />
              </TimelineSeparator>
              <TimelineContent>
                <Box component={motion.div} animate={controls[index]}>
                  <SingleExperienceItem
                    title={item.title}
                    company={item.company}
                    description={item.description}
                    skills={item.skills}
                  />
                </Box>
                {!matches && (
                  <Typography
                    component="p"
                    sx={{
                      fontWeight: 700,
                      fontSize: theme.spacing(2.5),
                      color: "text.secondary",
                      mt: theme.spacing(0.5),
                    }}
                    ref={refs[index]}
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
