import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8b0000",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginBottom: "15px",
  },
  searchField: {
    "& .MuiAutocomplete-inputRoot": {
      borderRadius: "2rem",
      "&:hover": { backgroundColor: "rgb(139, 0, 0, .1)" },
    },
  },
}));

export default function AutoSearchComplete({
  searchValue,
  setSearchValue,
  breeds,
  handleChange,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        freeSolo
        id="search"
        disableClearable
        options={
          breeds
            ? Object.keys(breeds).map((key, i) => {
                return key.charAt(0).toUpperCase() + key.slice(1);
              })
            : "No breeds"
        }
        onChange={(event, value) => setSearchValue(value.toLowerCase())}
        renderInput={(params) => (
          <ThemeProvider theme={theme}>
            <TextField
              {...params}
              label="Search breeds"
              value={searchValue}
              margin="normal"
              onChange={handleChange}
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
              className={classes.searchField}
            />
          </ThemeProvider>
        )}
      />
    </div>
  );
}
