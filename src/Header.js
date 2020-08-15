import React from "react";
import { AppBar, Toolbar, Typography, Icon } from "@material-ui/core";
import { Pets } from "@material-ui/icons";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "darkred" }}>
      <Toolbar>
        <Icon>
          <Pets />
        </Icon>
        <Typography variant="h6" style={{ marginLeft: "1rem" }}>
          Dog Book
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
