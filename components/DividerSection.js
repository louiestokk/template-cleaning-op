import React from 'react'
import styles from '../app/page.module.css'
import { Box } from '@mui/material'
import Divider from './Divider'
import FormComp from './FormComp'
const DividerSection = ({title,secondTitle,service,text,imgUrl,idone,idsec}) => {
  return (
    <div style={{width:'100%'}}>
        <div className={styles.heroMain} id='bortforsling'>
    <Box>
                <img alt='bortforsling mäbler och grovsopor' src='https://img.freepik.com/free-vector/happy-family-moving-into-new-house-relocation_107791-16028.jpg?t=st=1731882752~exp=1731886352~hmac=b662565dc616c2cedeb1eb4d9500c2c00eb98e4b8220ea6cf3b3351f6c78d360&w=2000' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>Bortforsling</h4>
     <h2  className={styles.titeln}>Vi forslar bort möbler och grovsopor</h2>
     <p className={styles.textform}>
     Vi erbjuder snabb och smidig <a className={styles.lankar} href='/bortforsling-mobler-goteborg' title='bortforsling möblerr göteborg'>bortforsling av möbler</a> och grovsopor direkt från din bostad eller arbetsplats. Vårt erfarna team tar hand om allt från tunga möbler till skrymmande avfall och ser till att allt hanteras miljövänligt och enligt återvinningskrav. Vi sköter hela processen, så att du slipper tänka på transport och återvinning.
     </p>
     </Box>
       </Box>
     
     </div>
     <Divider text={'Du är i trygga händer - Vi är försäkrade'}/>
     <div className={styles.heroMain} id={idsec?idsec:'dodsbon'}>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>Dödsbon</h4>
     <h2 className={styles.titeln}>{title?title:'Köper, tömmer och städar dödsbon'}</h2>
     <p className={styles.textform}>
     Vi erbjuder professionell hantering av dödsbon, inklusive tömning, städning och försäljning av föremål. Vi <a className={styles.lankar} href='/kopa-dodsbo-goteborg' title='köper dödsbo göteborg'>köper upp dödsbon</a> och säljer vidare värdefulla objekt på ett effektivt sätt, samtidigt som vi ser till att tömma och städa bostaden. Vårt mål är att underlätta processen för anhöriga genom att ta hand om allt från värdering och bortforsling till slutstädning, med omtanke och respekt.
     </p>
     </Box>
       </Box>
       <Box>
                <img alt='dödsbon, tömma och köpa dödsbo' src='https://img.freepik.com/free-vector/creative-house-cross-section_23-2148670996.jpg?t=st=1731883207~exp=1731886807~hmac=ab51969fadfd9e9b274fb42d50b0e1dfa227b25ae36d4369a1365550b063db7d&w=1380' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
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

    <div style={{height:'40px'}}></div>
    <div className={styles.heroMain} id={idone?idone:'kontorsstad'}>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{service?service:'Kontorsstäd'}</h4>
     <h2 className={styles.titeln}>{secondTitle?secondTitle:'Skräddarsydd kontorsstädning!'}</h2>
     <p className={styles.textform}>
     {text?text:<>Vi erbjuder skräddarsydd <a className={styles.lankar} href='/kontorsstad-goteborg' title='kontorsstädning'>kontorsstädning</a> som passar just dina behov. Vårt erfarna team ser till att ditt kontor hålls rent, fräscht och inbjudande. Vi tar hand om allt från daglig städning till mer omfattande rengöring, och ser till att alla ytor, inklusive toaletter och kök, hålls i toppskick. Med vår flexibla tjänst kan vi anpassa städningen efter ditt kontors schema för minimal störning och maximal effektivitet.</>}
     </p>
     </Box>
       </Box>
       <Box>
                <img alt={secondTitle?secondTitle:'kontorrsstäd'} src={imgUrl?imgUrl:'https://img.freepik.com/free-vector/cleaning-service-concept-illustration_114360-9785.jpg?t=st=1731883402~exp=1731887002~hmac=b8794434e7b3012a084180f19d0868cfe0b1fa3bce2546fae5b562e94530f145&w=1800'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
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