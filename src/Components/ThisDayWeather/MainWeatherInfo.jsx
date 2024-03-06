import React, {useContext} from 'react';
import {FaLocationDot} from 'react-icons/fa6'
import {ThemeContext} from "../../App";
function MainWeatherInfo(props) {
    const theme = useContext(ThemeContext)
  return (
    <div className='weather_info-content'>
        <p className='date'>{props.date}</p>
        <div className='weather_info-box'>

            <div className={theme === 'light' && 'theme-light-image'}>
                <img src={`animated_icons/${props.weather.weather[0].icon}.svg`} width={props.activeModule && theme === 'dark' ? 120 : 150 } alt="Погода" />
            </div>

          <div className='weather_temperature-box'>
            <h3 className='temperature'>{Math.round(props.weather.main.temp) } ℃</h3>
            <span>{props.weather.weather[0].description}</span>
          </div>
        </div>
        {!props.activeModule &&
         <p className='city'>
         <FaLocationDot />  
       <span>{props.weather.city}</span>
       </p>}
       
    </div>
  );
}

export default MainWeatherInfo;