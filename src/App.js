import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import MenuAppBar from "./components/MenuBar";
import UserContainer from "./components/UserContainer";
import TrackButton from "./components/TrackButton";
import StatsButton from "./components/StatsButtton";
import { createMuiTheme } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    textAlign: "center"
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
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MenuAppBar />
          </Grid>
          <Grid item xs={12}>
            <UserContainer />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            xs={6}
          >
            <StatsButton />
          </Grid>
          <Grid item xs={6}>
            <TrackButton />
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
