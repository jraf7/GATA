import React from "react";
import {
  Container,
  Fab,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core/";

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
