import {createContext, useState} from 'react';
import "./styles/css/fonts.css"
import "./styles/css/main.css"
import "./styles/css/media.css"

import SearchBar from './Components/Search/SearchBar'
import WeatherBlock from './Components/ThisDayWeather/WeatherBlock';
import Modal from './Components/OtherDaysWeather/Modal/Modal'
import WeatherDaysList from './Components/OtherDaysWeather/WeatherDaysList';

import logo from './img/logo.png'
import DateObject from "react-date-object";
import {WEATHER_API_KEY, WEATHER_API_URL} from './api.js';
import { MoonLoader} from 'react-spinners';
import ChangeThemeButton from "./Components/ChangeThemeButton";


export const ThemeContext = createContext(null);
function App() {


  const [theme, setTheme] = useState('dark');

  const date = new DateObject()
  
  const [currentWeather, setCurrentWeather] = useState('')
  const [hourlyWeather, setHourlyWeather] = useState('')
  const [activeModule, setActiveModule] = useState(false)
  const [activeModuleContent, setActiveModuleContent] = useState('')
  const [loading, setLoading] = useState(false)


  const handleOnSearchChange = (searchData) =>
  {

    setLoading(true)
    const [lat,lon] = searchData.value.split(' ')
    
    const weatherCurrentCall=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const weatherHourlyCall=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=${WEATHER_API_KEY}&units=metric`)
    Promise.all([weatherCurrentCall,weatherHourlyCall])
    .then(async(response) => 
    { 
      const currentWeatherResponse = await response[0].json()
      const weatherHourlyResponse = await response[1].json()
      setCurrentWeather({city:searchData.label, ...currentWeatherResponse})
      setHourlyWeather({city:searchData.label, ...weatherHourlyResponse})
      setLoading(false)
     
    })
    .catch((err) => console.log(err))
    
  }
 
  const openModal = (weather, date) =>
  {
    setActiveModule(true)
    setActiveModuleContent({date: date, ...weather})
  }

  const handleChangeTheme = (theme) =>
  {
      setTheme(theme)
  }

  const handleSetLoading = (value) =>
  {
    setLoading(value)
  }
  return (


      <ThemeContext.Provider value={theme}>

        <ChangeThemeButton setTheme={handleChangeTheme} setLoading = {handleSetLoading}/>
        <div className={theme === 'dark' ? "main_app" : "main_app light--app"}>
          <img src={logo} alt="logo" width={150} className="logo"/>
          <SearchBar onSearchChange={handleOnSearchChange}/>

          {loading ? (<MoonLoader color="#fff" size={40} className="loading"/>) : currentWeather &&
              (<div>
                <WeatherBlock weather={currentWeather} date={date.format("dddd, MMMM D h:mm A")} />
                <WeatherDaysList forecast={hourlyWeather.list} date={new Date()} openModal={openModal}/>
                <Modal active={activeModule} setActive={setActiveModule} weather={activeModuleContent}/>
              </div>)}


        </div>
      </ThemeContext.Provider>


  );
}

export default App;
