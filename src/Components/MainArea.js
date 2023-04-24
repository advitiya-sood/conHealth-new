import React from 'react'
import './MainArea.css'
import MainUpperSection from './MainUpperArea/MainUpperSection'
import ApiSection from './ApiSection/ApiSection'
import { Button } from '@mui/material'

export default function MainArea() {
  return (
    <div className='MainAreaBox' >
        <MainUpperSection/>
        <div className='MainAreaBoxInner' >
        <div className='LeftSection' >
            <div className='LeftSectionInner' >
                <div className="LeftDocumentImage" >
                        Image
                </div>
                <div  className='ImageButtons' >
                <Button sx={{borderRadius:'8px', color:"black", backgroundColor:"white"}} variant="contained" > Upload an Image</Button>
                <Button sx={{borderRadius:'8px', color:"black", backgroundColor:"white"}} variant="contained" > Process</Button>
                </div>
            </div>

        </div>
        <div className='RightSection' >
            <div className='RightSectionInner' >
                    <ApiSection/>
            </div>

        </div>
        </div>
    </div>
  )
}
