import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  console.log(year);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
      }}
    >
      <Typography variant="body2" sx={{ color: theme.palette.primary.light }}>
        Lachezar Marinov {year}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: theme.spacing(1.5),
        }}
      >
        <Link href="https://github.com/marinovl7" target="_blank">
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lachezar-marinov-7b5175163/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
}
