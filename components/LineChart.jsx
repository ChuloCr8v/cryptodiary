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
import { Line } from "react-chartjs-2";

const LineChart = ({ chartPrice, time }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: chartPrice,
    datasets: [
      {
        label: "Price (USD)",
        data: time,
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

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
