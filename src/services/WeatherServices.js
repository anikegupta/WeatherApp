import axios from "axios";
const apiKey="c305a6e2c0f940b6b00152913252008"
const baseUrl="https://api.weatherapi.com/v1/"

export const getWeather=async (city)=>{
    const completeUrl=`${baseUrl}/current.json?key=${apiKey}&q=${city}`
    const response=await axios.get(completeUrl)
    return response.data
}