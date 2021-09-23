import { getIconFromAbbreviation } from "../api/WeatherAPIWrapper"
import { celciusToFahrenheit } from "../utils"

/*
 * Shows the temperature a day. Uses the same css than HightlightsArea
 */
export default function TimeIcon({ formattedDateStr, maxTempture, minTempture, useFahrenheit, abbr = 'c'}) {
    // TODO: since this is only getting feed, pass the min and max with the correct temp type (celcius, faren..)
    const tempSufix = useFahrenheit ? 'F' : 'C'
    const icon = getIconFromAbbreviation(abbr)
    
    maxTempture = Math.round(maxTempture)
    minTempture = Math.round(minTempture)
    if (useFahrenheit) {
        maxTempture = Math.round(celciusToFahrenheit(maxTempture))
        minTempture = Math.round(celciusToFahrenheit(minTempture))
    }

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