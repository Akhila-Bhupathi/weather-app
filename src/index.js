

import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { render } from "react-dom";
import './index.css';

const Main=()=> {
  const OPEN_WEATHER_IMG_URL = '"http://openweathermap.org/img/w';
  const [hour,setHour]=useState(false);

  const [day1_min,setDay1_min]=useState("");
  const [day1_max,setDay1_max]=useState("");
  const [day1_icon,setDay1_icon]=useState("");

  const [day2_min,setDay2_min]=useState("");
  const [day2_max,setDay2_max]=useState("");
  const [day2_icon,setDay2_icon]=useState("");

  const [day3_min,setDay3_min]=useState("");
  const [day3_max,setDay3_max]=useState("");
  const [day3_icon,setDay3_icon]=useState("");

  const [day4_min,setDay4_min]=useState("");
  const [day4_max,setDay4_max]=useState("");
  const [day4_icon,setDay4_icon]=useState("");

  const [day5_min,setDay5_min]=useState("");
  const [day5_max,setDay5_max]=useState("");
  const [day5_icon,setDay5_icon]=useState("");

  const [ hour1,setHour1] = useState("");
  const [ hour2,setHour2] = useState("");
  const [ hour3,setHour3] = useState("");


  const getWeatherData = () => {
      const API_KEY='a54e078040f3fd2fa1345d6359cc7429';
  const url=`https://api.openweathermap.org/data/2.5/forecast?q=bangalore&appid=${API_KEY}`;


      axios.get(url).then((response) => {

        console.log(response.data.list);
        setDay1_min(Math.floor(response.data.list[0].main.temp_min - 273.15));
        setDay1_max(Math.floor(response.data.list[0].main.temp_max - 273.15));
        setDay1_icon("http://openweathermap.org/img/w/"+response.data.list[0].weather[0].icon+".png");

        setDay2_min(Math.floor(response.data.list[8].main.temp_min - 273.15));
        setDay2_max(Math.floor(response.data.list[8].main.temp_max - 273.15));
        setDay2_icon("http://openweathermap.org/img/w/"+response.data.list[8].weather[0].icon+".png");

        setDay3_min(Math.floor(response.data.list[16].main.temp_min - 273.15));
        setDay3_max(Math.floor(response.data.list[16].main.temp_max - 273.15));
        setDay3_icon("http://openweathermap.org/img/w/"+response.data.list[16].weather[0].icon+".png");

        setDay4_min(Math.floor(response.data.list[24].main.temp_min - 273.15));
        setDay4_max(Math.floor(response.data.list[24].main.temp_max - 273.15));
        setDay4_icon("http://openweathermap.org/img/w/"+response.data.list[24].weather[0].icon+".png");

        setDay5_min(Math.floor(response.data.list[32].main.temp_min - 273.15));
        setDay5_max(Math.floor(response.data.list[32].main.temp_max - 273.15));
        setDay5_icon("http://openweathermap.org/img/w/"+response.data.list[32].weather[0].icon+".png");

        
      }).catch((error) => {
        console.log(error);
      });;
    }

    

const getHourInfo=(day)=>{
  
    const API_KEY='a54e078040f3fd2fa1345d6359cc7429';
const url=`https://api.openweathermap.org/data/2.5/forecast?q=bangalore&appid=${API_KEY}`;
  
axios.get(url).then((response) =>{
  setHour1(response.data.list[parseInt(day)].main.temp);
  setHour2(response.data.list[parseInt(day)+1].main.temp);
  setHour3(response.data.list[parseInt(day)+2].main.temp);
}).catch((error)=>{
  console.log(error);
})

}

  
  return (
    <div>
    <div className="weather__info" >
      <div className="weather__info-day" onClick={()=>getHourInfo(0)}>
        <div>Day 1</div>
        <img src={day1_icon} alt=""/>
        <p>{day1_min} ℃ {day1_max} ℃</p>
      </div>
      <div className="weather__info-day" onClick={()=>getHourInfo(8)}>
        <div>Day 2</div>
        <img src={day2_icon} alt=""/>
        <p>{day2_min} ℃ {day2_max} ℃</p>
      </div>
      <div className="weather__info-day" onClick={()=>getHourInfo(16)}>
        <div>Day 3</div>
        <img src={day3_icon} alt=""/>
        <p>{day3_min} ℃ {day3_max} ℃</p>
      </div>
      <div className="weather__info-day" onClick={()=>getHourInfo(24)}>
        <div>Day 4</div>
        <img src={day4_icon} alt=""/>
        <p>{day4_min} ℃ {day4_max} ℃</p>
      </div>
      <div className="weather__info-day" onClick={()=>getHourInfo(32)}>
        <div>Day 5</div>
        <img src={day5_icon} alt=""/>
        <p>{day5_min} ℃ {day5_max} ℃</p>
      </div>
      </div>
      <div className="weather__info-hour">
      <h3>Hourly Information</h3>
        <p>{hour1}</p>
        <p>{hour2}</p>
        <p>{hour3}</p>
        <button
          onClick={() => {
            getWeatherData();
            
          }}
        >Get Weather</button>
      </div>
    </div>
  );
}

render(<Main />, document.querySelector("#root"));
