import React from "react";
import { Container, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";
import MenuAppBar from "../components/MenuBar";
import UserContainer from "../components/UserContainer";
import TrackButton from "../components/TrackButton";
import STATS from "../components/StatsButton";

import "../App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: red[400],
      main: red[600],
      dark: red[900],
      contrastText: "#000"
    },
    secondary: {
      light: grey[400],
      main: grey[600],
      dark: grey[900],
      contrastText: "#000"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    background: "black",
    height: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MenuAppBar />
          </Grid>
          <Grid item xs={12}>
            <UserContainer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
