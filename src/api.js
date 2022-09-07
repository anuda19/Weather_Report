import axios from "axios"

const accessKey = "b429fa36368ef1fb010aad86b15ab966"

export const getWeatherData = async(search)=>{
    const getUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${accessKey}`
    return await axios.get(getUrl)
}


// http://api.weatherstack.com/current?access_key=${accessKey}&query=${search}