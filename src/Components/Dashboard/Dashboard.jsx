import React, { useMemo, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import SideList from "./SideList/SideList";
import { useNavigate } from "react-router-dom";

import Appbar1 from "./Appbar/Appbar";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const navigate = useNavigate();
  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
        },
      }),
    [dark]
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appbar1 {...{ open, handleDrawerOpen,  setOpen, dark, setDark, navigate, AppBar }}/>
        <SideList {...{ open, setOpen }} />
      </Box>
    </ThemeProvider>
  );
}
