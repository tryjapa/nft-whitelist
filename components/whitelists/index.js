import React from 'react'
import { render } from "react-dom";
import styles from './index.module.css'


const WhiteList = () => {
    const [counter, setCounter] = React.useState(71640);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
      function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay; 
    }
    return (
        <div className={styles["container-white-list"]}>
        
        <div className={styles["box-white-list"]}>
        <h2>Ending Soon... </h2>
            <a href="https://giv.gg/r/XhtvdM-MXoBdm" target="_blank"><img className={styles["white-list-img"]}  alt="Whitelist NFT metaverse WorkTown Whitelist" src="https://assets.givelab.com/img/gi/XhtvdM.jpg?v=1638472621"></img>  </a>
            <p>Ending in: {secondsToHms(counter)} </p>
        </div>
        </div>
    )
}

export default WhiteList