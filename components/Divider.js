import React from 'react'
import styles from '../app/page.module.css'
const Divider = ({text}) => {
  return (
    <div style={{height:'200px',width:'100%',background:'#32de84',color:'black',margin:'20px 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h3 style={{fontSize:'1.7rem',lineHeight:'40pxs'}} className={styles.titeln}>{text}</h3>
    </div>
  )
}

export default Divider