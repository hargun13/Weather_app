import logo from './logo.svg';
import './App.css';
import { forecastApi } from './services/forecast_service';

function App() {

  let latitude = 23.0;
  let longitude = 95.0;



  return (
    <div>
    <h1>This is a Weather Application</h1>
    <h6>The Latitude is: {latitude} and the Longitude is: {longitude} </h6>
    <button onClick = {(e) => {
      forecastApi(latitude,longitude).then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      }) ;
    }}>Show Forecast</button>
    </div>
  );
}

export default App;
