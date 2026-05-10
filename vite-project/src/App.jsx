import { useState } from 'react'
import Header from './components/Headeer/Header'
import Hero from './components/Hero/Hero'
import WeatherCard from './components/Weather/Weather'
import PetCard from './components/Interacting/PetCard'
import CharacteristicWeather from './components/WeatherDetails/CharacteristicWeather'
import WeaklyForecast from './components/WeeklyForecast/WeeklyForecast'
import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
     <Hero />
     {/* <WeatherCard /> */}
     {/* <PetCard /> */}
     <WeaklyForecast />
     <Footer />
    </>
  )
}

export default App
