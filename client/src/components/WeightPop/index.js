import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function WeightPop() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>Weight Entry</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Weight Entry</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <TextField id="filled-basic" label="Weight" variant="filled" />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-dialog-native">Unit</InputLabel>
                            <Select
                                native
                                value={age}
                                onChange={handleChange}
                                input={<Input id="demo-dialog-native" />}
                            >
                                <option value="" />
                                <option value={20}>lb</option>
                                <option value={23}>kg</option>
                            </Select>
                        </FormControl>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}



export default WeightPop;