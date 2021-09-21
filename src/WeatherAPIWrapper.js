const API = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/"

export async function getCityByName(name) {
    console.log('calling...')
    const response = await fetch(API + '/location/search/?query=' + name)
    if (response.status !== 200)
        return null
    
    const data = response.json()
    console.log(data)
    return data !== [] ? data : []
}
