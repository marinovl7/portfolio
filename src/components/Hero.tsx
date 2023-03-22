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
          position: "absolute" as "absolute",
          flexDirection: "column",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: theme.spacing(30),
          fontWeight: 700,
          color: theme.palette.secondary.light,
          zIndex: 1000,
        }}
      >
        <Typography variant="h2" sx={{ color: theme.palette.secondary.light }}>
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
      <canvas className={styles.canvas} id="canvas" />
    </>
  );
}
