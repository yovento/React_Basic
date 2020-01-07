import React from 'react';
import PropTypes from 'prop-types';
import { url_base_icon } from './../../../constants/api_url';
import './styles.css';

const getWeatherIcon = icon => {
    
    if (icon)
        return <img alt="few clouds" src={url_base_icon(icon)} width="50" height="50"/>
    else        
        return <img alt="few clouds" src={url_base_icon("10d")} width="50" height="50"/>
};

const WeatherTemperature = ( { temperature, icon} ) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(icon)
        }
        
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
};

export default WeatherTemperature;