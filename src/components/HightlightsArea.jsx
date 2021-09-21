import react, { useState } from "react"
import TimeIcon from "./TimeIcon"
import './HightlightsArea.css'

export default function HightlightsArea({state, setState, weatherData}) {
    const [useFahrenheit, setUseFahrenheit] = useState(false)
    const todayData = weatherData[0]
    
    // TODO: this needs to be implemented
    const ceisiusBtnClick = () => setUseFahrenheit(false)
    const fahrenheitBtnClick = () => setUseFahrenheit(true)

    // FIXME: placeholder, whe will fetch the data in another way
    // TODO: the logo will not be hardcoded but choosen given the weather
    // data that the api will give us 
    let dailyData = [
        { date: 'Tomorrow', maxTemp: '16', minTemp: '11'},
        { date: 'Sun, 7 Jun', maxTemp: '16', minTemp: '11'},
        { date: 'Sun, 8 Jun', maxTemp: '16', minTemp: '11'},
        { date: 'Tue, 9 Jun', maxTemp: '16', minTemp: '11'},
        { date: 'Wed, 10 Jun', maxTemp: '16', minTemp: '11'}
    ]
    return (
        <div className="hightlights-area-wrapper">              
            <div className="daily-weather-content"> {/* so i can move everything w/o doing so with the bg */}
                
                <div className="temperature-kind-wrapper">
                    <button onClick={ceisiusBtnClick} >C</button>
                    <button onClick={fahrenheitBtnClick}>F</button>
                </div>
                
                <div className="daily-weather-div">
                    {dailyData.map(d => 
                        <TimeIcon formattedDateStr={d.date} maxTempture={d.maxTemp} minTempture={d.minTemp} />)}
                </div>

                <h1><strong>Today's Hightlights</strong></h1>

                <div className="highlights">

                    <div className="highlight wind-status">
                            <p>Wind Status</p>
                            <p className="text"><span>{Math.round(todayData.wind_direction)}</span>mph</p>
                            <p>compass | {todayData.wind_direction_compass}</p>
                    </div>
                    
                    <div className="highlight humidity">
                            <p>Humidity</p>
                            <p><span>{todayData.humidity}</span>%</p>
                            gaugue here
                    </div>

                    <div className="highlight visibility">
                        <p>Visibility</p>
                        <p><span>{Math.round(todayData.visibility)}</span>miles</p>
                    </div>
                    
                    <div className="highlight Air pressure">
                        <p>Wind Status</p>
                        <p><span>{Math.round(todayData.air_pressure)}</span>mb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}