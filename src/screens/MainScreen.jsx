import { useState } from "react"
import { getWeatherDataById } from '../WeatherAPIWrapper'
import HightlightsArea from "../components/HightlightsArea"
import TodayWeather from "../components/TodayWeather"


// this has the same structure as the obj from the api on the 'consolidated_weather' attribute
const initialWeatherState = {
    weather_state_name: '',
    weather_state_abbr: '',
    wind_direction_compass: '',
    applicable_date: '',
    min_temp: 0,
    max_temp: 0,
    wind_speed: 0,
    wind_direction: 0,
    air_pressure: 0,
    humidity: 0,
    visibility: 0,
}

const initialState = { 
    input: '', 
    options: [], 
    searchEnabled: false, 
    selectedId: 0,
    location: '',
    weatherData: initialWeatherState
}

export default function MainScreen(props) {
    const [state, setState] = useState(initialState)

    
    const setWeatherData = () => {
        if (state.selectedId === 0)
            return
        
        const data = getWeatherDataById(state.selectedId)
        const weather = data.weatherData
        const loc = data.location
        if (weather.lenght === 0)
            return

        setState({...state, weatherData: weather, location: loc})
    }

    return (
        <div className="main-screen-wrapper">
            <TodayWeather state={state} setState={setState} setWeatherData={setWeatherData} />
            <HightlightsArea state={state} setState={setState} weatherData={state.weatherData} />
        </div>
    )
}