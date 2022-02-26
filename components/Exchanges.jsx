import styles from "../styles/Exchanges.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://min-api.cryptocompare.com/data/exchanges/general",
    };

    axios
      .request(options)
      .then((response) => {
        const data = response.data.Data;
        //   console.log(data);
        console.log(data[i].Name);
       for (const entry of Object.entries(data)) {
         // return entry[1]
          const result = [entry[1]];
          setExchanges(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
          console.log(exchanges )
  }, []);

  return (
    <div className={styles.exchanges}>
      <div className={styles.container}>
        <div className={styles.exchanges_container}>
          {exchanges.map((exchange) => (
            <h1>{exchange.Name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
