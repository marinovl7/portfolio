import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  githubLink: string;
  websiteLink: string;
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
  githubLink,
  websiteLink,
}: ProjectCardProps) {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.primary.dark }}>
      <CardMedia>
        <Image
          quality={100}
          alt={title}
          height={170}
          width={345}
          src={imgSrc}
        />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 700, color: theme.palette.primary.main }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.secondary.main }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ pl: theme.spacing(2) }}>
        <Tooltip title="Github link" arrow>
          <Link href={githubLink} target="_blank">
            <GitHubIcon />
          </Link>
        </Tooltip>
        <Tooltip title="Learn more" arrow>
          <Link href={websiteLink} target="_blank">
            <OpenInNewIcon />
          </Link>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
