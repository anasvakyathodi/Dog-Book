import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Avatar,
  IconButton,
  CardActions,
  Container,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import * as data from "./data/contributers-list.json";

const useStyle = makeStyles((theme) => ({
  contributers: {
    margin: theme.spacing(4),
    textAlign: "center",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  root: {
    maxWidth: 600,
    borderRadius: 10,
    display: "flex",
    justifySelf: "center",
    justifyContent: "space-between",
    margin: "1rem auto",
  },
  button: {
    padding: "1em 2em",
    marginLeft: theme.spacing(2),
  },
  content: {
    display: "flex",
    flex: "1",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  name: {
    marginLeft: "1rem",
  },
  avatar: {
    color: "black",
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <Container>
      <Typography variant="h4" className={classes.contributers} component="h2">
        Contributers
      </Typography>
      {data.contributers.map((contributer) => (
        <Card className={classes.root} elevation={4}>
          <CardContent className={classes.content}>
            <Avatar alt="avatar" src={contributer.avatar_url}></Avatar>
            <Typography variant="h5" className={classes.name}>
              {contributer.name}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <IconButton href={contributer.username}>
              <GitHub className={classes.avatar} />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default About;
