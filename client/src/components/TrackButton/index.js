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
import SimpleMenu from "../Menu";
import WeightPop from "../WeightPop";
import JournalText from "../JournalText";
import AddNewAct from "../AddNewAct";

class TrackButton extends Component {
  state = {
    tasks: [],
    open: false,
    setOpen: false,
    task: ""
  };

  componentDidMount() {
    API.user.get().then(res => console.log('res.data', res.data));
    // tasks: res.data })
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
            <SimpleMenu />
            <WeightPop />
            <JournalText />
            <AddNewAct />
            {/* <FormControl>
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
              </FormControl> */}

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




