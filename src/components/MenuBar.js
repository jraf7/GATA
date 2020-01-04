import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function MenuAppBar() {
  return (
    <div style={{ padding: 20 }}>
      <AppBar>
        <Toolbar>
          <MenuIcon fontSize="large" />
          <Typography variant="h4" align="center">
            G.A.T.A
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;
