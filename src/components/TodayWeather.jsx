import react, { useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import './TodayWeather.css'
import {getCityByName} from '../WeatherAPIWrapper'

const initialState = { input: '', options: [], searchEnabled: true }

/**
 *  Displays the current wheather and search the location to display
 */
export default function TodayWeather(props) {
    const [state, setState] = useState(initialState)

    const onSearchPlacesBtnClicked = (event) => { 
        setState({...state, searchEnabled: true})
    }
    
    const onGpsBtnClicked = (event) => { alert(event)}
    const onSearchBtnClicked = async (event) => {
        event.preventDefault()
        const searchInput = state.input.trim().toLocaleLowerCase()
        const matches = await getCityByName(searchInput)
        if (matches.lenght === 0) {
            alert('Can\'t retrieve the weather data at the moment. Try again later.')
            return
        
        const cities = matches.map(c => c['title'])
        const newState = {...state, options: cities}
        setState(newState)
    }
    
    const OnCitySelected = (event) => {
        setState({...state, searchEnabled: false})
    }

    const onSearchChanged = (event) => {
        const value = {...state, input:event.target.value}
        setState(value)
    }

    const WeatherScreen = (
        <Fragment>
            <div className="today-weather-search-loc-wrapper">
                <button className="today-weather-btn" onClick={onSearchPlacesBtnClicked}>Search for places</button>
                <button className="today-weather-btn today-weather-gps-btn" onClick={onGpsBtnClicked}>
                    <span class="material-icons">gps_fixed</span>
                </button>
            </div>
            
            <div className="today-weather-info-wrapper">
                <img 
                    className="today-weather-image"
                    src="https://www.metaweather.com/static/img/weather/png/64/s.png" 
                    alt="figure representing the weather" />

                <p>
                    <span className="today-weather-temperature-number">0</span>
                    <span className="today-weather-temperature-sign">ºC</span>
                </p>
                
                <p className="today-weather-climate">Weather</p>
                <p className="today-weather-time-date">Day - Date</p>
                
                <div className="today-weather-location-div">
                    <span className="material-icons">place</span>
                    <p>CITY HERE</p>
                </div>
            </div>
        </Fragment>
    )

    const SearchScreen = (
        <Fragment>
                <div className="tw-close-wrapper">
                    <button className="tw-search-btn-x" onClick={OnCitySelected}>X</button>
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
                        <select>
                            {
                                state.options.map(val => (
                                    <option value={val}>{val}</option>
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