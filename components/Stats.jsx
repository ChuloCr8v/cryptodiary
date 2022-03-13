import styles from "../styles/Stats.module.scss";
import Heading from "./Heading";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import millify from "millify";
import Link from "next/link";

const Stats = () => {
  const [globalData, setGlobalData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key={38166a57a59b34576d1fe693d036865874b56413e766f798c444d7974e1786f8} ",
    };

    axios
      .request(options)
      .then(function (response) {
        if (!response) {
          console.log("empty");
        }
        setInterval(setGlobalData(response.data.Data), 1000);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const baseUrl = "https://cryptocompare.com";

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <Heading
          heading={"Top Grossing Coins"}
          subtitle={
            "Observe the updated cryptocurrency statistics right on the spot"
          }
        />
        <div className={styles.stats_container}>
          {globalData.map((data) => (
            <Link
              href={{
                pathname: "/[id]",
                query: {
                  id: data.CoinInfo.Id,
                  price: data.RAW.USD.PRICE,
                },
              }}
              key={data.CoinInfo.Id}
            >
              <div className={styles.stat_container}>
                <div className={styles.crypto_details}>
                  <div className={styles.name_container}>
                    <p className={styles.coin_alias}>{data.CoinInfo.Name}</p>
                    <h2>{data.CoinInfo.FullName}</h2>
                  </div>
                  <img
                    src={`${baseUrl}${data.CoinInfo.ImageUrl}`}
                    height="100"
                    width="100"
                    alt="logo"
                    className={styles.icon}
                  />
                </div>
                <div className={styles.stat}>
                  <p>
                    <span>Price: </span>
                    {data.DISPLAY.USD.PRICE.toLocaleString()}
                  </p>
                  <p>
                    <span>Market Cap: </span>
                    {data.DISPLAY.USD.MKTCAP.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

//May use for later
{
  /* <div className={styles.stats_container}>
          <div className={styles.stat_container}>
            <div className={styles.icon}>
              <FaBitcoin />
            </div>
            <div className={styles.stat}>
              <p>Total Cryptocurrencies</p>
              <h2>7600</h2>
            </div>
          </div>
          <div className={styles.stat_container}>
            <div className={styles.icon}>
              <FaBitcoin />
            </div>
            <div className={styles.stat}>
              <p>Total Exchanges</p>
              <h2>670</h2>
            </div>
          </div>
          <div className={styles.stat_container}>
            <div className={styles.icon}>
              <FaBitcoin />
            </div>
            <div className={styles.stat}>
              <p>Market Cap</p>
              <h2>500B</h2>
            </div>
          </div>
          <div className={styles.stat_container}>
            <div className={styles.icon}>
              <FaBitcoin />
            </div>
            <div className={styles.stat}>
              <p>Trade Volume</p>
              <h2>118B</h2>
            </div>
          </div>
        </div> */
}
