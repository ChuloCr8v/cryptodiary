import styles from "../styles/Exchanges.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState({});

  const baseUrl = `https://cryptocompare.com`;

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://min-api.cryptocompare.com/data/exchanges/general",
    };

    axios
      .request(options)
      .then((response) => {
        const data = response.data.Data;
        setExchanges(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.exchanges}>
      <div className={styles.container} style={{ color: "black" }}>
        <Heading
          heading={"Exchanges"}
          subtitle={
            "Cryptocurrency exchanges and all you need to know about them"
          }
        />
        {exchanges &&
          Object.values(exchanges)
            .map((exchange) => (
              <div className={styles.exchanges_container}>
                <div className={styles.exchange}>
                  <h3 className={styles.exchange_name}>{exchange.Name}</h3>
                  <img
                    src={`${baseUrl}${exchange.LogoUrl}`}
                    alt={exchange.Name}
                  />
                </div>
              </div>
            ))
            .slice(0, 20)}
      </div>
    </div>
  );
};

export default Exchanges;
