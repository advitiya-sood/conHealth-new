import React, { useState } from 'react'
import './MainArea.css'
import MainUpperSection from './MainUpperArea/MainUpperSection'
import ApiSection from './ApiSection/ApiSection'
import { Button } from '@mui/material'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import model from '../Model/model.mjs'

import contract2 from "../assets/contract_notes/contract2.pdf"
import contract3 from "../assets/contract_notes/contract3.pdf"
import contract4 from "../assets/contract_notes/contract4.pdf"
import contract5 from "../assets/contract_notes/contract5.pdf"
import GOVIND_BERIWAL_JB_Contract_Note from "../assets/contract_notes/GOVIND_BERIWAL_JB_Contract_Note.pdf"

import statement1 from "../assets/hdfc_statements/statement1.pdf"
import statement2 from "../assets/hdfc_statements/statement2.pdf"
import statement3 from "../assets/hdfc_statements/statement3.pdf"
import statement4 from "../assets/hdfc_statements/statement4.pdf"
import statement5 from "../assets/hdfc_statements/statement5.pdf"
import Anju_Beriwala_IIFL_Bank_Statement from "../assets/hdfc_statements/Anju_Beriwala_IIFL_Bank_Statement.pdf"

import Kotak_Bank_Statement2 from "../assets/kotak-statements/Kotak_Bank_Statement2.pdf"
import Kotak_Bank_Statement3 from "../assets/kotak-statements/Kotak_Bank_Statement3.pdf"
import Kotak_Bank_Statement4 from "../assets/kotak-statements/Kotak_Bank_Statement4.pdf"
import Kotak_Bank_Statement5 from "../assets/kotak-statements/Kotak_Bank_Statement5.pdf"
import Kotak_Bank_Statement6 from "../assets/kotak-statements/Kotak_Bank_Statement6.pdf"




export default function MainArea() {
    const [currentImage,setCurrentImage]=useState(Anju_Beriwala_IIFL_Bank_Statement)
    const [imageState,setImageState]=useState(false)
    const [apiResponse,setApiResponse]=useState()

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);



    const handleImageDisplay=(value)=>{
        setImageState(false)
        if(value==="contract2"){
            setCurrentImage(contract2)
        }else if(value==="contract3"){
            setCurrentImage(contract3)
        }else if(value==="contract4"){
            setCurrentImage(contract4)
        }else if(value==="contract5"){
            setCurrentImage(contract5)
        }else if(value==="Govind Beriwal-Jb Contract Note"){
          setCurrentImage(GOVIND_BERIWAL_JB_Contract_Note)
      }
    
      else if(value==="hdfc_Statement1"){
        setCurrentImage(statement1)
      }else if(value==="hdfc_Statement2"){
        setCurrentImage(statement2)
      }else if(value==="hdfc_Statement3"){
        setCurrentImage(statement3)
      }else if(value==="hdfc_Statement4"){
        setCurrentImage(statement4)
      }else if(value==="hdfc_Statement5"){
        setCurrentImage(statement5)
      }else if(value==="Anuj Beriwala-Iifl Bank Statement"){
        setCurrentImage(Anju_Beriwala_IIFL_Bank_Statement)
      }

      else if(value==="kotak_Statement2"){
        setCurrentImage(Kotak_Bank_Statement2)
      }else if(value==="kotak_Statement3"){
        setCurrentImage(Kotak_Bank_Statement3)
      }else if(value==="kotak_Statement4"){
        setCurrentImage(Kotak_Bank_Statement4)
      }else if(value==="kotak_Statement5"){
        setCurrentImage(Kotak_Bank_Statement5)
      }else if(value==="kotak_Statement6"){
        setCurrentImage(Kotak_Bank_Statement6)
      }

    }

      const [files, setFiles] = useState([]);
       


          const handleUpload=(e)=>{
            let seletedFile=e.target.files[0];
            setCurrentImage(seletedFile)       
          }

          const handleProcess= async()=>{
          const response= await model()
          console.log("response",response)
            setApiResponse(response)
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
                  <Page height={350}   pageNumber={pageNumber} />
                  </Document>
                
                </div>
                <div  className='ImageButtons' >

                <Button  type='file' sx={{borderRadius:'8px', color:"black", backgroundColor:"white"}} > <input type='file'  onChange={handleUpload} ></input></Button>


                <Button sx={{borderRadius:'8px', color:"black", backgroundColor:"white"}} variant="contained"  onClick={handleProcess} > Process</Button>
        
                </div>

            </div>

        </div>
        <div className='RightSection' >
            <div className='RightSectionInner' >
                    <ApiSection   apiResponse={apiResponse} />
            </div>

        </div>
        </div>
    </div>
  )
}
