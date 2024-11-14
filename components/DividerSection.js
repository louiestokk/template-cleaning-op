import React from 'react'
import styles from '../app/page.module.css'
import { Box } from '@mui/material'
import Divider from './Divider'
import FormComp from './FormComp'
const DividerSection = () => {
  return (
    <div style={{width:'100%'}}>
        <div className={styles.heroMain} id='bortforsling'>
    <Box>
                <img alt='bortforsling mäbler och grovsopor' src='https://img.freepik.com/free-vector/house-moving-illustration_52683-46999.jpg?t=st=1731541590~exp=1731545190~hmac=f9d10a18f180697916a4c01ca3c63347927ef099030bb449e4470419ebd3419c&w=1800' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>Bortforsling</h4>
     <h2  className={styles.titeln}>Vi forslar bort möbler och grovsopor</h2>
     <p className={styles.textform}>
     Vi erbjuder snabb och smidig bortforsling av möbler och grovsopor direkt från din bostad eller arbetsplats. Vårt erfarna team tar hand om allt från tunga möbler till skrymmande avfall och ser till att allt hanteras miljövänligt och enligt återvinningskrav. Vi sköter hela processen, så att du slipper tänka på transport och återvinning.
     </p>
     </Box>
       </Box>
     
     </div>
     <Divider text={'Du är i trygga händer - Vi är försäkrade'}/>
     <div className={styles.heroMain} id='dodsbon'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>Dödsbon</h4>
     <h2 className={styles.titeln}>Köper, tömmer och städar dödsbon</h2>
     <p className={styles.textform}>
     Vi erbjuder professionell hantering av dödsbon, inklusive tömning, städning och försäljning av föremål. Vi köper upp dödsbon och säljer vidare värdefulla objekt på ett effektivt sätt, samtidigt som vi ser till att tömma och städa bostaden. Vårt mål är att underlätta processen för anhöriga genom att ta hand om allt från värdering och bortforsling till slutstädning, med omtanke och respekt.
     </p>
     </Box>
       </Box>
       <Box>
                <img alt='dödsbon, tömma och köpa dödsbo' src='https://img.freepik.com/premium-vector/funeral-ceremony-vector-illustration-sad-people-black-clothes-standing-by-grave-with-wreaths-around-coffin-flat-cartoon-background_2175-25085.jpg?w=1800' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
     <div style={{height:'50px'}}></div>
     <div className={styles.heroMain} style={{background:'#32de84'}}>
     <Box>
        <FormComp data={varaTjanster} title={'Be om offert kostnadsfritt'}/>
      </Box>
    <Box>
                <Box>
                <Box style={{height:'10px'}}></Box>
                <h4 className={styles.titeln}>Tant Rut Alltjänst</h4>
    <h1 className={styles.titeln}>Använd vårt formulär för att snabbt få en offert!</h1>
    <p className={styles.textform}>Vi flyttar, städar och tömmer hushåll och dödsbon. Nyttja din rut när du använder våra tjänster!</p>
    </Box>
    </Box>
    </div>
    <div className={styles.heroMain} id='kontorsstad'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>Kontorsstäd</h4>
     <h2 className={styles.titeln}> Skräddarsydd kontorsstädning!</h2>
     <p className={styles.textform}>
     Vi erbjuder skräddarsydd kontorsstädning som passar just dina behov. Vårt erfarna team ser till att ditt kontor hålls rent, fräscht och inbjudande. Vi tar hand om allt från daglig städning till mer omfattande rengöring, och ser till att alla ytor, inklusive toaletter och kök, hålls i toppskick. Med vår flexibla tjänst kan vi anpassa städningen efter ditt kontors schema för minimal störning och maximal effektivitet.
     </p>
     </Box>
       </Box>
       <Box>
                <img alt='kontorrsstäd' src='https://img.freepik.com/premium-vector/cleaning-staff-team-working-office_179970-1861.jpg?w=1800' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
    </div>
  )
}

export default DividerSection

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