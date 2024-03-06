import React, {useContext} from 'react';
import DateObject from 'react-date-object';
import ExtraWeatherInfo from '../../ThisDayWeather/ExtraWeatherInfo';
import MainWeatherInfo from '../../ThisDayWeather/MainWeatherInfo';

import './modal.css'
import {ThemeContext} from "../../../App";

const Modal = ({active, setActive, weather}) => {
  const date = new DateObject(weather.date)
  return (

    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
        {weather &&
        <MainWeatherInfo weather={weather} activeModule={true} date={date.format("dddd, MMMM D, h:mm A")}/> }
           {weather &&
         <ExtraWeatherInfo  weather={weather} /> }
        </div>
    </div>
    
  );
}

export default Modal;