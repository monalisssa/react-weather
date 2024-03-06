import React from 'react';
import MyButton from '../UI/button/MyButton';
import WeatherDaysItem from './WeatherDaysItem';
import './otherDaysWeather.css'


const WeatherDaysList = (props) => {

  return (
    <div className='days_list-box'>
      <div className='buttons'>
        <MyButton>Hourly</MyButton>
      </div>
     
      <div className='weather_days-list'>
   
    {
    props.forecast.map((day) =>
    <WeatherDaysItem weather={day} date={new Date(day.dt_txt)} openModal={props.openModal}/>)
    }
      </div>
    </div>
  );
}

export default WeatherDaysList;