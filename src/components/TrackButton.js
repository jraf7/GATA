import React from "react";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";

function TrackButton() {
  return (
    <Container>
      <Fab
        variant="extended"
        color="primary"
        id="track"
        size="large"
        onClick={() => alert("hello")}
      >
        Track
      </Fab>
    </Container>
  );
}

export default TrackButton;
