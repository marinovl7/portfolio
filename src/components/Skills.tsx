import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { techStackData } from "@/lib/data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export interface SkillsIcon {
  iconLocation: string;
  name: string;
  size?: { height: number; width: number };
}

export default function Skills() {
  const theme = useTheme();
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (inView1 && !animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [inView1]);

  const variants = {
    hidden: { opacity: 0, y: "100px" },
    visible: { opacity: 1, y: 0 },
  };

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
      id="skills"
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
          <Typography
            variant="h2"
            sx={{ color: theme.palette.primary.light }}
            ref={ref1}
          >
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

        {techStackData.map((stack, index) => (
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
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: "1",
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
                <Tooltip title={item.name} key={item.name} arrow>
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
