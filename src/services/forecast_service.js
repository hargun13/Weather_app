import Axios from "axios";

export const forecastApi = (latitude,longitude) => {
    return Axios.get("https://api.open-meteo.com/v1/forecast", {//this returns a promise
        params:{//automatically handled by axios
          latitude,
          longitude,
          hourly: "temperature_2m"  
        },
    });
};