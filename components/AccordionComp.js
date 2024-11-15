'use client'

import React from 'react'
import styles from '../app/page.module.css'
import AddIcon from '@mui/icons-material/Add';
import {Accordion,AccordionActions,AccordionSummary,AccordionDetails,Button} from '@mui/material'
const AccordionComp = ({accordionArray}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div style={{width:'100%',height:'100%',background:'#32de84', color:'white',display:'flex',flexDirection:'column',position:'relative',marginBottom:'100px'}}>
    <h2 style={{fontFamily:'Montserrat,sans-serif',fontWeight:'400',letterSpacing:'0.5px',marginTop:'5rem',textAlign:'center',color:'black',fontSize:'1.8rem'}}>{'Vanliga frågor'} </h2>
    <div style={{margin:'5rem 0'}}>
    {accordionArray?.map((el,i)=>(
      <Accordion expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)} key={i} style={{background:'white',width:'80%',margin:'1rem auto',padding:'0.25rem'}}>
    <AccordionSummary
      expandIcon={<AddIcon style={{color:'black',fontSize:'0.95rem'}}/>}
      aria-controls="panel1-content"
      id="panel-header"
      style={{fontFamily:'Montserrat,sans-serif',fontWeight:'700',color:'black',fontSize:'0.95rem',background:'white'}}
    >
     {el.title}
    </AccordionSummary>
    <AccordionDetails style={{background:'white',color:'black'}}>
    {el.text}
    </AccordionDetails>
  </Accordion>
    ))}
  </div>
  <svg className={styles.svg} style={{position:'absolute',zIndex:'999',bottom:'-10%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#32de84" fillOpacity="1" d="M0,288L48,261.3C96,235,192,181,288,165.3C384,149,480,171,576,170.7C672,171,768,149,864,165.3C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
</div>
  )
}

export default AccordionComp

