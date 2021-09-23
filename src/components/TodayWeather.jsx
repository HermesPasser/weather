import { getCityByName } from '../WeatherAPIWrapper'
import { dateFormat, dateFromString } from '../utils'
import { Fragment } from "react/cjs/react.production.min"
import './TodayWeather.css'
import { celciusToFahrenheit } from '../utils'
import { getIconFromAbbreviation } from '../WeatherAPIWrapper'
/**
 *  Displays the current wheather and search the location to display
 */
export default function TodayWeather({state, setState, setWeatherData, onGps}) {
    const todayData = state.weatherData[0]
    let date = dateFormat(dateFromString(todayData.applicable_date))
    const icon = getIconFromAbbreviation(todayData.weather_state_abbr)
    let temperature = state.useCelsius ? todayData.the_temp : celciusToFahrenheit(todayData.the_temp)
    temperature = Math.round(temperature)
    
    const onSearchPlacesBtnClicked = (event) => { 
        setState({...state, searchEnabled: true})
    }
    
    const onSearchBtnClicked = async (event) => {
        event.preventDefault()
        const searchInput = state.input.trim().toLocaleLowerCase()
        const matches = await getCityByName(searchInput)
        if (matches.lenght === 0) {
            alert('Can\'t retrieve the weather data at the moment. Try again later.')
            return
        }
        
        const cities = matches.map(c => { 
            return {'city': c['title'], 'id': c['woeid']}
        })
        setState({...state, options: cities, selectedId: cities[0].id})
    }
    
    const onCloseButtonClicked = (event) => {
        setWeatherData()
        setState({...state, searchEnabled: false})
    }

    const onSelectedOption = (event) => {
        setState({...state, selectedId: event.target.value})
    }

    const onSearchChanged = (event) => {
        const value = {...state, input:event.target.value}
        setState(value)
    }

    const WeatherScreen = (
        <Fragment>
            <div className="today-weather-search-loc-wrapper">
                <button className="today-weather-btn" onClick={onSearchPlacesBtnClicked}>Search for places</button>
                <button className="today-weather-btn today-weather-gps-btn" onClick={onGps}>
                    <span class="material-icons">gps_fixed</span>
                </button>
            </div>
            
            <div className="today-weather-info-wrapper">
                <img 
                    className="today-weather-image"
                    src={icon} 
                    alt="figure representing the weather" />

                <p>
                    <span className="today-weather-temperature-number">{temperature}</span>
                    <span className="today-weather-temperature-sign">º{state.useCelsius ? 'C' : 'F'}</span>
                </p>
                
                <p className="today-weather-climate">{todayData.weather_state_name}</p>
                <p className="today-weather-time-date">Today - {date}</p>
                
                <div className="today-weather-location-div">
                    <span className="material-icons">place</span>
                    <p>{state.location}</p>
                </div>
            </div>
        </Fragment>
    )

    const SearchScreen = (
        <Fragment>
                <div className="tw-close-wrapper">
                    <button className="tw-search-btn-x" onClick={onCloseButtonClicked}>X</button>
                </div>
                <form>
                    <div className="tw-search-div">
                        <div className="tw-searchbar-btn">
                            <input 
                                onChange={onSearchChanged} 
                                placeholder="search location" 
                                type="text" />

                            <button onClick={onSearchBtnClicked}>Search</button>       
                        </div>
                        <select onChange={onSelectedOption}>
                            {
                                state.options.map(val => (
                                    <option value={val.id}>{val.city}</option>
                                ))
                            }
                        </select>
                    </div>
                </form>
        </Fragment>
    )
    
    return (
        <div className="today-weather-wrapper">
            {state.searchEnabled ? SearchScreen : WeatherScreen}
        </div>
    )
}