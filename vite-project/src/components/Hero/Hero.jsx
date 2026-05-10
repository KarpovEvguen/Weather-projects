import React, { useState, useEffect } from "react";
import { getWeatherByCity, get7DaysForecast } from "../Weather/ApiWeather";
import CharacteristicWeather from "../WeatherDetails/CharacteristicWeather";
import {
  HeroWrapper,
  Overlay,
  Content,
  Title,
  Row,
  Text,
  Divider,
  Date_p,
  Search,
  Input,
  SearchBtn,
  WeatherInfo,
  CityName,
  Temperature,
  Description,
  WeatherIcon
} from "./Hero.styles";

const Hero = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [time, setTime] = useState(new Date());
  const [error, setError] = useState("");

  const weatherCodes = {
    0: "☀️",
    1: "🌤️",
    2: "⛅",
    3: "☁️",
    45: "🌫️",
    61: "🌧️",
    71: "❄️",
    80: "🌦️",
    95: "⛈️"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      setError("");
      const data = await getWeatherByCity(city);
      setWeather(data);

      const daily = await get7DaysForecast(data.lat, data.lon);
      setForecast(daily);

    } catch (err) {
      setWeather(null);
      setError("City not found");
    }
  };

  const getCityTime = () => {
    if (!weather?.timezone) return time;

    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    return new Date(utc + weather.timezone * 1000);
  };

  const formatTime = (date) =>
    date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatMonthYear = (date) =>
    date.toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    });

  const formatDay = (date) =>
    date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
    });

  return (
    <HeroWrapper>
      <Overlay />

      <Content>
        <Title>Weather dashboard</Title>

        <Row>
          <Text>
            Create your personal list of favorite cities and always be aware of the weather.
          </Text>

          <Divider />

          <Date_p>
            {weather ? (
              <>
                {formatTime(getCityTime())}
                <br />
                {formatMonthYear(getCityTime())}
                <br />
                {formatDay(getCityTime())}
              </>
            ) : (
              <>
                October 2023 <br />
                Friday, 13th
              </>
            )}
          </Date_p>
        </Row>

        <Search>
          <Input
            placeholder="Search location..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <SearchBtn onClick={handleSearch}>
            Search
          </SearchBtn>
        </Search>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}

        {weather && (
          <WeatherInfo>
            {forecast && (
              <div style={{ marginTop: "30px", color: "white" }}>
                {forecast.time.map((day, i) => (
                  <div key={i}>
                    {new Date(day).toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "numeric",
                      month: "short"
                    })} —
                    {Math.round(forecast.temperature_2m_max[i])}° /
                    {Math.round(forecast.temperature_2m_min[i])}°
                    {weatherCodes[forecast.weathercode[i]]}
                  </div>
                ))}
              </div>
            )}
            <CityName>{weather.name}, {weather.country}</CityName>
            <WeatherIcon
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
            />
            <Temperature>{weather.temp}°C</Temperature>
            <Description>{weather.description}</Description>
          </WeatherInfo>
        )}
         {weather && forecast && (
        <CharacteristicWeather 
          weather={weather}
          forecast={forecast}
        />
      )}

      </Content>
    </HeroWrapper>
  );
};

export default Hero;