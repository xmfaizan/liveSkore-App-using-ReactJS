import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant="h5">liveSkore</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
