import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FormControlLabel, FormGroup } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 300,
    backgroundColor:"#031220",
    color: "white",
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: "#2874A6"
      },
      '&:hover':{
        backgroundColor: "#2874A6"
      }
    },
  },
}));

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedVallue, setSeletedValue]=React.useState("Patient Intake")
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setSeletedValue(event.target.innerText)
    props.handleImageDisplay(event.target.innerText)
    setAnchorEl(null);
  };


  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        sx={{width:'300px', backgroundColor:"#031220"}}
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon/>}
      >
        {selectedVallue}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem  name="Patient Intake" value="Patient Intake" onClick={handleClose} disableRipple>
          Patient Intake
        </MenuItem>
        <MenuItem  name="Handwritten Form"  value="Handwritten Form" onClick={handleClose} disableRipple>
          Handwritten Form
        </MenuItem><MenuItem   name="Translated Form" value="Translated Form" onClick={handleClose} disableRipple>
         Translated Form
       </MenuItem><MenuItem  value="Image Form" name="Image Form" onClick={handleClose} disableRipple>
         Image Form
       </MenuItem>


       
      </StyledMenu>
    </div>
  );
}