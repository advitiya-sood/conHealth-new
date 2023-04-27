import React from 'react'
import './ApiSection.css'

export default function ApiSection({apiResponse}) {
  return (
    <div  className='ApiSectionBox' >
        <div className='ApiSectionBoxLeft'>
            <h3 style={{padding:"20px"}} >RESULT:</h3>
          

          { apiResponse && Object.entries(apiResponse).map(([key,value]) => {
              return(
                <div key={key} > <span style={{fontWeight:"bold"}} >{key}</span>:{value? value.toString() : ""}</div>
                )
            })}
       

        </div>
        <div className='ApiSectionBoxRight' >

            <div className='ApiSectionBoxRight-chatbotHeader' >
              <h4>Copilot</h4>
            </div>
            <div className='ApiSectionBoxRight-body' >

            </div>
            <div className='ApiSectionBoxRight-bottom' >
              <input   className='ApiSectionBoxRight-bottom-Input'   placeholder='Type a Message...' />
            </div>
        </div>
    </div>
  )
}
