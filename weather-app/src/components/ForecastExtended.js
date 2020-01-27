import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import { url_base_forecast, api_key } from "./../constants/api_url";
import "./styles.css";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const data = {
  temperature: 10,
  humidity: 10,
  weatherState: "normal",
  wind: "normal"
};

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null };
    }
    
    componentDidMount = () => {
        //fetch or axios
        const url_forecast = `${url_base_forecast}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
            }
        )
        
    }

  renderForecastItemDays() {
    return "Render Items";
    //   return days.map(day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>);
  }

    renderProgress = () => { 
        return <h3>Loading Extended Forecast</h3>;
    }
    
  render() {
    const { city } = this.props;
    const { forecastData } = this.state;

    return (
      <div>
        <h3 className="forecast-title">Forecast Extended for {city}</h3>
        {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.protoTypes = {
  city: PropTypes.string.isRequired
};

export default ForecastExtended;
