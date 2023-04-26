import React, { useState } from 'react'
import './MainArea.css'
import MainUpperSection from './MainUpperArea/MainUpperSection'
import ApiSection from './ApiSection/ApiSection'
import { Button } from '@mui/material'
import {useDropzone} from 'react-dropzone';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';

export default function MainArea() {
    const [currentImage,setCurrentImage]=useState("/Image/paitent_intake.png")
    const [imageState,setImageState]=useState(false)

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);



   


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
        if(value==="contract2"){
            setCurrentImage("/contract_notes/contract2.pdf")
        }else if(value==="contract3"){
            setCurrentImage("/contract_notes/contract3.pdf")
        }else if(value==="contract4"){
            setCurrentImage("/contract_notes/contract4.pdf")
        }else if(value==="contract5"){
            setCurrentImage("/contract_notes/contract5.pdf")
        }else if(value==="Govind Beriwal-Jb Contract Note"){
          setCurrentImage("/contract_notes/GOVIND BERIWAL- JB Contract Note.pdf")
      }
    
      else if(value==="hdfc_Statement1"){
        setCurrentImage("/hdfc_statements/statement1.pdf")
      }else if(value==="hdfc_Statement2"){
        setCurrentImage("/hdfc_statements/statement2.pdf")
      }else if(value==="hdfc_Statement3"){
        setCurrentImage("/hdfc_statements/statement3.pdf")
      }else if(value==="hdfc_Statement4"){
        setCurrentImage("/hdfc_statements/statement4.pdf")
      }else if(value==="hdfc_Statement5"){
        setCurrentImage("/hdfc_statements/statement5.pdf")
      }else if(value==="Anuj Beriwala-Iifl Bank Statement"){
        setCurrentImage("/hdfc_statements/Anju Beriwala- IIFL Bank Statement.pdf")
      }

      else if(value==="kotak_Statement2"){
        setCurrentImage("/kotak-statements/Kotak Bank Statement2.pdf")
      }else if(value==="kotak_Statement3"){
        setCurrentImage("/kotak-statements/Kotak Bank Statement3.pdf")
      }else if(value==="kotak_Statement4"){
        setCurrentImage("/kotak-statements/Kotak Bank Statement4.pdf")
      }else if(value==="kotak_Statement5"){
        setCurrentImage("/kotak-statements/Kotak Bank Statement5.pdf")
      }else if(value==="kotak_Statement6"){
        setCurrentImage("/kotak-statements/Kotak Bank Statement6.pdf")
      }

    }



      const [files, setFiles] = useState([]);
       


          const handleUpload=(e)=>{
            let seletedFile=e.target.files[0];
            setCurrentImage(seletedFile)       
          }

 


          function onDocumentLoadSuccess({numPages}){
            setNumPages(numPages);
            setPageNumber(1);
          }


          function changePage(offSet){
            setPageNumber(prevPageNumber => prevPageNumber + offSet);
          }
          function changePageBack(){
            changePage(-1)
          }
        
          function changePageNext(){
            changePage(+1)
          }



  return (
    <div className='MainAreaBox' >
        <MainUpperSection  handleImageDisplay={handleImageDisplay} />
        <div className='MainAreaBoxInner' >
        <div className='LeftSection' >
            <div className='LeftSectionInner' >

                <div className="LeftDocumentImage" >     
                   <Document file={currentImage} onLoadSuccess={onDocumentLoadSuccess} >
                  <Page height="350" width="450"   pageNumber={pageNumber} />
                  </Document>
                
                </div>
                <div  className='ImageButtons' >

                <Button  type='file' sx={{borderRadius:'8px', color:"black", backgroundColor:"white"}} > <input type='file'  onChange={handleUpload} ></input></Button>

                {/* <input type='file'  onChange={handleUpload} ></input> */}

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
