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
  };
};