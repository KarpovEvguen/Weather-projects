import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Wrapper, Title } from "./HourlyChart.styles";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const HourlyChart = () => {
  const data = {
    labels: ["1pm","2pm","3pm","4pm","5pm","6pm"],
    datasets: [
      {
        data: [14, 12, 10, 11, 13, 16],
        borderColor: "orange",
        tension: 0.4
      }
    ]
  };

  return (
    <Wrapper>
      <Title>Hourly forecast</Title>
      <Line data={data} />
    </Wrapper>
  );
};

export default HourlyChart;