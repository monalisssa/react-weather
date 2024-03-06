import React, {useContext, useState} from 'react';
import line from '../../img/line.svg'
import line_light from '../../img/line_light.svg'
import {ThemeContext} from "../../App";
function WeatherCharacteristic(props) {

    const theme = useContext(ThemeContext)
  return (
    <li className='list_characteristic-item'>
        {props.image} 
        <p className='characteristic_title'>{props.title}</p>
        {
            theme === 'dark' ?  <img src={line} alt="line" align="center"/>
                : <img src={line_light} alt="line" align="center"/>
        }

        <p className='characteristic_value'>{props.value}</p>     
    </li>
   
    
   
  );
}

export default WeatherCharacteristic;