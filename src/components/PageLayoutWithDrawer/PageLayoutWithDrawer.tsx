import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { Footer, Header, ListNavLink } from "./components";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const PageLayoutWithDrawer: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CssBaseline enableColorScheme />

      <Header onMenuClick={toggleDrawer} />

      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              position: "relative",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <List component="nav">
            <ListNavLink to="/" label="Home" icon={<HomeIcon />} />
            <ListNavLink to="/users" label="Users" icon={<PersonIcon />} />
          </List>
          <Divider />
        </Drawer>

        <Main open={open}>{children}</Main>
      </Box>

      <Footer />
    </Box>
  );
};
