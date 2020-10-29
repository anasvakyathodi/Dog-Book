import React from "react";
import { Card, CardContent, Typography, Link, CardHeader, makeStyles, Avatar } from "@material-ui/core";
import * as data from './data/contributers-list.json';

const useStyle = makeStyles(theme => ({
  root: {
      maxWidth: 600,
      display: 'flex',
      justifyContent: 'flex-start',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
      borderRadius: 10
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <>
      {
        data.contributers.map((contributer) => (
          <Card className={classes.root}>
            <CardHeader
            avatar={<Avatar alt="avatar" src={contributer.avatar_url}></Avatar>} 
            title="Contributer"/>
            <CardContent>
              <Typography gutterBottom variant="body2" component="h2">
                Developed By
              </Typography>
              <Typography variant="h3" component="p" gutterBottom>
                {contributer.name}
              </Typography>
              <Typography variant="subtitle1">Git :</Typography>
              <Link href={contributer.username}>
                <Typography variant="button" color="primary">
                  {contributer.username}
                </Typography>
              </Link>
            </CardContent>
          </Card>)
        )
      }
    </>

  );
};

export default About;
