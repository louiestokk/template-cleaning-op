import styles from '../app/page.module.css'
import { Box } from '@mui/material'
import Divider from './Divider'
const LeftSection = ({title,text,imgUrl,service,bannerText,titlesecond,servicesec,textsecond,imgUrlsec,idtwo}) => {
  return (
    <div style={{marginTop:'25px',width:'100%'}}>
    <div className={styles.heroMain} id={idtwo?idtwo:'stadning'}>
    <Box>
                <img alt={title?title:'städning'} src={imgUrl?imgUrl:'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{service?service:'Städning'}</h4>
     <h2  className={styles.titeln}>{title?title:'Vi utför alla typer av städningar'}</h2>
     <p className={styles.textform}>
    {text?text:<>     Tant Rut erbjuder en rad städtjänster som underlättar din vardag och skapar en trivsam miljö, oavsett behov. Vi hjälper dig med regelbunden <a className={styles.lankar} href='#hemstadning' title='hemstädning'>hemstädning</a>, professionell <a className={styles.lankar} href='#kontorsstadning' title='kontorsstädning'>kontorsstädning</a>, <a className={styles.lankar} href='#stadning-av-dodsbo' title='städning av dödsbon'>städning av dödsbon</a> och specialanpassade städningar. Vårt team arbetar noggrant och respektfullt, med fokus på kvalitet och kundens trygghet. Oavsett om du behöver städhjälp för hemmet, arbetsplatsen eller i en känslig situation, finns vi här för att skapa en ren och välordnad miljö. Tack vare RUT-avdraget kan vi erbjuda våra tjänster till ett förmånligt pris – så att du kan slappna av och lita på att städningen är i goda händer.</>}
     </p>
     </Box>
       </Box>
     
     </div>
   <Divider text={bannerText?bannerText:'Utnyttja ditt RUT-avdrag 50%'}/>
     <div className={styles.heroMain} id='flytt'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{servicesec?servicesec:'Flytt'}</h4>
     <h2 className={styles.titeln}>{titlesecond?titlesecond:'Smidig och Trygg Flytt'}</h2>
     <p className={styles.textform}>
  {textsecond?textsecond : <>Flytten behöver inte vara stressig eller tidskrävande. Med Tant Rut får du professionell hjälp från start till mål. Vi hanterar packning, transport och uppackning med största omsorg, så att du kan fokusera på andra viktiga delar av din <a className={styles.lankar} href='/flyttfirma-goteborg' title='flyttfirma göteborg'>flytt</a>. Oavsett om det gäller en liten lägenhet eller ett stort hus, ser vi till att allt går snabbt och smidigt. Med RUT-avdraget blir din flytt både enklare och mer prisvärd.</>}
     </p>
     </Box>
       </Box>
       <Box>
                <img alt={titlesecond?titlesecond:'Flyttfirma'} src={imgUrlsec?imgUrlsec:'https://images.pexels.com/photos/271711/pexels-photo-271711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
     
     </div>
  )
}

export default LeftSection