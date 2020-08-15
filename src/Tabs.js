import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import About from "./About";
import MyList from "./List";
import Image from "./Image";
import { Paper } from "@material-ui/core";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color: "darkred"
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [breedName, setBreedName] = useState(null);
  return (
    <div>
      <AppBar position="sticky" className={classes.root}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Breeds" />
          <Tab label="Image" />
          <Tab label="About" />
        </Tabs>
      </AppBar>
      <Paper>
        <TabPanel value={value} index={0}>
          <MyList {...{ breedName, setBreedName }} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Image {...{ breedName }} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <About />
        </TabPanel>
      </Paper>
    </div>
  );
}
