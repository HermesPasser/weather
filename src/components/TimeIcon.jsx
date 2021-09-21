import { getIconFromAbbreviation } from "../WeatherAPIWrapper"
/*
 * Shows the temperature a day. Uses the same css than HightlightsArea
 */
export default function TimeIcon({ formattedDateStr, maxTempture, minTempture, abbr = 'c', isCelcius = true}) {
    // TODO: since this is only getting feed, pass the min and max with the correct temp type (celcius, faren..)
    const tempSufix = isCelcius ? 'C' : 'F'
    const icon = getIconFromAbbreviation(abbr)
    return (
        <div className="weather-wrapper">
            <p>{formattedDateStr}</p>
            <img 
                className="timeicon-img"
                src={icon} 
                alt="figure representing the weather" />
            
            <div className="weather-temp">
                <p>{maxTempture}º{tempSufix}</p>
                <p>{minTempture}º{tempSufix}</p>
            </div>
        </div>
    )
}