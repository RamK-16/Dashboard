import React, {  } from "react";
import { Tooltip } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4, Brightness7, Home } from "@mui/icons-material";




function Appbar1({open, handleDrawerOpen,  setOpen, dark, setDark, navigate, AppBar}) {
  return (
    <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Tooltip title="Go back to homePage">
              <IconButton sx={{ mr: 1 }} onClick={() => navigate("/")}>
                <Home />
              </IconButton>
            </Tooltip>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton onClick={() => setDark(!dark)}>
              {dark ? <Brightness7 /> : <Brightness4 /> }
            </IconButton>
          </Toolbar>
        </AppBar>
  )
}

export default Appbar1
