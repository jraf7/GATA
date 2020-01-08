import React, { Component } from "react";
import API from "../../utils/API";
import {
  Container,
  Fab,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  Input,
  Select,
  FormControl
} from "@material-ui/core/";

class TrackButton extends Component {
  state = {
    tasks: [],
    open: false,
    setOpen: false,
    task: ""
  };

  componentDidMount() {
    API.task.get().then(res => this.setState({ tasks: res.data }));
  }

  handleClickOpen = () => {
    this.setState({ open: true, setOpen: true });
  };

  handleClose = () => {
    this.setState({ open: false, setOpen: false });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <Container>
        <Fab
          variant="extended"
          color="primary"
          id="track"
          size="large"
          onClick={this.handleClickOpen}
        >
          Track
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Track Activity</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Choose your activity and tap Complete.
            </DialogContentText>
            <form>
              <FormControl>
                <InputLabel htmlFor="demo-dialog-native">Activity</InputLabel>
                <Select
                  native
                  value={this.state.task}
                  onChange={this.handleChange}
                  input={<Input id="demo-dialog-native" />}
                >
                  <option value="" />
                  {this.state.tasks.map(task => (
                    <option key={task._id} value={task._id}>
                      {task.task}
                    </option>
                  ))}
                </Select>
              </FormControl>
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
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Complete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }
}
export default TrackButton;
