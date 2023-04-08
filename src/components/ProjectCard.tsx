import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import { animated, useSpring } from "@react-spring/web";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  githubLink: string;
  websiteLink?: string;
}
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function ProjectCard({
  title,
  description,
  imgSrc,
  githubLink,
  websiteLink,
}: ProjectCardProps) {
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <Card
      sx={{
        maxWidth: { lg: 350, xs: 315 },
        backgroundColor: theme.palette.primary.dark,
      }}
      component={animated.div}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans) as unknown as string }}
    >
      <CardMedia>
        <Image
          quality={100}
          alt={title}
          height={170}
          width={isBelowLg ? 315 : 350}
          src={`${assetPrefix}${imgSrc}`}
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
        {websiteLink && (
          <Tooltip title="Learn more" arrow>
            <Link href={websiteLink} target="_blank">
              <OpenInNewIcon />
            </Link>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}
