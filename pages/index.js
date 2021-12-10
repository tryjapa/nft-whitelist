import React from 'react'
import styles from './index.module.css'
import WhiteList from '../components/whitelists'

function Home(){
    return     <div  className={`${styles.waveWrapper} ${styles.waveAnimation}`}>
        <h1 className={styles["text-floating-h1"]}> NFT - Whitelist</h1>
        <h2 className={styles["text-floating-h2"]}> Never miss a whitelist again</h2>
        <WhiteList></WhiteList>
  <div  className={`${styles.waveWrapperInner} ${styles.bgTop}`}>
    <div  className={`${styles.wave} ${styles.waveTop}`} ></div>
  </div>
  <div className={`${styles.wave} ${styles.waveTop}`} >
    <div className={`${styles.wave} ${styles.waveTop}`}></div>
  </div>
  <div className={`${styles.waveWrapperInner} ${styles.bgBottom}`}>
    <div className={`${styles.wave} ${styles.waveBottom}`} ></div>
  </div>
</div>
 
}

export  default Home