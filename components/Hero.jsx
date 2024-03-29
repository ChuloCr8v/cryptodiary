import styles from "../styles/Hero.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  const [cryptoStats, setCryptoStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://cryptocompare.com";

  const fetchCryptos = async () => {
    const res = await axios.get(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=2&tsym=USD&api_key=38166a57a59b34576d1fe693d036865874b56413e766f798c444d7974e1786f8"
    );
    const data = res.data.Data;
    setLoading(true);
    setCryptoStats(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <section className={styles.hero}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_heading}  data-aos="fade-up" data-aos-delay="1300">
              {" "}
              Welcome To Crypto Wallstreet{" "}
            </h1>
            <p data-aos="fade-right" data-aos-delay="1500" className={styles.hero_subheading}>
              {" "}
              Get the latest Cryptocurrency update from the right source. Take a
              look at coin prices, historical chart, market data, list of
              exchanges and cryptocurrency news updates all in one place.
            </p>
          </div>
          <div className={styles.hero_stats}>
            {cryptoStats.map((coin, index) => (
              <div className={styles.coin} key={index}  data-aos="fade-up" data-aos-delay="1000">
                <div className={styles.coin_detail}>
                  <img
                    src={`${baseUrl}${coin.CoinInfo.ImageUrl}`}
                    height="100"
                    width="100"
                    alt={coin.CoinInfo.Name}
                    className={styles.icon}
                  />
                  <h1 className={styles.coin_name}>{coin.CoinInfo.Name}</h1>
                </div>
                <p className={styles.coin_price}>{coin.DISPLAY.USD.PRICE} </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
