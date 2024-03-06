import React from 'react';
import {WiThermometer, WiStrongWind, WiHumidity, WiBarometer} from 'react-icons/wi'
import WeatherCharacteristic from './WeatherCharacteristic';
function ExtraWeatherInfo({weather}) {
  return (
    
      <ul className='list_characteristics'>
      <WeatherCharacteristic image={<WiThermometer size={40} />} title="Feels like" value={`${Math.round(weather.main.feels_like)}  ℃`} />
      <WeatherCharacteristic image={<WiStrongWind size={40} />} title="Wind" value={`${weather.wind.speed} m/s`}/>
      <WeatherCharacteristic image={<WiHumidity size={40} />} title="Humidity" value={`${weather.main.humidity} %`}/>
      <WeatherCharacteristic image={<WiBarometer size={40} />} title="Pressure" value={`${weather.main.pressure} hPa`}/>
      </ul>
   
  );
}

export default ExtraWeatherInfo;