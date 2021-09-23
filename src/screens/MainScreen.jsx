import { getWeatherDataById, getCityByGeocalization } from '../WeatherAPIWrapper'
import { useState, useEffect } from "react"
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
    weatherData: [initialWeatherState],
    gpsCoords: null,
    useCelsius: true
}


export default function MainScreen(props) {
    const [state, setState] = useState(initialState)
    
    const setGPSLocation = async (coords) => {
        // gets loc from the api and store it to be used later
        const data = await getCityByGeocalization(coords.latitude, coords.longitude)
        if (data.lenght === 0) {
            alert('Your location could not be found')
            return
        }
        const nearestLocation = data[0]
        const locationName = nearestLocation['title']
        const id = nearestLocation['woeid']
        setState({...state, weatherData: data, location: locationName, selectedId: id, gpsCoords: coords})
        await setWeatherData(id) // i hope will update the state now, or else i'll need a settimeout
    }

    const askForGPS = async () => {
        if (!("geolocation" in navigator)) {
            alert("Your browser do not support geolocalization.")
            return
        }

        if (state.gpsCoords === null) {
            // since this func can be called only once
            navigator.geolocation.watchPosition(async (pos) => {
                await setGPSLocation(pos.coords)
            })
        } else {
            setGPSLocation(state.gpsCoords)
        }
    }

    const setWeatherData = async (id) => {
        if (id === 0)
            return
        
        const data = await getWeatherDataById(id)
        const weather = data.weatherData
        const loc = data.location

        if (data.length === 0 || weather.length === 0)
            return

        setState({...state, weatherData: weather, location: loc, searchEnabled: false})
    }

    useEffect(()=>{
        askForGPS()
    }, []) 

    return (
        <div className="main-screen-wrapper">
            <TodayWeather state={state} setState={setState} setWeatherData={setWeatherData} onGps={askForGPS} />
            <HightlightsArea state={state} setState={setState} weatherData={state.weatherData} />
        </div>
    )
}