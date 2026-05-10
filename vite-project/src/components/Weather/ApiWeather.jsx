const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export const getWeatherByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  const data = await res.json();

  return {
    name: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    timezone: data.timezone,
    lat: data.coord.lat,     
    lon: data.coord.lon,     
  };
};

export const get7DaysForecast = async (lat, lon) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
  );

  if (!res.ok) {
    throw new Error("Forecast error");
  }

  const data = await res.json();
  return data.daily;
};