import React from 'react'
import { render } from "react-dom";
import styles from './index.module.css'


const WhiteList = () => {
        return (
        <div className={styles["container-white-list"]}>
        <h2>Active IDO & Airdrops</h2>
        <div className={styles["box-white-list"]}>        

        <div className={styles["box-white-card"]}>
            <div className={styles["box-white-card-img"]}><a href="https://giv.gg/r/XhtvdM-MXoBdm" target="_blank"><img className={styles["white-list-img"]}  alt="Whitelist NFT metaverse WorkTown Whitelist" src="https://assets.givelab.com/img/gi/XhtvdM.jpg?v=1638472621"></img>  </a></div>
            <div className={styles["box-white-card-timer"]}><p>Ending in:  </p></div>
            <div className={styles["box-white-card-details"]}> WorkTown</div>
        </div>

            
            
        </div>
        </div>
    )
}

export default WhiteList