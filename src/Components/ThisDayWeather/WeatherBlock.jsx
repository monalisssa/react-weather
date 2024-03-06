import React, {useContext} from 'react';
import connectingFigure from '../../img/connecting_figure.svg'
import connectingFigureLight from '../../img/connecting_figure_light.svg'
import ExtraWeatherInfo from './ExtraWeatherInfo';
import MainWeatherInfo from './MainWeatherInfo';
import './thisDayWeather.css'
import {ThemeContext} from "../../App";
function WeatherBlock(props) {

    const theme = useContext(ThemeContext)
  return (
    <main>
      <div className='main_weather_info' >
      <MainWeatherInfo weather = {props.weather}  image={props.image} date={props.date} location={props.location} />
      </div>

        {
            theme === 'dark'
            ?  <img src={connectingFigure} alt="фигура" width={41.3} />
                : <img src={connectingFigureLight} alt="фигура" width={41.3} />

        }


      <div className='extra_weather_info'>
      <ExtraWeatherInfo weather={props.weather} />
      </div>

     
    </main>
   
    
   
  );
}

export default WeatherBlock;