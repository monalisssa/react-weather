import React, {useContext} from 'react';
import DateObject from 'react-date-object';
import {ThemeContext} from "../../App";

const WeatherDaysItem = (props) => {
  const theme = useContext(ThemeContext)
  const date = new DateObject(props.date)
  return (
    <div className='days_list-item'  onClick={() => props.openModal(props.weather, props.date)}>
        <div className='list_item-date'>
          <p>{date.format("dddd")} </p>
          <span style={{color: '#989696'}}>{date.format("h:mm A")}</span>
        </div>

        <div className={theme === 'light' && 'theme-light-image'}>
            <img src={`animated_icons/${props.weather.weather[0].icon}.svg`} width={60} alt="weather"/>
        </div>

        <div className='list_item-weather'> 
        <p >{Math.round(props.weather.main.temp) } ℃</p>
        <span style={{color: '#989696', fontSize: '13px'}}>{props.weather.weather[0].description}</span>
        </div>
    </div>
  );
}

export default WeatherDaysItem;