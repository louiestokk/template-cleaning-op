'use client'

import React from 'react'
import styles from '../app/page.module.css'
import AddIcon from '@mui/icons-material/Add';
import {Accordion,AccordionActions,AccordionSummary,AccordionDetails,Button} from '@mui/material'
const AccordionComp = () => {
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

const accordionArray = [
    {
      title:'Hur mycket kostar flyttstädning?',
      text:'Kostnaden för flyttstädning varierar beroende på flera faktorer, som bostadens storlek, antal badrum, och städfirmans villkor. Vanligtvis kostar en flyttstädning mellan 25–30 kr per kvadratmeter efter RUT-avdraget, vilket innebär att en bostad på 125 kvadratmeter kan kosta runt 3 500 kr. Priset påverkas även av om städningen utförs på vardagar eller under helger, då kvälls- och helgstädning ofta har en prispåslag på 30–60 %.'
    },
    {
      title:'Vad kostar hemstäd i timman?',
      text:'Kostnaden för hemstädning per timme varierar beroende på företag, frekvens och region i Sverige. Generellt ligger timpriser för hemstädning mellan 220 och 300 kronor efter RUT-avdrag.'
    },
    {
      title:'Får jag RUT-avdrag när jag flyttar?',
      text:'Ja, du kan få RUT-avdrag för vissa kostnader när du flyttar. RUT-avdraget täcker arbetskostnader för flyttjänster, vilket inkluderar bland annat packning, lastning, uppackning och flyttstädning. Du kan dock inte få avdrag för kostnader relaterade till flyttbil, drivmedel, eller hyra av flyttkartonger. Avdraget gäller upp till 50 % av arbetskostnaden och maximalt 75 000 kronor per år för personer under 65 år, medan för äldre personer gäller ett tak på 50 000 kronor.'
    },
    {
      title:'Vad kostar det att tömma ett dödsbo?',
      text:'Att tömma ett dödsbo kan variera i pris beroende på bostadens storlek, mängden föremål, och eventuella specialtjänster som ingår, som städning och värdering. Generellt ligger timpriserna mellan 1,100 och 1,300 kronor för två personer som sköter tömningen. En liten bostad, exempelvis en etta, kan kosta från cirka 2,600 kronor och uppåt för tömning, medan större bostäder blir dyrare beroende på arbetstid och åtkomstförhållanden.'
    },
    {
      title:'Vad kostar bortforsling av möbler?',
      text:'Priset för att få bortforsling av möbler varierar beroende på faktorer som plats, mängd möbler och huruvida möblerna kan återanvändas eller måste slängas som avfall. En vanlig metod för prissättning är att företag tar betalt per kubikmeter avfall, och detta kan kosta från cirka 500 till 1000 kronor per kubikmeter. För mindre bortforslingar med enstaka möbler finns ofta en minimikostnad runt 1500–2000 kronor. '
    }
  ]