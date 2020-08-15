import React from "react";
import { Card, CardContent, Typography, Link } from "@material-ui/core";
const About = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="body2" component="h2">
          Developed By
        </Typography>
        <Typography variant="h3" component="p" gutterBottom>
          Anas Vakyathodi
        </Typography>
        <Typography variant="subtitle1">Git :</Typography>
        <Link href="https://github.com/anasvakyathodi">
          <Typography variant="button" color="primary">
            @anasvakyathodi
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default About;
