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
} from './../constants/weathers';

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
    
    if (icon)
    return <WeatherIcons name="owm" iconId={icon} flip="horizontal" rotate="90"></WeatherIcons>
    else        
    return <WeatherIcons name="owm" iconId="301" flip="horizontal" rotate="90"></WeatherIcons>
};

const WeatherTemperature = ( { temperature, weatherState} ) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        
        <span>{`${temperature} C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;