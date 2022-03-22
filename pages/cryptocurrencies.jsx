import styles from "../styles/Stats.module.scss";
import Heading from "../components/Heading";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import millify from "millify";
import Link from "next/link";
import Loading from "../components/Loading";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Cryptocurrencies = () => {
  const [globalData, setGlobalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(10);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=${number}&page=1&sparkline=false`,
    };

    axios
      .request(options)
      .then(function (response) {
        setGlobalData(response.data);
        console.log(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [number]);

  return (
    <section className={styles.stats}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container} style={{ background: "transparent", backdropFilter: "blur(0)" }}>
          <Heading
            heading={"List Of cryptocurrencies"}
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
                    id: data.id,
                    price: data.current_price,
                    name: data.name,
                    slug: data.symbol,
                    ath: data.ath,
                    mktCap: data.market_cap,
                    supply: data.max_supply,
                    circulatingSupply: data.circulating_supply,
                  },
                }}
                key={data.id}
              >
                <a className={styles.stat_container} data-aos="fade-up">
                  <div className={styles.crypto_details}>
                    <div className={styles.name_container}>
                      <p className={styles.coin_alias}>{data.symbol}</p>
                      <h2>{data.name}</h2>
                    </div>
                    <img
                      src={data.image}
                      height="100"
                      width="100"
                      alt="logo"
                      className={styles.icon}
                    />
                  </div>
                  <div className={styles.stat}>
                    <p>
                      <span>Price: </span>
                      USD {data.current_price.toLocaleString()}
                    </p>
                    <p>
                      <span>Market Cap: </span>
                      USD {millify(data.market_cap.toLocaleString())}B
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className={styles.btn_container} data-aos="fade-up">
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
    </section>
  );
};

export default Cryptocurrencies;
