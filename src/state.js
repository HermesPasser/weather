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

export default initialState
