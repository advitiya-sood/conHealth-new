import React from 'react'
import Button from '@mui/material/Button';
import DropDown from '../../SmallCompo/DropDown'
import './MainUpperSection.css'

export default function MainUpperSection({handleImageDisplay}) {




  return (
    <div className='UpperBox' >
        <Button variant="contained">Patient Form</Button>
        <div style={{display:"flex", gap:"10px"}} >
        <DropDown  handleImageDisplay={handleImageDisplay}  />
        <Button sx={{ color:'black', backgroundColor:"white"}} variant="contained" href="#contained-buttons"> Link</Button>
        </div>
        <div></div>
    </div>
  )
}
