import React, {useContext} from 'react';
import {searchBarDarkStyles, searchBarLightStyles, searchBarStyles} from './SearchBarStyle';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api.js';
import {ThemeContext} from "../../App";
function SearchBar({onSearchChange}) 
{
  const theme = useContext(ThemeContext)
  const [search, setSearch] = React.useState()
  const loadOptions = (inputValue) =>
  {
    return fetch(`${GEO_API_URL}?minPopulation=10000&namePrefix=${inputValue}`, geoApiOptions)
    .then((response) => response.json())
    .then((response)=>
    {
      return{
        options: response.data.map((city) =>{ 
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        }})
      }
    })
    .catch((err) => console.log(err))
    
  }

  const handleOnChange = (searchData) =>{
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <div className="search_bar">
      <AsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      styles={theme === 'dark' ? searchBarDarkStyles : searchBarLightStyles}
      value={search}
      onChange={handleOnChange}
      loadOptions = {loadOptions}
       />
       </div>
    
  );
}

export default SearchBar;