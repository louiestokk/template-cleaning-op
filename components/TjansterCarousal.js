import React from 'react'
import { Grid2,Box,Button} from '@mui/material'
import styles from '../app/page.module.css'
import {services} from '../content/tjanster'
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

