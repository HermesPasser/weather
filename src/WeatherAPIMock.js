import { getCityByGeocalization as realGetGeo } from "./WeatherAPIWrapper"

/**
 * Store hardcoded values from the API to test the UI witthout caring about 429's
 */

export async function getCityByName(name) { 
    return [
        {
           "title":"Bradford",
           "location_type":"City",
           "woeid":13527,
           "latt_long":"53.795731,-1.758300"
        },
        {
           "title":"Brasília",
           "location_type":"City",
           "woeid":455819,
           "latt_long":"-15.77846,-47.928661"
        }
    ]
}
 
export async function getCityByGeocalization(latitude, longetude) {
    return [
        {
           "distance":2737,
           "title":"São Paulo",
           "location_type":"City",
           "woeid":455827,
           "latt_long":"-23.562880,-46.654659"
        },
        {
           "distance":357437,
           "title":"Rio de Janeiro",
           "location_type":"City",
           "woeid":455825,
           "latt_long":"-22.976730,-43.195080"
        },
        {
           "distance":873058,
           "title":"Brasília",
           "location_type":"City",
           "woeid":455819,
           "latt_long":"-15.77846,-47.928661"
        },
        {
           "distance":1454141,
           "title":"Salvador",
           "location_type":"City",
           "woeid":455826,
           "latt_long":"-12.97002,-38.504559"
        },
        {
           "distance":1673887,
           "title":"Buenos Aires",
           "location_type":"City",
           "woeid":468739,
           "latt_long":"-34.608521,-58.373539"
        },
        {
           "distance":2582070,
           "title":"Santiago",
           "location_type":"City",
           "woeid":349859,
           "latt_long":"-33.463039,-70.647942"
        },
        {
           "distance":3449076,
           "title":"Lima",
           "location_type":"City",
           "woeid":418440,
           "latt_long":"-12.043600,-77.021217"
        },
        {
           "distance":4322620,
           "title":"Bogotá",
           "location_type":"City",
           "woeid":368148,
           "latt_long":"4.656370,-74.117790"
        },
        {
           "distance":4376429,
           "title":"Caracas",
           "location_type":"City",
           "woeid":395269,
           "latt_long":"10.496050,-66.898277"
        },
        {
           "distance":4677931,
           "title":"Maracaibo",
           "location_type":"City",
           "woeid":395270,
           "latt_long":"10.734450,-71.630562"
        }
     ]
}
 
export async function getWeatherDataById(id) {
    const json = {
        "consolidated_weather":[
           {
              "id":6261169149968384,
              "weather_state_name":"Light Cloud",
              "weather_state_abbr":"lc",
              "wind_direction_compass":"SSW",
              "created":"2021-09-22T11:49:31.070067Z",
              "applicable_date":"2021-09-22",
              "min_temp":20.255000000000003,
              "max_temp":36.48,
              "the_temp":36.47,
              "wind_speed":2.4240425912670007,
              "wind_direction":204.5,
              "air_pressure":1010.0,
              "humidity":21,
              "visibility":9.999726596675416,
              "predictability":70
           },
           {
              "id":5714505511206912,
              "weather_state_name":"Showers",
              "weather_state_abbr":"s",
              "wind_direction_compass":"E",
              "created":"2021-09-22T11:49:34.456524Z",
              "applicable_date":"2021-09-23",
              "min_temp":21.71,
              "max_temp":33.27,
              "the_temp":33.17,
              "wind_speed":6.515960391314722,
              "wind_direction":84.5,
              "air_pressure":1012.0,
              "humidity":35,
              "visibility":9.999726596675416,
              "predictability":73
           },
           {
              "id":6205354800054272,
              "weather_state_name":"Showers",
              "weather_state_abbr":"s",
              "wind_direction_compass":"ENE",
              "created":"2021-09-22T11:49:37.055878Z",
              "applicable_date":"2021-09-24",
              "min_temp":20.015,
              "max_temp":31.46,
              "the_temp":31.38,
              "wind_speed":5.572167939234868,
              "wind_direction":68.0,
              "air_pressure":1014.0,
              "humidity":43,
              "visibility":9.999726596675416,
              "predictability":73
           },
           {
              "id":5855294505615360,
              "weather_state_name":"Heavy Rain",
              "weather_state_abbr":"hr",
              "wind_direction_compass":"NE",
              "created":"2021-09-22T11:49:40.054177Z",
              "applicable_date":"2021-09-25",
              "min_temp":20.18,
              "max_temp":31.645,
              "the_temp":32.39,
              "wind_speed":4.4336194623399345,
              "wind_direction":55.5,
              "air_pressure":1013.0,
              "humidity":42,
              "visibility":9.937589477451683,
              "predictability":77
           },
           {
              "id":5334521969901568,
              "weather_state_name":"Heavy Rain",
              "weather_state_abbr":"hr",
              "wind_direction_compass":"SE",
              "created":"2021-09-22T11:49:43.074781Z",
              "applicable_date":"2021-09-26",
              "min_temp":18.369999999999997,
              "max_temp":27.415,
              "the_temp":25.85,
              "wind_speed":3.911778811739442,
              "wind_direction":139.0,
              "air_pressure":1017.0,
              "humidity":53,
              "visibility":9.999726596675416,
              "predictability":77
           },
           {
              "id":4943474349572096,
              "weather_state_name":"Heavy Cloud",
              "weather_state_abbr":"hc",
              "wind_direction_compass":"ENE",
              "created":"2021-09-22T11:49:46.256229Z",
              "applicable_date":"2021-09-27",
              "min_temp":18.155,
              "max_temp":30.24,
              "the_temp":29.65,
              "wind_speed":4.824054919271455,
              "wind_direction":72.0,
              "air_pressure":1015.0,
              "humidity":39,
              "visibility":9.999726596675416,
              "predictability":71
           }
        ],
        "title":"Brasília",
        // some useless stuff removed here...
     }

     return { weatherData: json['consolidated_weather'], location: json['title']}
}
 
export function getIconFromAbbreviation(abbr) {
    return realGetGeo(abbr)
}
