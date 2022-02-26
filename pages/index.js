import React from 'react'
import styles from './index.module.css'
import WhiteList from '../components/whitelists'

function Home(){
    return          <div  className={`${styles.container}`}>
        <div className={`${styles.header}`}>
        <title>NFT World - Whitelist - Everything you can't miss about NFT, Metaverse, Blockchain and play to earn</title>
        <img className={`${styles.filters}`} src="/logo.png" alt="me" width="330" height="150" />
        <a className={`${styles.adsHeader}`} href="https://rollercoin.com/?r=ky9fzosj">
   <img src="//rollercoin.com/static/img/public_img/gen2/w728h90.gif"/> 
 </a> 
        </div>
        <div className={`${styles.navBar}`}>
          
            
            <div>Home</div>
            <div>IDO Whitelist</div>
            <div>Live Airdrops</div>
            <div>About us</div>
            <div>Partnerships</div>
            <div>Contact us</div>
            
        </div>
        <div className={`${styles.content}`}>
        <WhiteList></WhiteList>
        </div>
        <div className={`${styles.footer}`}></div>
        
       
  
  
</div>
 
}

export  default Home