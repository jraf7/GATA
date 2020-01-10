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
import ANAmenu from '../ANAmenu';
import LineGraph from "../LineGraph";
import StatJournal from "../StatJournal";
// import StatHabit from "StatHabit";
import axios from 'axios';
import "./style.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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

function ShowStats() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const handleChange = event => {
        setAge(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [weightData, setWeightData] = React.useState([]);
    React.useEffect(() => {
        axios
            .get("/api/users/weight")
            .then((res) => {
                const newWeightData = res.data.map(item => {
                    return { ...item, id: `${item.weight}-${(new Date(item.createdAt)).getTime()}` };
                });
                console.log(newWeightData);
                setWeightData(newWeightData);
            });
    }, []);
    function formatData(dataLabel, initialData) {
        const data = initialData.map(item => {
            return {
                x: item.createdAt,
                y: item.weight
            };
        });
        return [{
            "id": dataLabel,
            "color": "hsl(142, 70%, 50%)",
            "data": data
        }];
    }

    // function formatHabit(dataLabel) {
    //     const hdata =
    //         [
    //             {
    //                 "id": "men",
    //                 "label": "Read 10 Min",
    //                 "value": 13.03334892034305,
    //                 "color": "#468df3"
    //             },
    //             {
    //                 "id": "women",
    //                 "label": "women",
    //                 "value": 13.86676044444814,
    //                 "color": "#ba72ff"
    //             },
    //             {
    //                 "id": "children",
    //                 "label": "children",
    //                 "value": 16.75481706762016,
    //                 "color": "#a1cfff"
    //             }
    //         ];


    return (
        <div>
            <Button onClick={handleClickOpen}>Show My Stats</Button>
            <Dialog fullScreen={fullScreen} disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>

                <DialogTitle>Show My Stats</DialogTitle>
                <DialogContent>
                    <LineGraph data={formatData("weight", weightData)} />
                    {/* <StatHabit hdata={formatHabit("habit", habitData)} /> */}
                    <StatJournal />

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

export default ShowStats;