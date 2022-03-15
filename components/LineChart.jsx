{
  /*import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

const LineChart = ({ chartPrice, time }) => {
  const [tiime, setTiime] = useState("");

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const getTime = async () => {
    const data = await time;
    console.log(data);
    setTiime(data);
  };

  getTime();

  const data = {
    labels: chartPrice,
    datasets: [
      {
        label: "Price (USD)",
        data: getTime,
        fill: "+2",
        backgroundColor: "green",
        borderColor: "gold",
        pointBorderColor: "green",
        borderDash: [20, 5],
      },
    ],
  };

  const options = {
    scale: {
      y: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  useEffect(() => {
    console.log(tiime);
  }, []);

  return (
    <div>{time !== null ? <Line options={options} data={data} /> : ""}</div>
  );
};

export default LineChart;

*/
}
