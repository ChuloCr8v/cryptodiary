import styles from '../styles/GlobalData.module.scss' 
import Heading from './Heading'
import axios from 'axios'
import {useState, useEffect} from 'react'
import millify from 'millify'
//import {FaCoin} from 'react-icons/fa'
const GlobalData  = () => {
  
  const [globalData, setGlobalData] = useState([])
  
  useEffect(() => {
    const options = {
      method: 'GET', 
      url: 'https://api.coinlore.net/api/global/', 
    }
    
    axios.request(options).then((response) => {
      if(response === null) {
        alert(444)
      }
      setGlobalData(response.data)
    }).catch((error) => {
      console.log(error)
    })
    
  })
  
  return(
    <div className={styles.global_data}>
      <div className={styles.container}>
        <Heading heading={'Global Cryptocurrency Data'} subtitle={'A sneak peak into the current global cryptocurrency statistics.'} />
        <div className={styles.cards_container}>
          {globalData.map((data) => (
            <div className={styles.card}>
              <div className={styles.stat}>
            {/*  <FaCoin className={styles.icon} />*/} 
                <p><span>Total Cryptocurrencies </span>{data.coins_count}</p>
              </div>
              <div className={styles.stat}>
                <p><span>Total Market Cap: </span>USD{millify(data.total_mcap)}</p>
              </div>
              <div className={styles.stat}>
                <p><span>Active Markets: </span>{data.active_markets}</p>
              </div>
              <div className={styles.stat}>
                <p><span>Total Volume Traded:</span> USD{millify(data.total_volume)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default GlobalData