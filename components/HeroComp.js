import React from 'react'
import FormComp from './FormComp'
import { Grid2,Button, Box } from '@mui/material'
import styles from '../app/page.module.css'
const HeroComp = () => {
  return (
    <div style={{marginTop:'25px',width:'100%',marginLeft:'0.5rem'}}>
   <div className={styles.heroMain}>
    <Box>
                <Box>
                <Box style={{height:'10px'}}></Box>
                <h4 className={styles.titeln}>Tant Rut Alltjänst</h4>
    <h1 className={styles.titeln}>Vi tar hand om hemmet med RUT-avdrag! </h1>
    <p className={styles.textform}>Vi flyttar, städar och tömmer hushåll och dödsbon. Nyttja din rut när du använder våra tjänster!</p>
    </Box>
               <img className={styles.heroImg} alt='flyttfirma och städfirma' src='/hero.jpg' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
    </Box>
    <Box>
        <FormComp data={varaTjanster} title={'Be om offert'}/>
      </Box>
    </div>
    </div>
 
  )
}

export default HeroComp

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