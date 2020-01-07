import React from "react";
import {
  Container,
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogTitle
} from "@material-ui/core/";

import Date from './Date';

function STATS() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Container>
      <Fab
        variant="extended"
        color="primary"
        id="track"
        size="large"
        onClick={handleClickOpen}
      >
        STATS

      </Fab>



      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Your Progress</DialogTitle>
        <Date />
        <DialogActions>



          <Button onClick={handleClose} color="primary">
            Done
          </Button>

        </DialogActions>
      </Dialog>

    </Container>
  );
}

export default STATS;
