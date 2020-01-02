import React from 'react';
import WeatherIcons from 'react-icons-weather';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';
import './styles.css';
const icons = {
    [CLOUD]: "301",
    [CLOUDY]: "500",
    [SUN]: "600",
    [RAIN]: "701",
    [SNOW]: "801",
    [WINDY]: "901"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    
    if (icon)
        return <WeatherIcons className="wicon" name="owm" iconId={icon} flip="horizontal" rotate="90" size={sizeIcon}></WeatherIcons>
    else        
        return <WeatherIcons className="wicon" name="owm" iconId="301" flip="horizontal" rotate="90" size={sizeIcon}></WeatherIcons>
};

const WeatherTemperature = ( { temperature, weatherState} ) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;