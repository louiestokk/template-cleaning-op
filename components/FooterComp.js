import React from 'react'
import styles from '../app/page.module.css'
import { Box } from '@mui/material'
import FormComp from './FormComp'
const FooterComp = () => {
  return (
    <footer style={{width:'100%'}}>
         <div className={styles.heroMain} style={{background:'#32de84'}}>
         <Box>
                <Box>
                <Box style={{height:'10px'}}></Box>
                <h4 className={styles.titeln}>Tant Rut Alltjänst</h4>
    <h1 className={styles.titeln}>Kontakta oss</h1>
    <p className={styles.textform}>Har du några frågor eller vill du få en kostnadsfri offert?</p>
    <p className={styles.textform}>Vi flyttar, städar och tömmer hushåll och dödsbon. Nyttja din rut när du använder våra tjänster!</p>
    <p style={{fontSize:'0.85rem'}} className={styles.textform}>Håkansgatan 3, 418 74 Göteborg</p>
    <p style={{fontSize:'0.85rem'}} className={styles.textform}>Bogesundsgatan 4, 523 48 Ulricehamn</p>
    <p style={{fontSize:'0.85rem'}} className={styles.textform}>ORGNR: 556469-5194</p>
    </Box>
    </Box>
     <Box>
        <FormComp data={varaTjanster} title={'Gör en kostnadsfri förfrågan!'}/>
      </Box>
  
    </div>
    </footer>
  )
}

export default FooterComp

const varaTjanster = [
    {
        title:'Städning',
        img_url:'https://www.svgrepo.com/show/187276/apartment.svg'
    },
    {
        title:'Flytt',
        img_url:'https://www.svgrepo.com/show/403672/house.svg'
    },
    {
        title:'Bortforsling',
        img_url:'https://www.svgrepo.com/show/490884/office-chair.svg'
    },
    {
        title:'Dödsbo',
        img_url:'https://www.svgrepo.com/show/247029/garage.svg'
    }
  ]