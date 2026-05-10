import {
    Section,
    Text,
    Title,
    TitleMax
  } from './CharacteristicWeather.styled'
  
  export default function CharacteristicWeather({ weather, forecast }) {
  
    const visibilityCharacteristic = () => {
      if (!weather.visibility) return 'Unknown'
  
      const km = weather.visibility / 1000
  
      if (km >= 10) return 'Clear'
      if (km >= 5) return 'Good'
      if (km >= 2) return 'Fair'
      if (km >= 1) return 'Hazy'
      return 'Foggy'
    }
  
    return (
      <Section>
  
        <div>
          <Text>Feels like</Text>
          <Title>{weather.feels_like}℃</Title>
        </div>
  
        <div>
          <Text>Min ℃</Text>
          <Title>{forecast.temperature_2m_min[0]}℃</Title>
  
          <Text>Max ℃</Text>
          <TitleMax>{forecast.temperature_2m_max[0]}℃</TitleMax>
        </div>
  
        <div>
          <Text>Humidity</Text>
          <Title>{weather.humidity}%</Title>
        </div>
  
        <div>
          <Text>Pressure</Text>
          <Title>{weather.pressure} hPa</Title>
        </div>
  
        <div>
          <Text>Wind speed</Text>
          <Title>{weather.wind} m/s</Title>
        </div>
  
        <div>
          <Text>Visibility</Text>
          <Title>{visibilityCharacteristic()}</Title>
        </div>
  
      </Section>
    )
  }