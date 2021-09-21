import react, { useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import './TodayWeather.css'

/**
 *  Displays the current wheather and search the location to display
 */
export default function TodayWeather() {
    const [searchViewEnabled, setSearchViewEnabled] = useState(false)
    
    const searchPlacesBtnClicked = (event) => { 
        setSearchViewEnabled(true)
    }
    
    const gpsBtnClicked = (event) => { alert(event)}
    const searchBtnClicked = (event) => { alert(event)}
    
    const citySelected = (event) => {
        setSearchViewEnabled(false)
    }

    const WeatherScreen = (
        <Fragment>
            <div className="today-weather-search-loc-wrapper">
                <button className="today-weather-btn" onClick={searchPlacesBtnClicked}>Search for places</button>
                <button className="today-weather-btn today-weather-gps-btn" onClick={gpsBtnClicked}>
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
                <form>
                    <div className="tw-search-div">
                        <div className="tw-searchbar-btn">
                            <input className="foo" placeholder="search location" type="text" />
                            <button onClick={searchBtnClicked}>Search</button>       
                        </div>
                        <select onChange={citySelected}>
                            <option value="1">Ex</option>
                            <option value="2">Ex2</option>
                        </select>
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