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
} from "@material-ui/core";
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
  const { breedName, setBreedName } = props;
  const [breeds, setBreeds] = useState(undefined);
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      console.log(response.data.message);
      setBreeds(response.data.message);
    });
  }, []);

  return (
    <>
      {breeds ? (
        Object.keys(breeds).map((key, i) => {
          return (
            <Accordion
              key={i}
              style={{ margin: "1rem" }}
              onClick={() => {
                setBreedName(key);
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="key"
              >
                <Typography
                  style={{ textTransform: "capitalize" }}
                  className={
                    breedName === key ? classes.Accordion_a : classes.Accordion
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
