import convert from 'convert-units';

const getTemp = kelvin => {
    return Number.parseFloat(convert(kelvin).from("K").to("C").toFixed(2));
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const { icon } = weather_data.weather[0];
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        icon,
        wind: `${speed} m/s`
    }
    console.log(data);
    return data;
}

export default transformWeather;