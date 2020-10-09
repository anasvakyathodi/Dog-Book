import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
  Grid,
  Button,
  Divider,
  Box,
} from "@material-ui/core";
import AutoSearchComplete from "./components/AutoSearchComplete";
import { ExpandMore as ExpandMoreIcon, Pets } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  Accordion_a: {
    color: "red",
  },
  Accordion: {
    color: "black",
  },
});
const MyList = (props) => {
  const classes = useStyles();
  const { breedName, setBreedName, setValue } = props;
  const [breeds, setBreeds] = useState(undefined);
  const [searchValue, setSearchValue] = useState();

  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (key) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? key : false);
  };

  const handleChange = (event) => {
    let value = event.target.value.toLowerCase();
    setSearchValue(value);
  };

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      console.log(response.data.message);
      setBreeds(response.data.message);
    });
  }, [searchValue]);

  return (
    <>
      <Grid container justify="flex-end">
        <Grid item xs="12" md="4">
          <AutoSearchComplete
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            breeds={breeds}
            handleChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
      {breeds ? (
        Object.keys(breeds)
          .filter((key) =>
            searchValue !== "" && searchValue !== undefined
              ? key === searchValue
              : "null"
          )
          .map((key, i) => {
            return (
              <Accordion
                key={i}
                style={{ margin: "1rem" }}
                onClick={() => {
                  setBreedName(key);
                }}
                expanded={expandedPanel === key}
                onChange={handleAccordionChange(key)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="key"
                >
                  <Typography
                    style={{ textTransform: "capitalize" }}
                    className={
                      breedName === key
                        ? classes.Accordion_a
                        : classes.Accordion
                    }
                  >
                    {key}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {breeds[key].length === 0 ? (
                      <Typography>No Sub-Breads</Typography>
                    ) : (
                      breeds[key].map((breed) => (
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <Pets />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={breed} />
                        </ListItem>
                      ))
                    )}
                  </List>
                </AccordionDetails>
                <Divider />
                <Box p={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setValue(1)}
                  >
                    Select
                  </Button>
                </Box>
              </Accordion>
            );
          })
      ) : (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "60vh" }}
        >
          <Grid item>
            <CircularProgress color="secondary" size="4rem" />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MyList;
