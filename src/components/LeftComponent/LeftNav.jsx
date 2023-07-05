import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./cityAPI";

const LeftNav = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  // const searchHistory = [] //array to store search History then display on the hero section

  const loadOptions = (inputValue) => {
    //this is the value that we will be passing into the search bar dynamically

    return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions)
      .then((response) => response.json())
      .then((data) => {
        return {
          options: data.data.map((city) => {
            return {
              value: `${city.longitude} ${city.latitude}` ,
              label: `${city.name} , ${city.countryCode}`,
            }
          })
        }
      })    // the open weather api requires latitude and longitude to be passed which we will get from the geodb api
      .catch((error) => console.error("Error: ", error));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);

  };

  return (
    <div className="flex items-center  gap-7 font-mono mb-8">
      <h1 className="font-semibold text-lg">Stay Ahead of the Weather!</h1>

      <AsyncPaginate
        placeholder="Search for City..."
        debounceTimeout={600} //this is basically so that api is fetched only once since the user can click multiple time so no multiple requests should be made
        value={search}
        onChange={handleOnChange}//dynamically setting the search state value
        loadOptions={loadOptions} //when we type something even a small prefix this function will find the cities with that prefix and then show us the results
        className="w-[65%]"
      />
    </div>
  );
};

export default LeftNav;
