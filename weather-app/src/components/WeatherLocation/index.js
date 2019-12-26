import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={"Envigado"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;