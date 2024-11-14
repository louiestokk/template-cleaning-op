'use client'
import React from 'react'
import { Button,FormControlLabel,Checkbox,Grid2,Box,TextField } from '@mui/material'
import styles from '../app/page.module.css'
const FormComp = ({title,data}) => {
  return (
    <div style={{width:'100%',marginTop:'1rem',marginBottom:'1rem',marginRight:'1rem'}}>
    <form style={{display:'flex',flexDirection:'column',background:'#F8F8F8',width:'360px',padding:'1rem'}}>
    <h2  className={styles.titeln}>{title}</h2>
        <Grid2 container>
            {data?.map((el,i)=>(
                <Grid2   key={i} style={{border:'0.5px solid lightgray',padding:'0.5rem',margin:'0.3rem 0.3rem',display:'flex',justifyContent:'space-between',width:'170px',background:'white'}}>
                    <FormControlLabel control={<Checkbox name={el.title}/>} label={el.title}/>
                    <img src={el.img_url} alt={el.title} style={{width:'22px',padding:'0.3rem',marginRight:'0.5rem'}}/>
                </Grid2>
            ))}
        </Grid2>
        <TextField variant='outlined' type='email' placeholder='Diin email' style={{background:'white'}}/>
        <textarea rows={3} style={{border:'0.5px solid lightgray',borderRadius:'4px',fontSize:'16px'}} placeholder='Beskriv vad du behöver hjälp med'></textarea>
        <Button variant='contained' style={{background:'#32de84',color:'black',padding:'0.65rem'}}>Be om offert</Button>
    </form>
    </div>
  )
}

export default FormComp

