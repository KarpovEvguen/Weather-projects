import { useState } from 'react'
import Header from './components/Headeer/Header'
import Hero from './components/Hero/Hero'
import WeatherCard from './components/Weather/Weather'
import Interacting from './components/Interacting/Interacting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
     <Hero />
     <WeatherCard />
     <Interacting />
    </>
  )
}

export default App
