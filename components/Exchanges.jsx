import styles from "../styles/Exchanges.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";
import {FaMapMarker} from 'react-icons/fa'

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
                  <div className={styles.exchange_details}>
                    <div className={styles.exchange_brand}>
                      <img
                        src={`${baseUrl}${exchange.LogoUrl}`}
                        alt={exchange.Name}
                      />
                      <h3 className={styles.exchange_name}>{exchange.Name}</h3>
                    </div>
                    <div className={styles.mkt_cap} >
                      <h3 className={styles.trade_vol}>BTC trade volume(24H) </h3>
                      <p className={styles.mkt_cap}>{Object.values(exchange.DISPLAYTOTALVOLUME24H).map(data => data)} </p>
                    </div>
                  </div>
                  <div className={styles.description_container}>
                    <p className={styles.description}>{exchange.Description}</p>
                    <div className={styles.address_container}>
                      <FaMapMarker className={styles.icon} />
                      <p className={styles.address}>{exchange.FullAddress} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
            .slice(0, 20)}
      </div>
    </div>
  );
};

export default Exchanges;
