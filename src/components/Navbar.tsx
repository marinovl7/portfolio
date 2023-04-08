import * as React from "react";
import {
  useTheme,
  MenuItem,
  Button,
  Container,
  Menu,
  Typography,
  Toolbar,
  Box,
  AppBar,
  IconButton,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LaptopIcon from "@mui/icons-material/Laptop";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BallotIcon from "@mui/icons-material/Ballot";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ScrollIntoView from "react-scroll-into-view";

export default function ResponsiveAppBar() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleToggleNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorElNav) {
      setAnchorElNav(null);
    } else {
      setAnchorElNav(event.currentTarget);
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000000",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="xl" sx={{ zIndex: 9999 }}>
        <Toolbar
          disableGutters
          sx={{ height: theme.spacing(5), padding: theme.spacing(4) }}
        >
          <LaptopIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              width: theme.spacing(4),
              height: theme.spacing(4),
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".5rem",
              color: theme.palette.primary.light,
              textDecoration: "none",
            }}
          >
            LM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              disableScrollLock={false}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute" as "absolute",
              }}
            >
              <ScrollIntoView
                smooth
                selector="#skills"
                onClick={handleCloseNavMenu}
              >
                <MenuItem
                  key={"Skills"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: theme.spacing(2),
                  }}
                >
                  <PermIdentityIcon />
                  <Typography textAlign="center">Skills</Typography>
                </MenuItem>
              </ScrollIntoView>
              <ScrollIntoView
                smooth
                selector="#experience"
                onClick={handleCloseNavMenu}
              >
                <MenuItem
                  key={"Experience"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: theme.spacing(2),
                  }}
                >
                  <BallotIcon />
                  <Typography textAlign="center">Experience</Typography>
                </MenuItem>
              </ScrollIntoView>
              <ScrollIntoView
                smooth
                selector="#projects"
                onClick={handleCloseNavMenu}
              >
                <MenuItem
                  key={"Projects"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: theme.spacing(2),
                  }}
                >
                  <DeveloperModeIcon />
                  <Typography textAlign="center">Projects</Typography>
                </MenuItem>
              </ScrollIntoView>
            </Menu>
          </Box>
          <LaptopIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 2,
              width: theme.spacing(4),
              height: theme.spacing(4),
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".5rem",
              color: theme.palette.primary.light,
              textDecoration: "none",
            }}
          >
            LM
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "flex-end",
              gap: theme.spacing(3),
            }}
          >
            <ScrollIntoView smooth selector="#skills">
              <Button
                key={"Skills"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  fontSize: theme.spacing(2.5),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: theme.spacing(1),
                }}
              >
                <PermIdentityIcon />
                Skills
              </Button>
            </ScrollIntoView>
            <ScrollIntoView smooth selector="#experience">
              <Button
                key={"Experience"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  fontSize: theme.spacing(2.5),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: theme.spacing(1),
                }}
              >
                <BallotIcon />
                Experience
              </Button>
            </ScrollIntoView>
            <ScrollIntoView smooth selector="#projects">
              <Button
                key={"Projects"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  fontSize: theme.spacing(2.5),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: theme.spacing(1),
                }}
              >
                <DeveloperModeIcon />
                Projects
              </Button>
            </ScrollIntoView>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
