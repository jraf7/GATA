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

function TrackButton() {
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
        Track
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Track Activity</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose your activity and tap Complete.
          </DialogContentText>
          <form noValidate autoComplete="off">
            <TextField
              autoFocus
              margin="dense"
              id="activity"
              label="Activity"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              multiline
              rows="4"
              label="Note"
              placeholder="Optional"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default TrackButton;
