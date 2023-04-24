import React, { useState } from 'react'
import './MainArea.css'
import MainUpperSection from './MainUpperArea/MainUpperSection'
import ApiSection from './ApiSection/ApiSection'
import { Button } from '@mui/material'
import {useDropzone} from 'react-dropzone';


export default function MainArea() {
    const [currentImage,setCurrentImage]=useState("/Image/paitent_intake.png")
    const [imageState,setImageState]=useState(false)


    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
      };
      
      const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: 'border-box'
      };
      
      const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
      };
      
      const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
      };


    const handleImageDisplay=(value)=>{
        setImageState(false)
        if(value==="Patient Intake"){
            setCurrentImage("/Image/paitent_intake.png")

        }else if(value==="Handwritten Form"){
            setCurrentImage("/Image/handwritten-form.jpg")

        }else if(value==="Translated Form"){
            setCurrentImage("/Image/translated-form.jpg")
            
        }else if(value==="Image Form"){
            setCurrentImage("/Image/image-form.jpg")

        }

    }



        const [files, setFiles] = useState([]);
        const {getRootProps, getInputProps,open, acceptedFiles} = useDropzone({
          accept: {
            'image/*': []
          },
          onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
            })));
          }
        });


        const thumbs = files.map(file => 
            (<div  key={file.name}>
              <div style={thumbInner}>
                <img
                style={{width:"100%", height:"100%"}}
                  src={file.preview}
                  // Revoke data uri after image is loaded
                  onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
              </div>
            </div>
            ));


          const handleUpload=()=>{
            open()
            setImageState(true)
          }



  return (
    <div className='MainAreaBox' >
        <MainUpperSection  handleImageDisplay={handleImageDisplay} />
        <div className='MainAreaBoxInner' >
        <div className='LeftSection' >
            <div className='LeftSectionInner' >

                <div className="LeftDocumentImage" >
                    {(imageState)?(thumbs):
                        <img  style={{width:"100%", height:"100%"}} src={currentImage}/>
                    }
                </div>
                <div  className='ImageButtons' >
                <Button sx={{borderRadius:'8px', color:"black", backgroundColor:"white"}} variant="contained" onClick={handleUpload}  > Upload an Image</Button>
                <Button sx={{borderRadius:'8px', color:"black", backgroundColor:"white"}} variant="contained" > Process</Button>
                {console.log(files)}
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
