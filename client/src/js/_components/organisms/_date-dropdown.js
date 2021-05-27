import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const options = [
    "January,2020",
    "February,2020",
    "March,2020",
    "April,2020",
    "May,2020",
    "June,2020",
    "July,2020",
    "August,2020",
    "September,2020",
    "October,2020",
    "November,2020",
    "December,2020",
];

const ITEM_HEIGHT = 48;

export default function DateDropdown({setSelectedDate}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const handleAddClick = (option) =>{
      setSelectedDate(option);
      setAnchorEl(null);
  }

 
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={()=>handleAddClick(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}