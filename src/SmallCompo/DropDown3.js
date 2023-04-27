import React from 'react';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';

import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine'
  
function DropDown3(props) {
    
    const [selectedVallue, setSeletedValue]=React.useState("Hdfc_Statements")



    const handleClose = (event) => {
        setSeletedValue(event.target.innerText)
        props.handleImageDisplay(event.target.innerText)
      };


      const renderButton = (props, ref) => {
        return (
          <div  {...props} ref={ref} 

          style={{width:"350px",height:"40px", 
          backgroundColor:"#031220", color:"white", borderRadius:"10px", fontSize:"18px"
          ,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}} >

            {selectedVallue}
            <ArrowDownLineIcon/>
          </div>
        );
      };

    return (
        <div>
            <Dropdown  menuStyle={{backgroundColor:"#031220", color:"white"}} renderToggle={renderButton} title={selectedVallue}>
            {/* <Dropdown.Menu style={{backgroundColor:"#031220", color:"white", width:"200px"}}  title="Contract Notes">
                    <Dropdown.Item  onClick={handleClose} >contract2</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >contract3</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >contract4</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >contract5</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >Govind Beriwal-Jb Contract Note</Dropdown.Item>

                </Dropdown.Menu> */}

                <Dropdown.Item  onClick={handleClose} >Contract</Dropdown.Item>
                <Dropdown.Item  onClick={handleClose} >Hdfc_Statements</Dropdown.Item>
                <Dropdown.Item  onClick={handleClose} >Kotak_Statements</Dropdown.Item>


                {/* <Dropdown.Menu  style={{backgroundColor:"#031220", color:"white", width:"200px"}} title="Hdfc_Statements">
                    <Dropdown.Item  onClick={handleClose} >hdfc_Statement1</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >hdfc_Statement2</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >hdfc_Statement3</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >hdfc_Statement4</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >hdfc_Statement5</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >Anuj Beriwala-Iifl Bank Statement</Dropdown.Item>

                </Dropdown.Menu> */}
                {/* <Dropdown.Menu  style={{backgroundColor:"#031220", color:"white", width:"200px"}} title="Kotak_Statements">
                    <Dropdown.Item  onClick={handleClose} >kotak_Statement2</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >kotak_Statement3</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >kotak_Statement4</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >kotak_Statement5</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClose} >kotak_Statement6</Dropdown.Item>
                </Dropdown.Menu> */}
                
               
            </Dropdown>
        </div>
    )
}
  
export default DropDown3;