import styles from "../styles/Stats.module.scss";
import Heading from "../components/Heading";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import millify from "millify";
import Link from "next/link";
import Loading from '../components/Loading'
const cryptocurrencies = () => {
  const [globalData, setGlobalData] = useState([]);
  const [loading, setLoading] = useState(true)
 const [number, setNumber] = useState(10);
   
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key={38166a57a59b34576d1fe693d036865874b56413e766f798c444d7974e1786f8} ",
    };

    axios
      .request(options)
      .then(function (response) {
          setGlobalData(response.data.Data);
          setLoading(false)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const baseUrl = "https://cryptocompare.com";

  useEffect(() => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=GBP&limit=${number}`
      )
      .then((response) => {
        const data = response.Data.Data.time;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={styles.stats}>
     {loading ? <Loading /> : <div className={styles.container}>
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
                  name: data.CoinInfo.FullName,
                  slug: data.CoinInfo.Name,
                  dailyTradeVol: data.DISPLAY.USD.VOLUMEDAY,
                  mktCap: data.DISPLAY.USD.MKTCAP,
                  supply: data.DISPLAY.USD.SUPPLY,
                  circulatingSupply: data.DISPLAY.USD.CIRCULATINGSUPPLY,
                  circulatingSupplyMktCap:
                    data.DISPLAY.USD.CIRCULATINGSUPPLYMKTCAP,
                },
              }}
              key={data.CoinInfo.Id}
            >
                <a className={styles.stat_container}>
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
                </a>
            </Link>
          ))}
          
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
      </div> } 
    </section>
  );
};

export default cryptocurrencies;
