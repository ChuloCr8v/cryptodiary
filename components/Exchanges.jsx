import styles from "../styles/Exchanges.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";
import { FaMapMarker, FaGlobe, FaChevronCircleDown } from "react-icons/fa";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState({});
  const [showDesc, setShowDesc] = useState("");
  const [number, setNumber] = useState(10);

  const desc = (index) => {
    if (showDesc === index) {
      return setShowDesc(null);
    }
    setShowDesc(index);
  };

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
        <div className={styles.exchanges_container}>
          {exchanges &&
            Object.values(exchanges)
              .map((exchange, index) => (
                <div
                  className={styles.exchange}
                  key={index}
                  onClick={() => desc(index)}
                >
                  <div className={styles.exchange_details}>
                    <div className={styles.exchange_brand}>
                      <img
                        src={`${baseUrl}${exchange.LogoUrl}`}
                        alt={exchange.Name}
                      />
                      <h3 className={styles.exchange_name}>{exchange.Name}</h3>
                    </div>
                    <FaChevronCircleDown className={styles.icon} />
                  </div>
                  <div
                    className={styles.description_container}
                    id={`${showDesc === index}` && styles.show_description}
                  >
                    <div className={styles.logo_container}>
                      <img
                        src={`${baseUrl}${exchange.LogoUrl}`}
                        alt={exchange.Name}
                      />
                      <h3 className={styles.name}>{exchange.Name}</h3>
                    </div>
                    <p className={styles.description}>{exchange.Description}</p>
                    <div className={styles.more_details}>
                      <div className={styles.trade_vol_container}>
                        <h3>BTC trade volume(24H) </h3>
                        <p className={styles.trade_vol}>
                          {Object.values(exchange.DISPLAYTOTALVOLUME24H).map(
                            (data) => data
                          )}{" "}
                        </p>
                      </div>
                      <div className={styles.address_container}>
                        <FaMapMarker className={styles.icon} />
                        <p className={styles.address}>
                          {exchange.FullAddress}{" "}
                        </p>
                      </div>
                      <div className={styles.link_container}>
                        <div className={styles.link}>
                          <FaGlobe className={styles.icon} />
                          <p>
                            Visit
                            <a href={`${baseUrl}${exchange.Url}`}>
                              {" "}
                              {exchange.Name}{" "}
                            </a>
                            To Know More!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, number)}

          <div className={styles.btn_container}>
            <button onClick={() => setNumber(number + 10)}>show more </button>
            <button
              onClick={() => {
                if (number === 10) {
                  return;
                }
                setNumber(number - 10);
              }}
            >
              show less
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
