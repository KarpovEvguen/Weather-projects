import React from "react";
import { Wrapper, Row } from "./WeaklyForecast.styled"

const WeeklyForecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  const daily = forecast.filter((item, index) => index % 8 === 0).slice(0, 3);

  return (
    <Wrapper>
      {daily.map((item, i) => {
        const date = new Date(item.dt * 1000);

        return (
          <Row key={i}>
            <span>
              {date.toLocaleDateString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short"
              })}
            </span>

            <span>
              {Math.round(item.main.temp_max)}°
              /{Math.round(item.main.temp_min)}°
            </span>

            <span>{item.weather[0].description}</span>
          </Row>
        );
      })}
    </Wrapper>
  );
};

export default WeeklyForecast;