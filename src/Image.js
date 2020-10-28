import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";

import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import Loader from "react-loader-spinner";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

const LoadingIndicator = (props)  => {
  const { promiseInProgress } = usePromiseTracker(true);
  return(
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader type= "TailSpin" color="#f50057" height="60" width="60"></Loader>
      </div>
    )
  );
};

const Image = (props) => {
  const { breedName } = props;
  const [imgUrl, setImgUrl] = useState(undefined);
  useEffect(() => {
    if (breedName !== null) {
      trackPromise(axios
        .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then((response) => {
          const url = response.data.message.toString();
          setImgUrl(url);
      }));
    }
  }, [breedName]);
  const manageRefresh = () => {
    trackPromise(axios
      .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then((response) => {
        const url = response.data.message.toString();
        setImgUrl(url);
      }));
  };

  return (
    <Card>
      {imgUrl ? (
        <CardMedia title="Dogs Image">
          <LoadingIndicator />
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
