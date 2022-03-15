import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
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

//https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232

const cryptocurrency = () => {
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

  return (
    <div style={{ padding: 50 }}>
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
              //  borderDash: [20, 5],
            },
          ],
        }}
      />
    </div>
  );
};

export default cryptocurrency;

// export async function getServerSideProps(context) {
//   console.log(context.query);
//   return {
//     props: {
//       price: context.query.price,
//     },
//   };
// }

// axios
//   .get(
//     "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10"
//   )
//   .then(async (response) => {
//     const data = await response?.data?.Data?.Data;
//     const datas = data.map((data) => {
//       return data.time;
//     });
//     for (let i = 0; i < datas.length; i++) {
//       console.log(data[i].time);
//       time.push(data[i].high);
//     }
//     console.log(time);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
