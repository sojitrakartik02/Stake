import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  Box,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItemButton,
  Button,
  Typography,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import CasinoIcon from "@mui/icons-material/Casino";
import SportsIcon from "@mui/icons-material/Sports";
import { Outlet, useNavigate } from "react-router-dom";
import casionbigback from "./casino-big-back.jpg";
import casionbigfront from "./casino-big-front.jpg";
import casionsmallback from "./casino-small-back.jpg";
import casionsmallfront from "./casino-small-front.jpg";
import sportbigback from "./sport-big-back.jpg";
import sportbigfront from "./sports-big-front.jpg";
import sportsmallback from "./sport-small-back.jpg";
import sportsmallfront from "./sport-small-front.jpg";
import Footer from "../Footer/Footer";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    marginLeft: open ? "233px" : "58px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  })
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#0f212e",
  color: "#fff",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: "#0f212e",
  color: "#fff",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  backgroundColor: "#0f212e",
  color: "#fff",
}));

const DrawerWrapper = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "0px",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  backgroundColor: "#0f212e",
  color: "#fff",
}));

const cbutton = (
  <Button
    sx={{
      position: "relative",
      backgroundImage: `url(${casionbigfront})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      color: "white",
      width: 78,
      height: 36,
      overflow: "hidden",
      "&:hover": {
        backgroundImage: `url(${casionbigback})`,
      },
    }}
  >
    Casino
  </Button>
);

const sbutton = (
  <Button
    sx={{
      backgroundImage: `url(${sportbigfront})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      color: "white",
      width: 78,
      height: 36,
      overflow: "hidden",
      "&:hover": {
        backgroundImage: `url(${sportbigback})`,
      },
    }}
  >
    Sport
  </Button>
);

const Sidebar = ({ isDrawerOpen, handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerWrapper variant="permanent" open={isDrawerOpen}>
        <DrawerHeader>
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#0f212e",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerClose}
              edge="start"
              sx={{
                mr: 2,
                justifyContent: "start",
                marginLeft: "5px",
                padding: "0",
              }}
            >
              <MenuIcon />
            </IconButton>

            {isDrawerOpen && (
              <>
                {cbutton}
                {sbutton}
              </>
            )}
          </List>
        </DrawerHeader>

        <Divider sx={{ borderColor: "#fff" }} />

        {!isDrawerOpen && (
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <Box>
              <CasinoIcon />
            </Box>

            <Box>
              <SportsIcon />
            </Box>
          </Box>
        )}

        <Divider sx={{ borderColor: "#fff" }} />

        <List>
          {[
            "Profile",
            "Promotion",
            "Affiliate",
            "Vip Club",
            "Blog",
            "Forum",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor: "#1b3a4b",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isDrawerOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: "#fff" }} />
                  ) : (
                    <MailIcon sx={{ color: "#fff" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: isDrawerOpen ? 1 : 0, color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: "#fff" }} />

        <List>
          {[
            "Sponsorships",
            "Responsible Gambling",
            "Live Support",
            "Language:",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor: "#1b3a4b",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isDrawerOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: "#fff" }} />
                  ) : (
                    <MailIcon sx={{ color: "#fff" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: isDrawerOpen ? 1 : 0, color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DrawerWrapper>
      <Main open={isDrawerOpen}>
        <DrawerHeader />
        <Outlet />
        <Footer />
      </Main>
    </Box>
  );
};

export default Sidebar;
