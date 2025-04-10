import React from 'react'
import styles from '../app/page.module.css'
import { Box } from '@mui/material'
import FormComp from './FormComp'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {orterVastraGotaland} from '../content/orter'
const FooterComp = () => {
  return (
    <footer style={{width:'100%'}} id='kontakt'>
         <div className={styles.heroMain} style={{background:'#32de84'}}>
         <Box>
                <Box>
                <Box style={{height:'10px'}}></Box>
                <Box className={styles.social}>
                <a className={styles.lank} href='/' title='twitter X Tant Rut'>
                <XIcon/>
                </a>
                <a className={styles.lank} href='/' title='twitter X Tant Rut'> 
                <FacebookIcon />
                </a>
                <a className={styles.lank} href='/' title='twitter X Tant Rut'>
                <YouTubeIcon />
                </a>
               
                
            
                </Box>
                <Box  className={styles.social}>
                <h4 className={styles.titeln}>Tant Rut Alltjänst</h4>
    <h1 className={styles.titeln}>Kontakta oss</h1>
    <p className={styles.textform}>Har du några frågor eller vill du få en kostnadsfri offert?</p>
    <p className={styles.textform}>Vi flyttar, städar och tömmer hushåll och dödsbon. Nyttja din rut när du använder våra tjänster!</p>
    <p style={{fontSize:'0.85rem'}} className={styles.textform}>Håkansgatan 3, 418 74 Göteborg</p>
    <p style={{fontSize:'0.85rem'}} className={styles.textform}>Bogesundsgatan 4, 523 48 Ulricehamn</p>
    <p style={{fontSize:'0.85rem',color:'black'}} className={styles.textform}>ORGNR 556469 5194</p>
                </Box>
    </Box>
    </Box>
     <Box>
        <FormComp data={varaTjanster} title={'Gör en kostnadsfri förfrågan!'}/>
      </Box>
  
    </div>
    <article className={styles.footerlinkseo}>
    <div className={styles.footldkah} style={{width:'100%'}}>
    <Box style={{height:'35px'}}></Box>
    <h2>Hemstäd</h2>
    <article style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center'}}>
    {orterVastraGotaland.map((el,i)=>(
        <a style={{margin:'0.25rem 0.25rem',color:'inherit'}}  key={i} href={`/hemstad/hemstad-${el.path}`} title={`hemstäd i ${el.title}`}>Hemstäd i {el.title}</a>
      ))}
    </article>
     
    </div>
    <div style={{width:'100%'}} className={styles.footldkah}>
    <Box style={{height:'35px'}}></Box>
    <h2>Flyttstäd</h2>
    <article style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center'}}>
    {orterVastraGotaland.map((el,i)=>(
        <a style={{margin:'0.25rem 0.25rem',color:'inherit'}}  key={i} href={`/flytt/flyttstad/flyttstad-${el.path}`} title={`flyttstäd i ${el.title}`}>Flyttstäd i {el.title}</a>
      ))}
    </article>
     
    </div>
    <div style={{width:'100%'}} className={styles.footldkah}>
    <Box style={{height:'35px'}}></Box>
    <h2>Kontorsstäd</h2>
    <article style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center'}}>
    {orterVastraGotaland.map((el,i)=>(
        <a style={{margin:'0.25rem 0.25rem',color:'inherit'}}  key={i} href={`/kontor/kontorsstad-${el.path}`} title={`kontorsstäd i ${el.title}`}>Kontorsstäd i {el.title}</a>
      ))}
    </article>
     
    </div>
    <div style={{width:'100%'}} className={styles.footldkah}>
    <Box style={{height:'35px'}}></Box>
    <h2>Bortforsling</h2>
    <article style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center'}}>
    {orterVastraGotaland.map((el,i)=>(
        <a style={{margin:'0.25rem 0.25rem',color:'inherit'}}  key={i} href={`/atervinning/bortforsling-${el.path}`} title={`bortforsling i ${el.title}`}>Bortforsling i {el.title}</a>
      ))}
    </article>
     
    </div>
    <div style={{width:'100%'}} className={styles.footldkah}>
    <Box style={{height:'35px'}}></Box>
    <h2>Flyttfirma</h2>
    <article style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center'}}>
    {orterVastraGotaland.map((el,i)=>(
        <a style={{margin:'0.25rem 0.25rem',color:'inherit'}}  key={i} href={`/flytthjalp/flyttfirma-${el.path}`} title={`foretagsflytt i ${el.title}`}>Flyttstäd i {el.title}</a>
      ))}
    </article>
     
    </div>
    </article>
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