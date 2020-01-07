import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data: { temperature, icon, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature}
                icon={icon} />
            <WeatherExtraInfo humidity={humidity}
                wind={wind} />
        </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;