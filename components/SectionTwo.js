import React from 'react'
import styles from '../app/page.module.css'
import { Box } from '@mui/material'
import Divider from './Divider'
const SectionTwo = () => {
  return (
    <div style={{marginTop:'25px',width:'100%'}}>
    <div className={styles.heroMain} id={'hemstad'}>
    <Box>
                <img alt={'hemstäd'} src={'https://img.freepik.com/premium-vector/cleaning-company-service-concept-male-character-washing-sweeping-mopping-floor-with-professional-vacuum-cleaner-man-wash-room-hotel-janitor-occupation-cartoon-people-vector-illustration_1016-7031.jpg?w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Hemstäd'}</h4>
     <h2  className={styles.titeln}>{'Tant Ruts Hemstädning'}</h2>
     <p className={styles.textform}>
     Låt oss hjälpa dig skapa en ren och trivsam hemmiljö med vår professionella hemstädning i Göteborg. Vi erbjuder en flexibel och noggrann städtjänst som anpassas efter dina behov och önskemål. Våra erfarna städare tar hand om allt från dammsugning och golvvård till kök- och badrumsrengöring, så att du kan komma hem till ett skinande rent hem – varje gång. Med våra pålitliga tjänster sparar du tid och energi, och får en lugnare vardag där du kan fokusera på det som betyder mest. Boka din hemstädning idag och upplev skillnaden med professionell hjälp!
     </p>
     </Box>
       </Box>
     
     </div>
   <Divider text={'Bästa & Billigast på hushållsnära tjänster'}/>
     <div className={styles.heroMain} id='byggstad'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Byggstäd'}</h4>
     <h2 className={styles.titeln}>{'Byggstäd i Göteborg med omnejd '}</h2>
     <p className={styles.textform}>
     Efter ett byggprojekt är det ofta damm, byggrester och smuts som behöver tas om hand innan lokalen är redo att användas. Med vår professionella byggstädning ser vi till att arbetsplatsen blir skinande ren och helt fri från byggdamm och avfall. Vi hanterar allt från grovstädning av byggrester och sopning till noggrann rengöring av ytor, fönsterputs och borttagning av damm från väggar och golv. Vårt team arbetar snabbt och effektivt för att färdigställa byggstädningen i tid, så att du kan överlämna en ren och säker miljö till kunder eller nästa steg i projektet
     </p>
     </Box>
       </Box>
       <Box>
                <img alt={'byggstäd'} src={'https://img.freepik.com/free-vector/builders-helmets-working-construction-site-machine-building-worker-flat-vector-illustration-engineering-development_74855-8259.jpg?t=st=1731790095~exp=1731793695~hmac=3c083af2716e9edaf01bafb7e8cd80ab2a18dc1b5b76c30f79efe55cdcf6c5f3&w=2000'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
     <div className={styles.heroMain} id={'hemstad'}>
    <Box>
                <img alt={'kontorssätdning'} src={'https://img.freepik.com/free-vector/professional-janitors-working-office-isolated-flat-vector-illustration-cartoon-cleaning-team-washing-holding-stuff-removing-dust-using-vacuum-cleaner_74855-8544.jpg?t=st=1731790380~exp=1731793980~hmac=2b062d71dd3e8344566e188eb727ea6bb4f0cae0be0bfae20c35214cb2b0defb&w=2000'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}} id='kontorsstad'></Box>
                 <h4 className={styles.titeln}>{'Kontorsstäd'}</h4>
     <h2  className={styles.titeln}>{'Kontorsstädning'}</h2>
     <p className={styles.textform}>
     Ge ditt team en ren och inspirerande arbetsplats med vår professionella kontorsstädning. Vi erbjuder noggrant anpassade städtjänster för kontor i alla storlekar och branscher, där vi tar hand om allt från dammtorkning av ytor och rengöring av gemensamma utrymmen till tömning av papperskorgar och golvvård. En ren arbetsmiljö förbättrar både trivsel och produktivitet, och vi ser till att allt från skrivbord till kök och toaletter alltid är i bästa skick. 
     </p>
     </Box>
       </Box>
     
     </div>
     </div>
  )
}

export default SectionTwo