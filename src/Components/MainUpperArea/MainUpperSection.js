import React from 'react'
import Button from '@mui/material/Button';
import DropDown from '../../SmallCompo/DropDown'
import './MainUpperSection.css'
import DropDown3 from '../../SmallCompo/DropDown3';

export default function MainUpperSection({handleImageDisplay}) {




  return (
    <div className='UpperBox' >
        <div></div>
        <div style={{display:"flex", gap:"10px"}} >
        {/* <DropDown  handleImageDisplay={handleImageDisplay}  /> */}
        <DropDown3  handleImageDisplay={handleImageDisplay}  />
        <Button sx={{ color:'black', backgroundColor:"white"}} variant="contained" href="#contained-buttons"> Link</Button>
        </div>
        <div></div>
    </div>
  )
}
