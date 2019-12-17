import React from 'react';
import WeatherIcons from 'react-icons-weather';

const WeatherTemperature = ( { temperature, weatherState} ) => (
    <div>
        <WeatherIcons name="owm" iconId="301" flip="horizontal" rotate="90"></WeatherIcons>
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;