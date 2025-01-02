import { useState } from 'react'
import axios from "axios";
import './App.css'
import Weather from './Weather.jsx'

const [unit, setUnit] = useState("metric");
const toggleUnit = () => setUnit(unit === "metric" ? "imperial" : "metric");

const fetchWeather = async () => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
        );
        setWeather(response.data);
    } catch (error) {
        alert("City not found. Please try again.");
    }
};

return (
    <div>
        <button onClick={toggleUnit}>
            Toggle to {unit === "metric" ? "Fahrenheit" : "Celsius"}
        </button>
        {/* Rest of the code */}
    </div>
);
function App() {
  const [count, setCount] = useState(0);
  return (
    
    <>
       <Weather/>
    </>
  )
}

export default App
