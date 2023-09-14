import * as React from 'react';



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box'
import { useState } from 'react';



export default function App() {

  
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  let [div,setdiv]=useState(false);
  let[divPro,setDivPro]=useState({
    display: "flex",
    justifyContent: "center", 
   width: 830,
   height: 60,
   backgroundColor: 'primary.dark',
   '&:hover': {
     backgroundColor: 'primary.main',
     opacity: [0.9, 0.8, 0.7]
     
    }})
    // const  icon=(<Box sx={{...divPro}} />);


  function divSliding(){

    
  if(div===false){
    setDivPro({display: "flex",
    justifyContent: "center", 
   width: 830,
   height: 300,
   backgroundColor: 'primary.dark',
   '&:hover': {
     backgroundColor: 'primary.main',
     opacity: [0.9, 0.8, 0.7]
     
   }})
  
  }

 else {
  setDivPro({
    display: "flex",
    justifyContent: "center", 
   width: 830,
   height: 60,
   backgroundColor: 'primary.dark',
   '&:hover': {
     backgroundColor: 'primary.main',
     opacity: [0.9, 0.8, 0.7]
     
    }})
  
 }
  }

  return (
    <>
    <div style={{marginTop:"100px"}}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Accordion style={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ textAlign: "center" }}>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ width:"800px", textAlign: "center" }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
</div>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Accordion style={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ textAlign: "center" }}>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ width:"800px",textAlign: "center" }}>

        <Switch {...label}   onChange={(event)=>{
            setdiv(event.target.checked)          
            
      
          
          divSliding();

        }}/>
      </AccordionDetails>
      
    </Accordion>
  </div>



</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>



<Box  sx={{...divPro,}} style={{ transition: ' 0.5s' }} ><h3 style={{ color:"whitesmoke",transition: ' 0.5s',display:"flex",justifyContent:"center",alignItems:"center"}}  >Hello</h3></Box>

          
        
</div>


    </div>

    
    </>




  );
}