import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
const Image = (props) => {
  const { breedName } = props;
  const [imgUrl, setImgUrl] = useState(undefined);
  useEffect(() => {
    if (breedName !== null) {
      axios
        .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then((response) => {
          const url = response.data.message.toString();
          setImgUrl(url);
        });
    }
  }, [breedName]);
  const manageRefresh = () => {
    axios
      .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then((response) => {
        const url = response.data.message.toString();
        setImgUrl(url);
      });
  };

  return (
    <Card>
      {imgUrl ? (
        <CardMedia title="Dogs Image">
          <img
            src={imgUrl}
            alt={breedName}
            style={({ height: "300px" }, { width: "100%" })}
          />
        </CardMedia>
      ) : (
        <Skeleton height={300} variant="rect" />
      )}

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ textTransform: "capitalize" }}
        >
          {breedName === null ? "No Breed Selected" : breedName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={manageRefresh}
          startIcon={<NavigateNext />}
        >
          Next Image
        </Button>
      </CardActions>
    </Card>
  );
};

export default Image;
