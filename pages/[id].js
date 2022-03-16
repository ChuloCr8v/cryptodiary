import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaDollarSign,
  FaFunnelDollar,
  FaChartPie,
  FaInfoCircle,
  FaExchangeAlt,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "../styles/CryptoDetail.module.scss";

//https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232

const Cryptocurrency = (props) => {
  const [loading, setLoading] = useState(true);
  const [price, setprice] = useState([]);
  const [history, setHistory] = useState([]);
  const [timeInterval, setTimeInterval] = useState("");
  const [timePeriod, setTimePeriod] = useState(1);

  const changePeriod = (e) => {
    setTimePeriod(e.target.value);
  };
  const changeInterval = (e) => {
    setTimeInterval(e.target.value);
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${timePeriod}&interval=${timeInterval}`
    );
    setLoading(true);
    setHistory(data.prices);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [timeInterval, timePeriod]);

  const intervalOptions = [
    {
      value: "minutely",
      label: "Minutes",
    },
    {
      value: "hourly",
      label: "Hour",
    },
    {
      value: "daily",
      label: "Daily",
    },
    {
      value: "monthly",
      label: "Monthly",
    },
  ];
  const periodOptions = [
    {
      value: 1,
      label: "Daily",
    },
    {
      value: 3,
      label: "3d",
    },
    {
      value: 7,
      label: "7d",
    },
    {
      value: 30,
      label: "30d",
    },
    {
      value: "365",
      label: "1y",
    },
  ];

  const stats = [
    {
      title: "Price (USD)",
      value: `${props.price && props.price}`,
      icon: <FaDollarSign className={styles.icon} />,
    },
    {
      title: "24h Volume",
      value: `${props.dailyTradeVol && props.dailyTradeVol}`,
      icon: <FaFunnelDollar className={styles.icon} />,
    },
    {
      title: "Market Cap",
      value: `${props.mktCap && props.mktCap}`,
      icon: <FaChartPie className={styles.icon} />,
    },
    {
      title: "Total Supply",
      value: `${props.supply}`,
      icon: <FaExchangeAlt className={styles.icon} />,
    },
    {
      title: "Circulating Supply",
      value: `${props.circulatingSupply}`,
      icon: <FaInfoCircle className={styles.icon} />,
    },
  ];

  return (
    <div className={styles.crypto_details}>
      <div className={styles.container}>
        <div className={styles.crypto_detail_hero}>
          <div className={styles.crytpo_heading_container}>
            <h1 className={styles.crypto_heading}>
              {props.name} ({props.slug}) Live Updates
            </h1>
            <h4 className={styles.crypto_subheading}>
              {props.name} price updates in USD, live statistics, market cap and
              supply.{" "}
            </h4>
          </div>
        </div>
        <div className={styles.chart}>
          {loading ? (
            "loadinf"
          ) : (
            <Line
              options={{
                scale: {
                  y: [
                    {
                      ticks: {
                        beginAtZero: false,
                      },
                    },
                  ],
                },
              }}
              data={{
                labels: history.map((t) => {
                  const data = new Date(t[0]).toLocaleDateString();
                  return data;
                }),
                datasets: [
                  {
                    label: "Price (USD)",
                    data: history.map((price) => price[1]),
                    fill: "+2",
                    backgroundColor: "green",
                    borderColor: "gold",
                    pointBorderColor: "green",
                  },
                ],
              }}
            />
          )}
          <div className={styles.select_container}>
            <div className={styles.select}>
              <p className={styles.select_title}>Days: </p>
              <select onChange={changePeriod} value={timePeriod}>
                {periodOptions.map((opt, index) => (
                  <option
                    className={styles.option}
                    value={opt.value}
                    key={index}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.select}>
              <p className={styles.select_title}>Time: </p>
              <select onChange={changeInterval} value={timeInterval}>
                {intervalOptions.map((opt, index) => (
                  <option
                    className={styles.option}
                    value={opt.value}
                    key={index}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.statistics_container}>
            <h2>{props.name} Live Update </h2>
            <div className={styles.stat_list}>
              {stats.map((stat, index) => (
                <div className={styles.stat_item} key={index}>
                  <div className={styles.stat_title}>
                    <div className={styles.icon_container}>{stat.icon}</div>
                    <p className={styles.title}>{stat.title}</p>
                  </div>
                  <p className={styles.value}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cryptocurrency;

export async function getServerSideProps(context) {
  return {
    props: {
      price: context.query.price,
      name: context.query.name,
      slug: context.query.slug,
      dailyTradeVol: context.query.dailyTradeVol,
      mktCap: context.query.mktCap,
      supply: context.query.supply,
      circulatingSupply: context.query.circulatingSupply,
      circulatingSupplyMktCap: context.query.circulatingSupplyMktCap,
    },
  };
}
