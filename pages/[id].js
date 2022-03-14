import React from "react";
import LineChart from "../components/LineChart";
import { useEffect } from "react";
import axios from "axios";

const cryptocurrency = (props) => {
  const chartPrice = [30, 40];
  const tie = [222];

  const fetch = async () => {
    try {
      const res = await axios.get(
        "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10"
      );

      const data = res?.data?.Data?.Data;
      const da = data.map((d) => {
        const { time } = d;
        return time;
      });
      const cp = data.map((d) => {
        const { high } = d;
        return high;
      });

      for (let i = 0; i < da.length; i++) {
        console.log(da[i]);
        tie.push(da[i]);
      }
      for (let i = 0; i < cp.length; i++) {
        console.log(cp[i]);
        chartPrice.push(cp[i]);
      }
      console.log(tie);
    } catch (error) {
      console.log(error);
    }
  };

  fetch();

  return (
    <div style={{ padding: 50 }}>
      <LineChart chartPrice={chartPrice} time={tie} />
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
