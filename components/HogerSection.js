import React from 'react'
import styles from '../app/page.module.css'
import { Box } from '@mui/material'
const HogerSection = ({hogerTitle,hogerText,hogertop}) => {
  return (
      <div style={{marginTop:'25px',width:'100%',marginLeft:'0.5rem'}}>
   <div className={styles.heroMain}>
    <Box>
    <Box>
                <Box style={{height:'10px'}}></Box>
                <h4 className={styles.titeln}>Om oss</h4>
    <h2 className={styles.titeln}>Vilka är vi på Tant Rut</h2>
    <p className={styles.textform}>Tant Rut är ett företag som brinner för att underlätta vardagen för dig. Vi erbjuder pålitliga tjänster inom <a className={styles.lankar} href='/stadfirma-goteborg' title='städfirma göteborg'>städning</a>, <a className={styles.lankar} href='/flyttfirma-goteborg' title='flyttfirma göteborg'>flytt</a> och hantering av <a className={styles.lankar} href='/stadfirma-goteborg' title='städfirma göteborg'>städning</a>, <a className={styles.lankar} href='/tomma-dodsbo-goteborg' title='tömma dödsbo göteborg'>dödsbon</a> , alltid med omtanke och respekt för våra kunder och deras hem. Med RUT-avdraget kan du dra nytta av våra tjänster till ett förmånligt pris och låta oss ta hand om de praktiska detaljerna, så att du kan fokusera på det som är viktigast för dig.</p>
    </Box>
      </Box>
      <Box>
               <img alt='flyttfirma och städfirma' src='https://img.freepik.com/free-vector/team-concept-illustration_114360-688.jpg?t=st=1731531815~exp=1731535415~hmac=e21991e58ebb253066e96723fcc1cb238d024181b0e5c6d00fe235f3f7386604&w=1380' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
    </Box>
    </div>
    </div>
  )
}

export default HogerSection

