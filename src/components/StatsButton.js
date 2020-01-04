import React from "react";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";

function StatsButton() {
  return (
    <Container>
      <Fab
        variant="extended"
        id="stats"
        color="primary"
        size="large"
        onClick={() => alert("hello")}
      >
        Stats
      </Fab>
    </Container>
  );
}

export default StatsButton;
