import React from "react";
import LineChart from "../components/LineChart";
import { useEffect } from "react";

const cryptocurrency = (props) => {
  const chartPrice = [];

  for (let index = 0; index < props.price.length; index++) {
    chartPrice.push(props.price);
    console.log(chartPrice);
  }

  useEffect(() => {}, []);

  return <LineChart chartPrice={chartPrice} />;
};

export async function getServerSideProps(context) {
  console.log(context.query);
  return {
    props: {
      price: context.query.price,
    },
  };
}

export default cryptocurrency;
