import react from "react";

/*
 * Shows the temperature a day. Uses the same css than HightlightsArea
 */
export default function TimeIcon({ formattedDateStr, maxTempture, minTempture, isCelcius = true}) {
    // TODO: since this is only getting feed, pass the min and max with the correct temp type (celcius, faren..)
    const tempSufix = isCelcius ? 'C' : 'F'
    return (
        <div className="weather-wrapper">
            <p>{formattedDateStr}</p>
            <img 
                className="hl-daily-weather-image"
                src="https://www.metaweather.com/static/img/weather/png/64/s.png" 
                alt="figure representing the weather" />
            
            <div className="weather-temp">
                <p>{maxTempture}º{tempSufix}</p>
                <p>{minTempture}º{tempSufix}</p>
            </div>
        </div>
    )
}