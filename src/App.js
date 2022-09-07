// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { getWeatherData } from "./api";
// import clouds from './Assets/Clouds.mp4'
// import nature from './Assets/nature.mp4'
// import rain from './Assets/rain.gif'
import cloud from './Assets/giphy.gif'
import sunny from './Assets/sunny-day.gif'
import thunder from './Assets/thunder.gif'
import "./App.css";

function App() {
  const [search, setSearch] = useState("Mumbai");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeatherDetails();
  }, [search]);

  const getWeatherDetails = () => {
    getWeatherData(search)
      .then((res) => {
        // console.log(res);
        const { data, status } = res;
        if (status === 200) {
          console.log(data);
          setWeatherData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const today = new Date()
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const weatherDesc = weatherData?.weather?.map((w)=>w.main)

  // const changeBackground = ()=>{
  //   if(weatherData?.main?.temp < 30 && weatherDesc === "Thuderstorm"){
  //     return <img src={thunder} alt="" />
  //   }else if(weatherData?.main?.temp < 30 && weatherDesc === "Rain"){
  //     return <img src={rain} alt="" />
  //   }else if(weatherData?.main?.temp < 30 && weatherDesc === "Haze"){
  //     return <img src={cloud} alt="" />
  //   }
  // }
  return (
    <>
      <div className="input">
        <h2>Weather Report</h2>
        <h6>Search Your City</h6>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Eg: Kolkata"
        />
      </div>
      <div className="container">
      {weatherData?.main?.temp < 30 ? (
        <img src={thunder} alt="" />
      ):(
        <img src={sunny} alt="" />
      )}
        <div className="city">
          <h1>{search}</h1>
          <h3>{time} {time<12? "AM":"PM"}</h3>
        </div>
       
        <div className="temp">
          <h1>{weatherData?.main?.temp}°C</h1>
          <h4>
            {weatherData?.main?.temp_max}°C/{weatherData?.main?.temp_min}°C
          </h4>
          <h5>{weatherDesc}</h5>
        </div>
      </div>
    </>
  );
}

export default App;
