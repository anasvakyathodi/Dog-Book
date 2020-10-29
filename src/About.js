import React from "react";
import { Card, CardContent, Typography, makeStyles, Avatar, Button, CardActions } from "@material-ui/core";
import * as data from './data/contributers-list.json';

const useStyle = makeStyles(theme => ({
  contributers: {
    margin: theme.spacing(2)
  },
  root: {
    maxWidth: 600,
    borderRadius: 10,
    margin: theme.spacing(2)
  },
  button: {
    padding: "1em 2em",
    marginLeft: theme.spacing(2)
  },
  content: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center'
  }
}));

const About = () => {
  const classes = useStyle();
  return (
    <>
      <Typography variant="h2" className={classes.contributers} component="h2">Contributers</Typography>
      {
        data.contributers.map((contributer) => (
          <Card className={classes.root} elevation={6}>
            <CardContent className={classes.content}>
              <Typography variant="h4" component="p" gutterBottom>
                {contributer.name}
              </Typography>
              <Avatar alt="avatar" src={contributer.avatar_url}></Avatar>

            </CardContent>
            <CardActions className={classes.actions}>
              <Button variant="contained" color="primary" className={classes.button} href={contributer.username}>
                Profile
              </Button></CardActions>
          </Card>)
        )
      }
    </>

  );
};

export default About;
