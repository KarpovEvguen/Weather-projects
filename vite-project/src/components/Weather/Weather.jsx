import React from "react";
import {
  Card,
  Header,
  City,
  Country,
  Time,
  Temp,
  Description,
  Icon
} from "./Weather.styles";

const WeatherCard = ({ weather, time }) => {
  if (!weather) return null;

  const getCityTime = () => {
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    return new Date(utc + weather.timezone * 1000);
  };

  const cityTime = getCityTime();

  return (
    <Card>
      <Header>
        <City>{weather.name}</City>
        <Country>{weather.country}</Country>
      </Header>

      <Time>
        {cityTime.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit"
        })}
      </Time>

      {/* <Icon
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt=""
      /> */}

      <Temp>{weather.temp}°C</Temp>

      <Description>{weather.description}</Description>
    </Card>
  );
};

export default WeatherCard;