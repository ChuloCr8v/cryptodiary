import styles from '../styles/Exchanges.module.scss' 
import {useState, useEffect} from 'react'
import axios from 'axios'

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([])
  
  useEffect(() => {
    const options = {
      method: 'GET', 
      url:'https://min-api.cryptocompare.com/data/exchanges/general'
    }
    
    axios.request(options).then((response) => {
      setExchanges(response.data.Data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  
  return(
    <div className={styles.exchanges}>
      <div className={styles.container}>
        <div className={styles.exchanges_container}>
            {exchanges.map((exchange) => (
              <h1>{exchange.Name}</h1>
            ))}
        </div>
      </div>
    </div>
    )
}

export default Exchanges