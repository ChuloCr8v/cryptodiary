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

const LineChart = ({ chartPrice }) => {
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
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Price (USD)",
        data: chartPrice,
        fill: "+2",
        backgroundColor: "green",
        borderColor: "gold",
        pointBorderColor: "green",
        borderDash: [20, 5],
      },
    ],
  };

  const options = {
    scales: {
      yAxis: [
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
