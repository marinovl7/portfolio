import {
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { SkillsIcon } from "./Skills";

interface SingleExperienceItemProps {
  title: string;
  company: string;
  description: string[];
  skills: SkillsIcon[];
}

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function SingleExperienceItem({
  title,
  company,
  description,
  skills,
}: SingleExperienceItemProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xm"));

  return (
    <Box
      sx={{
        position: "relative" as "relative",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1.5),
        backgroundColor: theme.palette.primary.main,
        borderRadius: "12px",
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: theme.palette.primary.dark, fontWeight: "700" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: theme.palette.primary.dark, fontStyle: "italic" }}
        >
          {company}
        </Typography>
      </Box>
      {description.map(item => <Typography
        key={item}
        variant="subtitle1"
        sx={{ color: theme.palette.primary.dark, lineHeight: 1.2 }}
      >
        &mdash; {item}
      </Typography>)}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(1),
          justifyContent: "flex-start",
        }}
      >
        {skills.map((item) => (
          <Tooltip title={item.name} key={item.name} arrow>
            <Image
              src={`${assetPrefix}${item.iconLocation}`}
              width={item.size ? item.size.width : matches ? 48 : 36}
              height={item.size ? item.size.height : matches ? 48 : 36}
              alt={item.name}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
