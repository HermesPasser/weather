import react, { useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import './TodayWeather.css'

/**
 *  Displays the current wheather and search the location to display
 */
export default function TodayWeather(props) {
   
    const onSearchPlacesBtnClicked = (event) => { 
        setSearchViewEnabled(true)
    }
    
    const onGpsBtnClicked = (event) => { alert(event)}
    const onSearchBtnClicked = async (event) => {
        
    }
    
    const OnCitySelected = (event) => {
        setSearchViewEnabled(false)
    }

    const onSearchChanged = (event) => {
        const value = {...searchText, input:event.target.value}
        setSearchText(value)
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
                        <select></select>
                    </div>
                </form>
        </Fragment>
    )
    
    return (
        <div className="today-weather-wrapper">
            {searchViewEnabled ? SearchScreen : WeatherScreen}
        </div>
    )
}