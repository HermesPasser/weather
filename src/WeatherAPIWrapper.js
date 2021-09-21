const API = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/"

/**
 * given a name, get all cities that matches it
 * @returns array of objects that have a 'title' and 'woeid' attributes
 */
export async function getCityByName(name) {
    const response = await fetch(API + '/location/search/?query=' + name)
    if (response.status !== 200)
        return []
    
    const data = response.json()
    return data !== [] ? data : []
}

/**
 * given an id, get all relevant weather data from the city inside of the attribute 
 * 'consolidated_weather' plus the value of 'title' as 'location'
 * @returns array of objects with the weather data, with each representating a day
 */
export async function getWeatherDataById(id) {
    const response = await fetch(API + '/location/' + id)
    if (response.status !== 200)
        return []
    
    const data = response.json()
    if (data['detail'])
        return []

    return { weatherData: data['consolidated_weather'], location: data['title']}
}