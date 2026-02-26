'use client'

import React,{useState} from 'react'
import { Button,FormControlLabel,Checkbox,Grid2,Box,TextField } from '@mui/material'
import styles from '../app/page.module.css'
import { useDispatch,useSelector } from 'react-redux'
import {dispatchService,dispatchEmail,dispatchDescription} from '../redux/features/formSlice'
import { useRouter } from 'next/navigation'
const FormComp = ({title,data}) => {
  const formData = useSelector((state)=> state.form)
  const dispatch = useDispatch()
  const router = useRouter()
  const [skickar, setSkickar] = useState(false)
  const [recived, setRecived] = useState(false)
const [formIsValid, setformIsValid] = useState(false)

const handleSendEmail = async () => {
  setSkickar(true);

  try {
    const resp = await fetch('/api/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailTo: formData?.email?.payload,
        description: formData?.description?.payload,
        service: formData?.service?.payload,
        honeypot: "" // bots fyller detta automatiskt
      }),
    });

    if (resp.ok) {
      setRecived(true);
      router.push('/bekraftelse')
    }
  } catch (e) {
    console.error(e);
  } finally {
    setSkickar(false);
  }
};

  const handleServiceChange = (e,title) =>{
 dispatch(dispatchService(title))
  }

  const handleEmailChange = (e) =>{
    dispatch(dispatchEmail(e.target.value))
  }

  const handleDescriptionChange = (e) =>{
    dispatch(dispatchDescription(e.target.value))
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
handleSendEmail()
  }

  return (
    <div style={{width:'100%',marginTop:'1rem',marginBottom:'1rem'}}>
    <form onSubmit={(e)=> e.preventDefault()} style={{display:'flex',flexDirection:'column',background:'#F8F8F8',width:'360px',padding:'1rem'}}>
    <h2  className={styles.titeln}>{title}</h2>
        <Grid2 container>
            {data?.map((el,i)=>(
                <Grid2   key={i} style={{border:'0.5px solid lightgray',padding:'0.5rem',margin:'0.3rem 0.3rem',display:'flex',justifyContent:'space-between',width:'170px',background:'white'}}>
                    <FormControlLabel control={<Checkbox name={el.title}/>} label={el.title} onChange={(e)=>handleServiceChange(e,el.title)}/>
                    <img src={el.img_url} alt={el.title} style={{width:'22px',padding:'0.3rem',marginRight:'0.5rem'}}/>
                </Grid2>
            ))}
        </Grid2>
        <TextField onChange={handleEmailChange} variant='outlined' type='email' placeholder='Din email' style={{background:'white'}}/>
        <textarea onChange={handleDescriptionChange} rows={5} style={{border:'0.5px solid lightgray',borderRadius:'4px',fontSize:'16px'}} placeholder='Beskriv vad du behöver hjälp med'></textarea>
        <input
  type="text"
  name="company"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
        <div className={styles.formvalidater}>
          <Checkbox onChange={()=> setformIsValid(true)}/>
          <p>Godkänn användarvillkor & integritetspolicy</p>
        </div>
        <Button onClick={(e)=>{
          if(formIsValid){
            handleSubmit(e)
          } else{
            alert('Godkänn användarvillkor och integritetspolicy')
          }
        }} type='submit' variant='contained' style={{background:'#32de84',color:'black',padding:'0.65rem'}}>{skickar?'skickar...':recived?'Tack för din förfrågan':'Be om offert'}</Button>
    </form>
    </div>
  )
}

export default FormComp

