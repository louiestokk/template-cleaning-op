import React from 'react'
import { Grid2,Box,Button} from '@mui/material'
import styles from '../app/page.module.css'
const TjansterCarousal = () => {
  return (
    <div style={{background:'#32de84',height:'620px',width:'100%'}}>
      <h2 style={{textAlign:'center',padding:'1.5rem'}} className={styles.titeln}>Våra tjänster</h2>
        <div style={{display:'flex',overflowX:'scroll',width:'90%',margin:'0 auto'}}>
            {services.map((el,i)=>(
                <div key={i}>
                <Box className={styles.tjansterRoot}>
                <a href={el.path} style={{color:'inherit',textDecoration:'none'}}>
                <img src={el.image} alt={el.service} style={{width:'200px',height:'125px'}}/>
                <h4 className={styles.titeln}>{el.service}</h4>
                <p style={{fontSize:'0.87rem',padding:'0.65rem',lineHeight:'22px'}}  className={styles.textform}>{el.text}</p>
                <Button style={{background:'#32de84',color:'black'}} variant='contained'>Be om offert</Button>
                </a>
                </Box>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TjansterCarousal

const services = [
    {
        service:'Städning',
        path:'#stadning',
        image:'https://img.freepik.com/free-vector/cleaning-team-with-brooms-vacuum-cleaner-man-woman-uniform-with-professional-equipment-ready-work-together-flat-vector-illustration-cleaning-service-teamwork-occupation-concept_74855-24396.jpg?t=st=1731534368~exp=1731537968~hmac=e9e1fa2e70f3c196ef98bf5a4f5c62d446a915625b9d46b53643da290b52d42d&w=1800',
        text:'Låt oss ta hand om din städning! Vi erbjuder allt från regelbunden hemstädning till storstädning och flyttstädning – alltid med noggrannhet och omtanke. Med RUT-avdraget får du professionell hjälp till ett förmånligt pris, så att du kan njuta av ett skinande rent hem utan stress.'
    },
    {
        service:'Flytt',
        path:'#flytt',
        image:'https://img.freepik.com/free-vector/flat-design-house-moving-concept-with-truck_23-2148665508.jpg?t=st=1731534391~exp=1731537991~hmac=8c81718ac784117533910e43b2f0322fc33935244d2aba4b42d87fcdde169d39&w=1800',
        text:'Vi hjälper dig genom hela flytten! Från packning och transport till uppackning – Tant Rut ser till att din flytt blir smidig och säker. Med oss kan du slappna av och känna dig trygg, och med RUT-avdraget blir det dessutom mer prisvärt.'
    },
    {
        service:'Bortforsling',
        path:'#bortforsling',
        image:'https://img.freepik.com/premium-vector/moving-house-woman-packing-stuff-move-new-house-apartment-men-carrying-sofa-cardboard-box-illustration_333239-156.jpg?w=1380',
        text:'Behöver du hjälp med att tömma och forsla bort gammalt bohag eller annat som inte längre behövs? Tant Rut erbjuder pålitlig bortforsling av möbler, skräp och dödsbon, med omtanke och respekt för både miljö och hem. Med RUT-avdraget blir det enklare och billigare för dig att få en nystart.'
    },
    {
        service:'Dödsbon',
        path:'#dodsbo',
        image:'https://img.freepik.com/free-vector/repair-construction-works-father-son-man-boy-holding-fix-tools-standing-near-family-house-flat-vector-illustration-renovation-concept-banner-website-design-landing-web-page_74855-23155.jpg?t=st=1731534605~exp=1731538205~hmac=7ec967a871315c35c329ab11433da30fe1e87911705dae1b75df18b3fb815a0f&w=1380',
        text:'Vi på Tant Rut erbjuder ett komplett stöd vid hantering av dödsbon – vi hjälper dig att tömma, städa, värdera och köpa upp hela eller delar av bohaget. Vårt team bemöter varje uppdrag med stor respekt och känslighet för situationen, och med RUT-avdraget kan vi erbjuda en kostnadseffektiv lösning.'
    },
    {
        service:'Kontorsstäd',
        path:'#kontorsstad',
        image:'https://img.freepik.com/free-vector/woman-working-office-industrial-alpinist-cleaning-window_778687-1239.jpg?t=st=1731534663~exp=1731538263~hmac=3480bf6628b2eb3805120287834c5870809873d0a2c9b4f1c5b792552c8cd3a6&w=1800',
        text:'Ett rent och välstädat kontor gör stor skillnad för både trivsel och produktivitet. Tant Rut erbjuder professionell kontorsstädning anpassad efter era behov och arbetstider. Vi ser till att skapa en fräsch och inbjudande arbetsmiljö, så att ni kan fokusera på ert arbete.'
    }
]