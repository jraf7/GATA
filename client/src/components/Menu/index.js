import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import WeightPop from "../WeightPop";
// import Text from "../Text";

function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Activity List</Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* <MenuItem onClick={handleClose}>Journal</MenuItem> */}
                <MenuItem onClick={handleClose}>Workout and Stretch</MenuItem>
                <MenuItem onClick={handleClose}>Read 10 min</MenuItem>

            </Menu>
        </div>
    );
}

export default SimpleMenu;









