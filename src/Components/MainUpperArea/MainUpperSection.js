import React from 'react'
import Button from '@mui/material/Button';
import DropDown from '../../SmallCompo/DropDown'
import './MainUpperSection.css'
import DropDown3 from '../../SmallCompo/DropDown3';

export default function MainUpperSection({handleImageDisplay,handleExport}) {


  return (
    <div className='UpperBox' >
        <div> <Button sx={{ color:'black', backgroundColor:"white"}} variant="contained"  onClick={handleExport} >Export</Button></div>
        <div style={{display:"flex", gap:"10px"}} >
        <DropDown3  handleImageDisplay={handleImageDisplay}  />
        <Button sx={{ color:'black', backgroundColor:"white"}} variant="contained" > Link</Button>
        </div>
        <div></div>
    </div>
  )
}
