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

const cryptocurrency = (props) => {
  const [price, setprice] = useState([]);
  const [history, setHistory] = useState([]);

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
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1"
    );
    console.log(data);
    setHistory(data.prices);
  };

  useEffect(() => {
    fetchData();
    console.log(Date.parse(2022));
  }, []);

  const stats = [
    {
      title: "Price to USD",
      value: `${props.price && props.price}`,
      icon: <FaDollarSign />,
    },
    // {
    //   title: 'Rank',
    //   value: props.rank,
    //   icon: <NumberOutlined />
    // },
    {
      title: "24h Volume",
      value: `${props.dailyTradeVol && props.dailyTradeVol}`,
      icon: <FaFunnelDollar />,
    },
    {
      title: "Market Cap",
      value: `${props.mktCap && props.mktCap}`,
      icon: <FaChartPie />,
    },
    // {
    //   title: 'All-time-high(daily avg.)',
    //   value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
    //   icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    {
      title: "Total Supply",
      value: `${props.supply}`,
      icon: <FaExchangeAlt />,
    },
    {
      title: "Circulating Supply",
      value: `${props.circulatingSupply}`,
      icon: <FaInfoCircle />,
    },
    {
      title: "Circulating Supply Market Cap",
      value: `${props.circulatingSupplyMktCap}`,
      icon: <FaInfoCircle />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.crypto_detail_hero}>
        <div className={styles.crytpo_heading}>
          <h1>
            {props.name} ({props.slug}) Live Updates
          </h1>
          <h4>
            {props.name} price updates in USD, live statistics, market cap and
            supply.{" "}
          </h4>
        </div>
      </div>
      <div>
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
              console.log(t[0]);
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
      </div>
      <div className="statistics-container">
        <div className="currency-stat">
          <h2>{props.name} Live Update </h2>
          <h4>An overview of {props.slug} live statistics </h4>
          <div className="stat-list">
            {stats.map((stat) => (
              <div className="stat-item">
                <div className="stat-title">
                  <p>{stat.icon}</p>
                  <p>{stat.title}</p>
                </div>
                <p>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="all-currency-stat">
          <h2>All Cryptocurrencies Live Update </h2>
          <h4>An overview of all crypto live statistics </h4>
          <div className="stat-list">
            {genericStats.map((stat) => (
              <div className="stat-item">
                <div className="stat-title">
                  <p>{stat.icon}</p>
                  <p>{stat.title}</p>
                </div>
                <p>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default cryptocurrency;

export async function getServerSideProps(context) {
  console.log(context.query);
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
