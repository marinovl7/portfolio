import { Box, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { renderCanvas } from "../lib/renderCanvas";
import styles from "../styles/Hero.module.css";
import Type from "./Type";

export default function Hero() {
  const theme = useTheme();
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: `calc(100vh - (4 * ${theme.spacing(5)}))`,
          padding: theme.spacing(6),
        }}
      >
        <Box
          sx={{
            position: "relative" as "relative",
            flexDirection: "column",
            fontSize: theme.spacing(30),
            fontWeight: 700,
            color: theme.palette.secondary.light,
            zIndex: 1000,
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: theme.palette.secondary.light }}
          >
            Hi There!{" "}
            <span className={styles.wave} role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </Typography>
          <Typography variant="h2">
            I am
            <strong style={{ color: theme.palette.primary.light }}>
              {" "}
              Lachezar Marinov
            </strong>
          </Typography>
          <Box
            sx={{
              textAlign: "left",
              marginTop: theme.spacing(2),
              fontSize: theme.spacing(3.5),
              color: theme.palette.secondary.dark,
            }}
          >
            <Type />
          </Box>
        </Box>
      </Box>
      <canvas className={styles.canvas} id="canvas"></canvas>
    </>
  );
}
