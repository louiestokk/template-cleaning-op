import React from 'react'
import {sidor} from '../../content/sidorna'
import HeaderComp from '../../components/HeaderComp'
import FooterComp from '../../components/FooterComp'
const Bekraftalse = () => {
  return (
    <div>
        <HeaderComp sidor={sidor}/>
        <div style={{height:'50px'}}></div>
        <div style={{width:'100%',textAlign:'center'}}>
<h1 style={{fontFamily:'Georgia,sans-serif',lineHeight:'44px',marginBottom:'0.5rem'}}>Tack för din förfrågan!</h1>
        <p style={{fontFamily:'Circular,system-ui,sans-serif',padding:'1rem',lineHeight:'24px'}}>Vi kommer snart att kontakt dig per email och förse er med offert.</p>
        </div>
         <div style={{height:'80px'}}></div>
        <FooterComp/>
    </div>
  )
}

export default Bekraftalse