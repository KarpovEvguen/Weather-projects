import React, { useState, useEffect } from "react";
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
  SearchBtn
} from "./Hero.styles";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

const Hero = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(new Date());
  const [error, setError] = useState("");

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

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();

      setWeather({
        name: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        timezone: data.timezone,
      });

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
      </Content>
    </HeroWrapper>
  );
};

export default Hero;