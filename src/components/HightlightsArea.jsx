import { dateFormat, dateFromString } from "../utils"
import TimeIcon from "./TimeIcon"
import './HightlightsArea.css'
import Compass from "../assets/Compass-Arrow.svg"

export default function HightlightsArea({state, setState, weatherData}) {
    const todayData = weatherData[0]
    // TODO: this needs to be implemented
    const ceisiusBtnClick = () => setState({...state, useCelsius: true})
    const fahrenheitBtnClick = () => setState({...state, useCelsius: false})
    const rotation = `rotate(${todayData.wind_direction}deg)`

    return (
        <div className="hightlights-area-wrapper">              
            <div className="daily-weather-content"> {/* so i can move everything w/o doing so with the bg */}
                
                <div className="temperature-kind-wrapper">
                    <button onClick={ceisiusBtnClick} disabled={state.useCelsius} >C</button>
                    <button onClick={fahrenheitBtnClick} disabled={!state.useCelsius} >F</button>
                </div>
                
                <div className="daily-weather-div">
                    {state.weatherData.map((d, i)=> 
                        <TimeIcon
                            useFahrenheit={!state.useCelsius}
                            formattedDateStr={
                                i === 0 
                                    ? 'Tomorrow'
                                    : dateFormat(dateFromString(d.applicable_date))
                            }
                            maxTempture={d.max_temp}
                            minTempture={d.min_temp}
                            abbr={d.weather_state_abbr} />)}
                </div>

                <h1><strong>Today's Hightlights</strong></h1>

                <div className="highlights">

                    <div className="highlight wind-status">
                            <p>Wind Status</p>
                            <p className="text"><span>{Math.round(todayData.wind_direction)}</span>mph</p>
                            <div className="compass-wrapper">
                                <img 
                                    className="compass" 
                                    alt="compass arrow that points to wind direction"
                                    style={{transform: rotation }}
                                    src={Compass}
                                    />

                                <p>{todayData.wind_direction_compass}</p>
                            </div>
                    </div>
                    
                    <div className="highlight humidity">
                            <p>Humidity</p>
                            <p><span>{todayData.humidity}</span>%</p>
                            <div className="gauge-wrapper">
                                <div className="gauge-labels">
                                    <p>0</p>
                                    <p>50</p>
                                    <p>100</p>
                                </div>
                                <div className="gauge">
                                    <div 
                                        className="gauge-inside"
                                        style={{width: todayData.humidity + '%'}}
                                        >
                                        -
                                    </div>
                                </div>
                                <div className="gauge-percent-label">
                                    <p>%</p>
                                </div>
                            </div>
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