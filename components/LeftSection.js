import styles from '../app/page.module.css'
import { Box } from '@mui/material'
import Divider from './Divider'
const LeftSection = () => {
  return (
    <div style={{marginTop:'25px',width:'100%'}}>
    <div className={styles.heroMain} id='stadning'>
    <Box>
                <img alt='städning' src='https://img.freepik.com/free-vector/cleaning-service-concept-illustration_114360-9852.jpg?t=st=1731531099~exp=1731534699~hmac=6ed2e54648f742a3382968c0c5e7d668bf11b7a637a2458250a5b0face96b63a&w=1800' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>Städning</h4>
     <h2  className={styles.titeln}>Vi utför alla typer av städningar</h2>
     <p className={styles.textform}>
     Tant Rut erbjuder en rad städtjänster som underlättar din vardag och skapar en trivsam miljö, oavsett behov. Vi hjälper dig med regelbunden <a className={styles.lankar} href='#hemstadning' title='hemstädning'>hemstädning</a>, professionell <a className={styles.lankar} href='#kontorsstadning' title='kontorsstädning'>kontorsstädning</a>, <a className={styles.lankar} href='#stadning-av-dodsbo' title='städning av dödsbon'>städning av dödsbon</a> och specialanpassade städningar. Vårt team arbetar noggrant och respektfullt, med fokus på kvalitet och kundens trygghet. Oavsett om du behöver städhjälp för hemmet, arbetsplatsen eller i en känslig situation, finns vi här för att skapa en ren och välordnad miljö. Tack vare RUT-avdraget kan vi erbjuda våra tjänster till ett förmånligt pris – så att du kan slappna av och lita på att städningen är i goda händer.
     </p>
     </Box>
       </Box>
     
     </div>
   <Divider text={'Utnyttja ditt RUT-avdrag 50%'}/>
     <div className={styles.heroMain} id='flytt'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>Flytt</h4>
     <h2 className={styles.titeln}>Smidig och Trygg Flytt</h2>
     <p className={styles.textform}>
     Flytten behöver inte vara stressig eller tidskrävande. Med Tant Rut får du professionell hjälp från start till mål. Vi hanterar packning, transport och uppackning med största omsorg, så att du kan fokusera på andra viktiga delar av din flytt. Oavsett om det gäller en liten lägenhet eller ett stort hus, ser vi till att allt går snabbt och smidigt. Med RUT-avdraget blir din flytt både enklare och mer prisvärd.
     </p>
     </Box>
       </Box>
       <Box>
                <img alt='flyttfirma' src='https://img.freepik.com/free-vector/moving-concept-illustration_114360-8292.jpg?t=st=1731537696~exp=1731541296~hmac=67d81f44920ef5a6eebd759148d358c050b7987eeeaa1f7c8a82f448e72b2cd3&w=1800' style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
     
     </div>
  )
}

export default LeftSection